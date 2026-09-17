# Recipeasy

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/benrutlandweb/recipeasy/publish.yml)

A static recipe site built with [Astro](https://astro.build), with dark mode and cook mode (screen wake lock) to make using recipes on mobile simple and easy.

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Start the local dev server                        |
| `npm run build`    | Validate recipes and build the site               |
| `npm run preview`  | Preview the production build                      |
| `npm run validate` | Validate all recipe JSON files against the schema |
| `npm test`         | Run unit tests                                    |
| `npm run lint`     | Lint the source code                              |
| `npm run format`   | Format files with Prettier                        |

## Adding a recipe

1. Add a new JSON file to `src/data/recipes/` using the slug as the filename, e.g. `my-new-recipe.json`.
2. Follow the schema in `src/schemas/recipe.json`. Each recipe needs:
   - `title`, `description`, `serves`, `prepTime`, `cookTime`
   - `image` pointing to `/recipeasy/<slug>.webp`
   - `keywords` for browsing (e.g. `Dinner`, `Vegetarian`)
   - `ingredients` and `methods`
3. Add the matching `.webp` image to `public/`.
4. Run `npm run validate` to check the file before committing.

## Architecture

- **Astro** renders static pages and layouts.
- **Vue islands** in `src/components/islands/` handle client-side interactivity only where needed.
- **Recipe data** lives in `src/data/recipes/` and is indexed at build time by `src/lib/recipes.ts`.

## Deployment

The site is deployed to GitHub Pages at `/recipeasy/` on push to `main`.
