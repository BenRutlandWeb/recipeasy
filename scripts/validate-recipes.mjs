import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const recipesDir = path.join(root, 'src/data/recipes');
const schemasDir = path.join(root, 'src/schemas');
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const recipeSchema = JSON.parse(fs.readFileSync(path.join(schemasDir, 'recipe.json'), 'utf-8'));
const ingredientSchema = JSON.parse(
  fs.readFileSync(path.join(schemasDir, 'ingredient.json'), 'utf-8')
);
const dietSchema = JSON.parse(fs.readFileSync(path.join(schemasDir, 'diet.json'), 'utf-8'));
const unitSchema = JSON.parse(fs.readFileSync(path.join(schemasDir, 'unit.json'), 'utf-8'));
ajv.addSchema(ingredientSchema, 'ingredient.json');
ajv.addSchema(dietSchema, 'diet.json');
ajv.addSchema(unitSchema, 'unit.json');
recipeSchema.$id = 'recipe.json';
ajv.addSchema(recipeSchema);
const validate = ajv.getSchema('recipe.json');
if (!validate) {
  throw new Error('Recipe schema failed to compile.');
}
const files = fs.readdirSync(recipesDir).filter((f) => f.endsWith('.json'));
let hasErrors = false;
for (const file of files) {
  const filePath = path.join(recipesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (!validate(data)) {
    hasErrors = true;
    console.error(`\n${file}:`);
    for (const error of validate.errors ?? []) {
      console.error(`  - ${error.instancePath || '/'} ${error.message}`);
    }
  }
}
if (hasErrors) {
  console.error(`\nRecipe validation failed.`);
  process.exit(1);
}
console.log(`Validated ${files.length} recipes.`);
