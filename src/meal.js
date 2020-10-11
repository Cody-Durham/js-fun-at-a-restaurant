function nameMenuItem(food) {
  return `Delicious ${food}`;
}
// -------------------------------------------
function createMenuItem(name, price, type) {
  var menuItem = {
  name: name,
  price: price,
  type: type,
};
  return menuItem
};
// -------------------------------------------
function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping)) {
    return ingredients
  }
  ingredients.push(topping);
};
// -------------------------------------------
function formatPrice(initialPrice) {
  console.log(initialPrice);
  return `$${initialPrice}`
};
// -------------------------------------------
//Need to come back and make this more dynamic--
function decreasePrice(price) {
  return price * .9
};
// -------------------------------------------
function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };
  return recipe
}
// -------------------------------------------

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
