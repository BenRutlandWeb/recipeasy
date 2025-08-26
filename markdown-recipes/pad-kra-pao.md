<route>
{
  meta: {
    title: "Pad Kra Pao",
    ingredients: ["pork", "basil", "chilli peppers", "garlic", "rice"],
    keywords: ["dinner", "thai", "meat"],
    image: "/recipeasy/pad-kra-pao.jpg",
  }
}
</route>

<RecipeLayout :serves="2">

# {{ $route.meta.title }}

|                       |                 |
| --------------------- | --------------- |
| **Serves:**           | <ServesInput /> |
| **Preparation time:** | 10 minutes      |
| **Cook time:**        | 25 minutes      |

## Ingredients

-   <Ingredient :quantity="250" unit="g">minced pork</Ingredient>
-   <Ingredient :quantity="2">cloves garlic, crushed</Ingredient>
-   <Ingredient :quantity="3">birds eye chillis, finely chopped</Ingredient>
-   <Ingredient :quantity="2">long beans, chopped</Ingredient>
-   <Ingredient :quantity="15" unit="g">Thai basil</Ingredient>
-   <Ingredient :quantity="4" unit="tbsp">vegetable oil</Ingredient>
-   <Ingredient :quantity="2" unit="tbsp">oyster sauce</Ingredient>
-   <Ingredient :quantity="1" unit="tbsp">fish sauce</Ingredient>
-   <Ingredient :quantity="1" unit="tbsp">soy sauce</Ingredient>
-   <Ingredient :quantity="1" unit="tbsp">dark soy sauce</Ingredient>
-   <Ingredient :quantity="1" unit="tbsp">brown sugar</Ingredient>
-   <Ingredient :quantity="150" unit="g">jasmine rice</Ingredient>

## Method

1. <Method>Heat the oil in a wok. Add the crushed garlic and finely chopped chilli peppers and fry until fragrant.</Method>
2. <Method>Add the minced pork and stir-fry until cooked.</Method>
3. <Method>Meanwhile, combine the oyster sauce, fish sauce, soy sauce, dark soy sauce and brown sugar. Add a little water if needed to get a thick sauce consistency.</Method>
4. <Method>Add the sauce to the wok and stir-fry for about 10 minutes.</Method>
5. <Method>Turn off the heat and add the Thai basil, mix well and serve with jasmine or sticky rice.</Method>

</RecipeLayout>
