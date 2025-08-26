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

-   <Ingredient :quantity="150" unit="g">self-raising flour</Ingredient>
-   <Ingredient :quantity="1" unit="tsp">baking powder</Ingredient>
-   <Ingredient :quantity="1" unit="tsp">sugar</Ingredient>
-   <Ingredient :quantity="1">large free-range egg</Ingredient>
-   <Ingredient :quantity="240" unit="ml">semi-skimmed milk</Ingredient>
-   <Ingredient :quantity="1">orange</Ingredient>
-   <Ingredient>vanilla extract</Ingredient>

## Method

1. <Method>Mix all the dry ingredients together in a large bowl. Gradually beat in the egg, then add the milk slowly, whisking well to get as smooth a batter as possible.</Method>
2. <Method>Grate in the orange zest and add a few drops of vanilla extract.</Method>
3. <Method>Get your waffle machine ready. Once it’s hot, ladle in the batter mixture and seal, cook for 8 - 10 minutes.</Method>

</RecipeLayout>
