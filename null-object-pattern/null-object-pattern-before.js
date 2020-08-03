/* 
 When we create a object that could return a value null we should verify if it is null before to call some inn properties,
 to solve that exist the null object pattern */

 class Recipe {
  constructor(id, name, {instructions, ingredients, type} = {},) {
    this.id = id;
    this.name =  name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.type = type;
  }
  isSweet() {
    return this.type === 'cake';
  }
}

const recipes = [
  new Recipe(1, 'chocolate cake'),
  new Recipe(2, 'Banana cake', {ingredients:['flour', 'salt', 'banana'], type: 'cake'})
];

function findRecipeById(id) {
  return recipes.find(recipe => recipe.id === id);
}

function printRecipes(id) {
  const recipe = findRecipeById(id);
  
  let recipeName = recipe && recipe.name ? recipe.name : 'noName';
  console.log(`Recipe ${recipeName}`); 

  if (recipe && recipe.type && recipe.isSweet()) {
    console.log(`The recipe is sweet`); 
  } else {
    console.log(`The recipe isnt sweet`); 
  }
}
printRecipes(1);
printRecipes(2);
printRecipes(3);
