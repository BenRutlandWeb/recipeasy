<route>
{
  meta: {
    title: "Blueberry Muffins",
    ingredients: ["eggs", "milk", "sugar", "flour", "blueberries"],
    keywords: ["breakfast", "snack", "baking", "vegetarian"],
    image: "/recipeasy/blueberry-muffins.jpg",
  }
}
</route>

<RecipeLayout>

# {{ $route.meta.title }}

|                      |            |
| -------------------- | ---------- |
| **Serves:**          | 12 muffins |
| **Preparation time** | 20 minutes |
| **Cook time**        | 25 minutes |

## Ingredients

-   <Ingredient :quantity="2">medium eggs</Ingredient>
-   <Ingredient :quantity="125" unit="ml">vegetable oil</Ingredient>
-   <Ingredient :quantity="250" unit="ml">semi-skimmed milk</Ingredient>
-   <Ingredient :quantity="250" unit="g">golden caster sugar</Ingredient>
-   <Ingredient :quantity="400" unit="g">self-raising flour</Ingredient>
-   <Ingredient :quantity="1" unit="tsp">salt</Ingredient>
-   <Ingredient :quantity="150" unit="g">blueberries</Ingredient>

## Method

1. <Method>Heat oven to 200C/180C fan/gas 6. Line 2 muffin trays with paper muffin cases. In a large bowl beat 2 medium eggs lightly with a handheld electric mixer for 1 min.</Method>
2. <Method>Add 125ml vegetable oil and 250ml semi-skimmed milk and beat until just combined then add 250g golden caster sugar and whisk until you have a smooth batter.</Method>
3. <Method>Sift in 400g self-raising flour and 1 tsp salt (or 400g plain flour and 3 tsp baking powder if using) then mix until just smooth. Be careful not to over-mix the batter as this will make 4. the muffins tough.</Method>
4. <Method>Stir in 150g blueberries.</Method>
5. <Method>Fill muffin cases two-thirds full and bake for 20-25 mins, until risen, firm to the touch and a skewer inserted in the middle comes out clean. If the trays will not fit on 1 shelf, swap 7. the shelves around after 15 mins of cooking.</Method>
6. <Method>Leave the muffins in the tin to cool for a few mins and transfer to a wire rack to cool completely.</Method>

</RecipeLayout>
