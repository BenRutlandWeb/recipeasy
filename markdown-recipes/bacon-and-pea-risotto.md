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

-   <Ingredient :quantity="1">onion</Ingredient>
-   <Ingredient :quantity="2" unit="tbsp">olive oil</Ingredient>
-   <Ingredient :quantity="1">knob of butter</Ingredient>
-   <Ingredient :quantity="6">rashers streaky bacon, chopped</Ingredient>
-   <Ingredient :quantity="300" unit="g">risotto rice</Ingredient>
-   <Ingredient :quantity="1" unit="l">hot vegetable stock</Ingredient>
-   <Ingredient :quantity="100" unit="g">frozen peas</Ingredient>
-   <Ingredient>freshly grated parmesan, to serve</Ingredient>

## Method

1. <Method>Finely chop the onion. Heat the olive oil and butter in a pan, add the onions and fry until lightly browned (about 7 minutes).</Method>
2. <Method>Add streaky bacon and fry for a further 5 minutes, until it starts to crisp.</Method>
3. <Method>Add the risotto rice and hot vegetable stock, and bring to the boil. Stir well, then reduce the heat and cook, covered, for 15-20 minutes until the rice is almost tender.</Method>
4. <Method>Stir in the frozen peas, add a little salt and pepper and cook for a further 3 minutes, until the peas are cooked.</Method>
5. <Method>Serve sprinkled with freshly grated parmesan and freshly ground black pepper.</Method>

</RecipeLayout>
