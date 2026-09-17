import fs from 'node:fs';
import path from 'node:path';
import { keywordToSlug } from './keywords';
import { type CompactListing } from './search';
export { keywordToSlug };
const RECIPES_DIR = path.resolve(process.cwd(), 'src/data/recipes');
export type { CompactListing };
export interface Ingredient {
  name: string;
  quantity?: number;
  unit?: string;
  description?: string;
}
export interface Recipe {
  $schema?: string;
  title: string;
  description: string;
  serves: number;
  prepTime: number;
  cookTime: number;
  image: string;
  keywords: string[];
  ingredients: Ingredient[];
  methods: string[];
  diet?: string;
  spiceLevel?: number;
}
export interface RecipeListing {
  title: string;
  image: string;
  id: number;
  related: number[];
}
export interface RecipeWithSlug extends RecipeListing {
  slug: string;
}
export interface RecipeIndex {
  search: Record<string, number[]>;
  listings: Record<string, RecipeListing>;
}
let cachedIndex: RecipeIndex | null = null;
const recipeCache = new Map<string, Recipe>();
function reduceWords(words: string[]): string[] {
  return words.filter((w, i, arr) => !arr.some((other, j) => i !== j && other.includes(w)));
}
function splitString(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(Boolean);
}
function getRecipeFiles(): string[] {
  return fs.readdirSync(RECIPES_DIR).filter((f) => f.endsWith('.json'));
}
function buildIdToSlugMap(listings: Record<string, RecipeListing>): Map<number, string> {
  return new Map(Object.entries(listings).map(([slug, listing]) => [listing.id, slug]));
}
function listingWithSlug(slug: string, listing: RecipeListing): RecipeWithSlug {
  return { slug, ...listing };
}
export function buildRecipeIndex(): RecipeIndex {
  if (cachedIndex) {
    return cachedIndex;
  }
  const files = getRecipeFiles();
  const slugs = files.map((f) => f.replace(/\.json$/, ''));
  const slugToId = new Map(slugs.map((slug, index) => [slug, index]));
  const recipeKeywordsById = new Map<number, string[]>();
  const search: Record<string, number[]> = {};
  const listings: Record<string, RecipeListing> = {};
  files.forEach((f) => {
    const slug = f.replace(/\.json$/, '');
    const recipeId = slugToId.get(slug)!;
    const content = JSON.parse(fs.readFileSync(path.join(RECIPES_DIR, f), 'utf-8')) as Recipe;
    listings[slug] = {
      title: content.title,
      image: content.image,
      id: recipeId,
      related: [],
    };
    const keywords = reduceWords([
      ...new Set([
        ...splitString(content.title),
        ...content.ingredients.map((i) => splitString(i.name)).flat(),
        ...content.keywords.map((i) => splitString(i)).flat(),
      ]),
    ]);
    recipeKeywordsById.set(recipeId, keywords);
    keywords.forEach((word) => {
      if (!search[word]) {
        search[word] = [];
      }
      search[word].push(recipeId);
    });
  });
  slugs.forEach((slug, recipeId) => {
    const keywords = recipeKeywordsById.get(recipeId) || [];
    const candidateScores = new Map<number, number>();
    keywords.forEach((word) => {
      const matches = search[word] || [];
      const weight = matches.length > 0 ? 1 / matches.length : 0;
      matches.forEach((candidateId) => {
        if (candidateId === recipeId) {
          return;
        }
        candidateScores.set(candidateId, (candidateScores.get(candidateId) || 0) + weight);
      });
    });
    listings[slug].related = [...candidateScores.entries()]
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
      .slice(0, 6)
      .map(([candidateId]) => candidateId);
  });
  cachedIndex = { search, listings };
  return cachedIndex;
}
export function getAllRecipes(): RecipeWithSlug[] {
  const { listings } = buildRecipeIndex();
  return Object.entries(listings).map(([slug, listing]) => listingWithSlug(slug, listing));
}
export function getRecipe(slug: string): Recipe | undefined {
  if (recipeCache.has(slug)) {
    return recipeCache.get(slug);
  }
  const filePath = path.join(RECIPES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  const recipe = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Recipe;
  recipeCache.set(slug, recipe);
  return recipe;
}
export function getCompactListings(): CompactListing[] {
  const { listings } = buildRecipeIndex();
  return Object.entries(listings).map(([slug, listing]) => ({
    id: listing.id,
    slug,
    title: listing.title,
    image: listing.image,
  }));
}
export function getAllKeywords(): string[] {
  const keywords = new Set<string>();
  for (const file of getRecipeFiles()) {
    const content = JSON.parse(fs.readFileSync(path.join(RECIPES_DIR, file), 'utf-8')) as Recipe;
    content.keywords.forEach((keyword) => keywords.add(keyword));
  }
  return [...keywords].sort((a, b) => a.localeCompare(b));
}
export function getRecipesByKeyword(keyword: string): RecipeWithSlug[] {
  const normalised = keyword.toLowerCase();
  return getAllRecipes().filter((recipe) => {
    const recipeData = getRecipe(recipe.slug);
    if (!recipeData) {
      return false;
    }
    return recipeData.keywords.some((k) => k.toLowerCase() === normalised);
  });
}
export function getRelatedRecipes(slug: string): RecipeWithSlug[] {
  const { listings } = buildRecipeIndex();
  const listing = listings[slug];
  if (!listing) {
    return [];
  }
  const idToSlug = buildIdToSlugMap(listings);
  return (listing.related || [])
    .map((id) => {
      const relatedSlug = idToSlug.get(id);
      if (!relatedSlug) {
        return null;
      }
      const relatedListing = listings[relatedSlug];
      return relatedListing ? listingWithSlug(relatedSlug, relatedListing) : null;
    })
    .filter((recipe): recipe is RecipeWithSlug => recipe !== null);
}
