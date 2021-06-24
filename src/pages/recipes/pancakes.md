<route>
{
  meta: {
    title: "Pancakes",
    ingredients: ["eggs", "milk", "flour"],
    keywords: ["breakfast", "dessert", "vegetarian"],
    image: "/recipeasy/pancakes.jpg",
  }
}
</route>

<Layout>

# {{ $route.meta.title }}

<RecipeImage :src="$route.meta.image" :alt="$route.meta.title" />

|                       |                         |
| --------------------- | ----------------------- |
| **Serves:**           | 6 pancakes              |
| **Preparation time:** | 5 minutes               |
| **Cook time:**        | 2-3 minutes per pancake |

Flippin' heck they're tasty

## Ingredients

- 2 Eggs
- 300ml Milk
- 100g Plain Flour

## Method

1. Mix together the eggs, milk and flour until a smooth batter
2. Ladle the batter into a hot non-stick frying pan
3. Fry until the bottom side is cooked and golden brown
4. Flip the pancake and cook the other side until golden
5. Serve with your favourite toppings.

</Layout>
