function nameMenuItem(item) {
  return `Delicious ${item}`;
}
function createMenuItem(item, amount, time) {
  return {
    name: item,
    price: amount,
    type: time,
  };
}
function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return ingredients
  } else {
  return ingredients.push(newIngredient);
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

// function decreasePrice(initialPrice) {
//   var product = (initialPrice * .10)
//   return initialPrice - product;
// };

function decreasePrice(initialPrice) {
  var product = (initialPrice * .9)
  return product
};

function createRecipe(titleS, ingredientS, typeS) {
  return {
    title: titleS,
    ingredients: ingredientS,
    type: typeS
  }
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
