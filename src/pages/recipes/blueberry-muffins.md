<route>
{
  meta: {
    title: "Blueberry Muffins",
    ingredients: ["eggs", "milk", "sugar", "flour", "blueberries"],
    keywords: ["baking", "breakfast", "snack", "vegetarian"],
    image: "/recipeasy/blueberry-muffins.jpg",
  }
}
</route>

<Layout>

<RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />

<RecipeChips :chips="$route.meta.keywords" />

# {{ $route.meta.title }}

|                      |            |
| -------------------- | ---------- |
| **Serves:**          | 12 muffins |
| **Preparation time** | 20 minutes |
| **Cook time**        | 25 minutes |

## Ingredients

- 2 medium eggs
- 125ml vegetable oil
- 250ml semi-skimmed milk
- 250g golden caster sugar
- 400g self-raising flour
- 1 tsp salt
- 150g blueberries

## Method

1. Heat oven to 200C/180C fan/gas 6. Line 2 muffin trays with paper muffin cases. In a large bowl beat 2 medium eggs lightly with a handheld electric mixer for 1 min.
2. Add 125ml vegetable oil and 250ml semi-skimmed milk and beat until just combined then add 250g golden caster sugar and whisk until you have a smooth batter.
3. Sift in 400g self-raising flour and 1 tsp salt (or 400g plain flour and 3 tsp baking powder if using) then mix until just smooth. Be careful not to over-mix the batter as this will make 4. the muffins tough.
4. Stir in 150g blueberries.
5. Fill muffin cases two-thirds full and bake for 20-25 mins, until risen, firm to the touch and a skewer inserted in the middle comes out clean. If the trays will not fit on 1 shelf, swap 7. the shelves around after 15 mins of cooking.
6. Leave the muffins in the tin to cool for a few mins and transfer to a wire rack to cool completely.

</Layout>
