<route>
{
  meta: {
    title: "Bacon and Pea Risotto",
    ingredients: ["bacon", "peas", "rice", "onion", "parmesan"],
    keywords: ["dinner", "meat"],
    image: "/recipeasy/bacon-and-pea-risotto.jpg",
  }
}
</route>

<RecipeLayout :serves="4">

# {{ $route.meta.title }}

Not one for risotto purists – this simple recipe has just a few ingredients and the stock is added all in one go. The result is creamy, comforting yet healthy

|                      |                 |
| -------------------- | --------------- |
| **Serves:**          | <ServesInput /> |
| **Preparation time** | 5 minutes       |
| **Cook time**        | 40 minutes      |

## Ingredients

-   <IngredientQuantity :quantity="1" /> onion
-   <IngredientQuantity :quantity="2" /> tbsp olive oil
-   <IngredientQuantity :quantity="1" /> knob of butter
-   <IngredientQuantity :quantity="6" /> rashers streaky bacon, chopped
-   <IngredientQuantity :quantity="300" />g risotto rice
-   <IngredientQuantity :quantity="1" />l hot vegetable stock
-   <IngredientQuantity :quantity="100" />g frozen peas
-   freshly grated parmesan, to serve

## Method

1. Finely chop 1 onion. Heat 2 tbsp olive oil and a knob of butter in a pan, add the onions and fry until lightly browned (about 7 minutes).
2. Add 6 chopped rashers streaky bacon and fry for a further 5 minutes, until it starts to crisp.
3. Add 300g risotto rice and 1l hot vegetable stock, and bring to the boil. Stir well, then reduce the heat and cook, covered, for 15-20 minutes until the rice is almost tender.
4. Stir in 100g frozen peas, add a little salt and pepper and cook for a further 3 minutes, until the peas are cooked.
5. Serve sprinkled with freshly grated parmesan and freshly ground black pepper.

</RecipeLayout>
