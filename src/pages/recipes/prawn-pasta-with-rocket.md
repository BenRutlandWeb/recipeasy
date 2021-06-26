<route>
{
  meta: {
    title: "Prawn Pasta With Rocket",
    ingredients: ["garlic", "pine nuts", "chilli pepper", "prawns", "white wine", "basil", "pasta", "rocket"],
    keywords: ["italian", "dinner", "seafood"],
    image: "/recipeasy/prawn-pasta-with-rocket.jpg",
  }
}
</route>

<Layout>

<RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />

<RecipeChips :chips="$route.meta.keywords" />

# {{ $route.meta.title }}

|                      |            |
| -------------------- | ---------- |
| **Serves:**          | 4          |
| **Preparation time** | 5 minutes  |
| **Cook time**        | 20 minutes |

## Ingredients

- 5 tablespoons olive oil
- 2 garlic cloves, finely sliced
- 50g pine nuts
- 1 medium-hot red chilli, finely sliced and deseeded
- 300g large fresh raw prawns, peeled, heads and tails removed
- 1⁄2 glass dry white wine
- 3 tablespoons finely sliced fresh basil
- 500g linguine
- 100g rocket leaves
- Salt

## Method

1. Heat the olive oil in a large frying pan and shallow-fry the garlic, pine nuts and chilli for about 20 seconds, then add the prawns and cook for about 1 minute.
2. Add the wine and basil, season with salt and simmer over a high heat for about 2 minutes. Remove the pan from the heat.
3. Meanwhile, cook the pasta in a large pan of boiling salted water until al dente. Drain and add to the frying pan.
4. Return the frying pan to a high heat and immediately add in the rocket leaves, mix well for about 1 minute to allow the rocket to soften slightly and the pasta to absorb the flavour.
5. Serve immediately.

</Layout>
