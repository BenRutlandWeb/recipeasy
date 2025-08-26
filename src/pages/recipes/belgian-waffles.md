<route>
{
  meta: {
    title: "Belgian Waffles",
    ingredients: ["flour", "egg", "milk", "sugar", "orange zest", "vanilla extract", "baking powder"],
    keywords: ["breakfast", "dessert"],
    image: "/recipeasy/belgian-waffles.jpg",
  }
}
</route>

<RecipeLayout :serves="3">

# {{ $route.meta.title }}

|                      |                 |
| -------------------- | --------------- |
| **Serves:**          | <ServesInput /> |
| **Preparation time** | 5 minutes       |
| **Cook time**        | 10 minutes      |

## Ingredients

-   <IngredientQuantity :quantity="150" />g self-raising flour
-   <IngredientQuantity :quantity="1" /> tsp baking powder
-   <IngredientQuantity :quantity="1" /> tsp sugar
-   <IngredientQuantity :quantity="1" /> large free-range egg
-   <IngredientQuantity :quantity="240" />ml semi-skimmed milk
-   <IngredientQuantity :quantity="1" /> orange
-   vanilla extract

## Method

1. Mix all the dry ingredients together in a large bowl. Gradually beat in the egg, then add the milk slowly, whisking well to get as smooth a batter as possible.
2. Grate in the orange zest and add a few drops of vanilla extract.
3. Get your waffle machine ready. Once it’s hot, ladle in the batter mixture and seal, cook for 8 - 10 minutes.

</RecipeLayout>
