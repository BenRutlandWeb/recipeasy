<route>
{
  meta: {
    title: "Pork With Tomatoes And Red Wine",
    ingredients: ["pork fillet", "tomatoes", "red wine", "tomato puree", "mixed herbs", "mushrooms", "courgettes", ],
    keywords: ["dinner", "italian"],
    image: "/recipeasy/pork-with-tomatoes-and-red-wine.jpg",
  }
}
</route>

<Layout>

<RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />

<RecipeChips :chips="$route.meta.keywords" />

# {{ $route.meta.title }}

Serve with rice and fresh vegetables.

|                      |            |
| -------------------- | ---------- |
| **Serves:**          | 4          |
| **Preparation time** | 10 minutes |
| **Cook time**        | 20 minutes |

## Ingredients

- 350g pork tenderloin or fillet, cut into strips
- 1 large onion, chopped
- 400g canned chopped tomatoes with herbs
- 150ml red wine
- 1 tablespoon tomato purée
- 150ml hot vegetable or chicken stock
- 1 teaspoon dried herbes de Provence or Italian mixed herbs
- 225g chestnut or open-cap mushrooms, halved
- 2 courgettes, sliced thickly
- 2 teaspoons cornflour
- salt and freshly ground black pepper

## Method

1. Dry-fry the pork and onion for 5 minutes, then stir in the canned tomatoes, red wine, tomato purée, stock, herbs, mushrooms, courgettes and sage.
2. Bring to the boil, then cover and simmer for 15 minutes.
3. Blend the cornflour to a paste with just enough water and stir in to the pork mixture.
4. Simmer uncovered, for 1-2 minutes to thicken the sauce. Season to taste. Serve.

</Layout>
