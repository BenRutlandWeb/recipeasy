<route>
{
  meta: {
    title: "Smoky Chorizo Salmon",
    ingredients: ["salmon", "tomatoes", "basil", "olives", "chorizo"],
    keywords: ["fish", "dinner"],
    image: "/recipeasy/smoky-chorizo-salmon.jpg",
  }
}
</route>

<RecipeLayout :serves="2">

# {{ $route.meta.title }}

Smoky chorizo salmon with sweet cherry tomatoes & basil

|                       |                 |
| --------------------- | --------------- |
| **Serves:**           | <ServesInput /> |
| **Preparation time:** | 5 minutes       |
| **Cook time:**        | 15 minutes      |

## Ingredients

-   <Ingredient :quantity="300" unit="g">salmon fillets, skin on, scaled, pin-boned, from sustainable sources</Ingredient>
-   <Ingredient :quantity="300" unit="g">ripe mixed-colour cherry tomatoes</Ingredient>
-   <Ingredient :quantity="4">sprigs of fresh basil</Ingredient>
-   <Ingredient :quantity="8">black olives, (stone in)</Ingredient>
-   <Ingredient :quantity="1" unit="tbsp">red wine vinegar</Ingredient>
-   <Ingredient :quantity="1" unit="tsp">extra virgin olive oil</Ingredient>
-   <Ingredient :quantity="30" unit="g">higher-welfare chorizo</Ingredient>

## Method

1. <Method>Put the salmon flesh side down in a large cold non-stick frying pan and place on a medium-high heat.</Method>
2. <Method>As the pan comes up to temperature and the salmon begins to sizzle (about 3 minutes), flip it over and cook on the skin side for 5 minutes, or until very crisp and just cooked (depending on its thickness).</Method>
3. <Method>Meanwhile, halve the cherry tomatoes, tear up most of the basil leaves, then toss it all with the red wine vinegar and a pinch of sea salt and black pepper.</Method>
4. <Method>Squash the olives and discard the stones, then finely chop the flesh. Mix with the extra virgin olive oil and a splash of water.</Method>
5. <Method>Finely slice the chorizo, add to the pan for the last 2 minutes, then toss in the dressed tomatoes for 30 seconds.</Method>
6. <Method>Divide between your plates, with the salmon on top. Spoon over the dressed olives and pick over the remaining basil.</Method>

</RecipeLayout>
