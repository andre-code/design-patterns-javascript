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
class NullRecipe {
  constructor(){
    this.id = -1;
    this.name = 'noName'
  }
  isSweet() {
    return false;
  }
}

const recipes = [
  new Recipe(1, 'chocolate cake'),
  new Recipe(2, 'Banana cake', {ingredients:['flour', 'salt', 'banana'], type: 'cake'})
];

function findRecipeById(id) {
  const recipe = recipes.find(recipe => recipe.id === id);
  if (recipe == null) {
    return new NullRecipe();
  }
  return recipe;
}

function printRecipes(id) {
  const recipe = findRecipeById(id);
  
  console.log(`Recipe ${recipe.name}`);

  if (recipe.isSweet()) {
    console.log(`The recipe is sweet`); 
  } else {
    console.log(`The recipe isnt sweet`); 
  }
}
printRecipes(1);
printRecipes(2);
printRecipes(3);
