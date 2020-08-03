
/*
 When we instance a new object it should to pass all the arguments in the orden stablished
 in the constructor of the class. This makes to pass indefined values if we dont need to
 pass all the values 

class Recipe {
  constructor(name, instructions, ingredients) {
    this.name =  name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
const cake = new Recipe('chocolate cake', undefined, ['flour', 'salt', 'banana']); 

//  To handle that case exist the Build Pattern, it allows to create the object passing only the values that want to pass 

// Build pattern Version 1

class Recipe {
  constructor(name) {
    this.name =  name;
  }
}
class RecipeBuilder {
  constructor(name) {
    this.recipe = new Recipe(name);
  }
  setIngredients(ingredients) {
    this.recipe.ingredients = ingredients;
    return this;
  }
  setInstructions(instructions) {
    this.recipe.instructions = instructions;
    return this;
  }
  build() {
    return this.recipe;
  }
}
const cake =  new RecipeBuilder('chocolate cake').build();
console.log(cake);
const bananaCake =  new RecipeBuilder('banana cake').setIngredients(['flour', 'salt', 'banana']).build();
console.log(bananaCake);
*/

// Build pattern Version 2

class Recipe {
  constructor(name, {instructions, ingredients} = {}) {
    this.name =  name;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

const cake =  new Recipe('chocolate cake');
console.log(cake);
const bananaCake = new Recipe('Banana cake', {ingredients:['flour', 'salt', 'banana']});
console.log(bananaCake);