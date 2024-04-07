// const RECIPE: {
//     [x: string]: any;
//     "name": string;
//     "ingredients": {
//         [x: string]: any;
//         "cake": {
//             [x: string]: any;
//             "quantity": string;
//             "unit": string;
//             "name": string;
//         }[];
//         "buttercream": {
//             [x: string]: any;
//             "quantity": string;
//             "unit": string;
//             "name": string;
//         }[];
//     };
//     "steps": {
//         [x: string]: any;
//         "cake": string[];
//         "buttercream": string[];
//     };
//     "times": {
//         [x: string]: any;
//         "cake": string[];
//         "buttercream": string[];
//     };
//     "recipeURL": string;
// };

const RECIPE = {
  times: {
    cake: ['20', '8'],
    buttercream: ['45'],
  },
  ingredients: {
    cake: [
      {
        quantity: '200',
        unit: 'g',
        name: 'sugar',
      },
      {
        quantity: '6',
        unit: 'pc',
        name: 'eggs',
      },
      {
        quantity: '200',
        unit: 'g',
        name: 'flour',
      },
    ],
    buttercream: [
      {
        quantity: '50',
        unit: 'g',
        name: 'sugar',
      },
      {
        quantity: '2',
        unit: 'pc',
        name: 'eggs',
      },
      {
        quantity: '40',
        unit: 'g',
        name: 'flour',
      },
    ],
  },
};

var concat_test = RECIPE.times.cake.concat(RECIPE.times.buttercream);
// console.log(concat_test);

// Scenario 1
// function howLongDoesItTake(){
//     let arrayOfTimers = RECIPE.times;
//     let totalTime = 0;
//     for(let value in arrayOfTimers){
//         totalTime += Number(arrayOfTimers[value]);
//     }
//     return totalTime;
// }

function howLongDoesItTake() {
  var totalTime = 0;
  var arrayOfTimers = [RECIPE.times.cake, RECIPE.times.buttercream];
  for (var i = 0; i < arrayOfTimers.length; i++) {
    totalTime += Number(arrayOfTimers[i]);
  }
  return totalTime;
}

// const result = howLongDoesItTake();

// Scenario 2
// function getQuantityOfIngredient(ingredient, numberOfCakes){
//     var quantityOfIngredient = 0;
//     var unit = "";
//     for (var ingredientOfCake of RECIPE.ingredients.cake){
//         if(ingredientOfCake.name === ingredient){
//             // quantityOfIngredient = ingredientOfCake.quantity * numberOfCakes;
//             quantityOfIngredient = ingredientOfCake.quantity;
//             console.log(quantityOfIngredient, 'quantity oben');
//             unit = " " + ingredientOfCake.unit;

//             console.log('numberOfCakes--', numberOfCakes);
//             if(ingredient === "eggs"){
//                 if (numberOfCakes != 1) {
//                     console.log('case numberOfCakes != 1');

//                     console.log(ingredientOfCake.quantity);
//                     quantityOfIngredient = ingredientOfCake.quantity++
//                     quantityOfIngredient = ingredientOfCake.quantity * numberOfCakes;
//                     console.log(ingredientOfCake.quantity);
//                     console.log(quantityOfIngredient);
//                     // break;
//                 } else {
//                     console.log('case numberOfCakes = 1');
//                     console.log(ingredientOfCake.quantity);

//                     console.log({quantityOfIngredient});
//                     ingredientOfCake.quantity++
//                     quantityOfIngredient = ingredientOfCake.quantity;
//                     console.log(quantityOfIngredient);
//                 }
//             }

//         }
//     }
//     return quantityOfIngredient.toString() + unit;
// }

// Scenario 2
// function getQuantityOfIngredient(ingredient, numberOfCakes){
//     var quantityOfIngredient = 0;
//     var unit = "";
//     for (var ingredientOfCake of RECIPE.ingredients.cake){
//         if(ingredientOfCake.name === ingredient){
//             let copyIngredientOfCake = {...ingredientOfCake}
//             quantityOfIngredient = copyIngredientOfCake.quantity;
//             unit = " " + copyIngredientOfCake.unit;
//             if(ingredient === "eggs"){
//                 if(numberOfCakes != 1){
//                 console.log('case1: numberOfCakes != 1');

//                 console.log(quantityOfIngredient, 'quantityOfIngredient before ++');
//                 console.log(copyIngredientOfCake.quantity, 'copyIngredientOfCake.quantity before ++');

//                 copyIngredientOfCake.quantity++;
//                 quantityOfIngredient = copyIngredientOfCake.quantity;

//                 console.log(quantityOfIngredient, 'quantityOfIngredient after ++');
//                 console.log(copyIngredientOfCake.quantity, 'copyIngredientOfCake.quantity after ++');

//                 quantityOfIngredient = quantityOfIngredient * numberOfCakes;

//                 console.log(quantityOfIngredient, 'quantityOfIngredient after * numberOfCakes');

//                 // break;
//                 } else {
//                     console.log('case2: numberOfCakes = 1');
//                     console.log(quantityOfIngredient, 'quantityOfIngredient before ++');
//                     console.log(copyIngredientOfCake.quantity, 'copyIngredientOfCake.quantity before ++');

//                     // copyIngredientOfCake.quantity++;
//                     // quantityOfIngredient++;

//                     copyIngredientOfCake.quantity = Number(copyIngredientOfCake.quantity) + 1;
//                     quantityOfIngredient = copyIngredientOfCake.quantity;

//                     console.log(quantityOfIngredient, 'quantityOfIngredient after ++');
//                     console.log(copyIngredientOfCake.quantity, 'copyIngredientOfCake.quantity after ++');
//                     // quantityOfIngredient = copyIngredientOfCake.quantity;
//                 }
//             }
//         }
//     }
//     return quantityOfIngredient.toString() + unit;
// }

// Scenario 2
function getQuantityOfIngredient(ingredient, numberOfCakes) {
  var quantityOfIngredient = 0;
  var unit = '';
  for (var ingredientOfCake of RECIPE.ingredients.cake) {
    if (ingredientOfCake.name === ingredient) {
      var copyIngredientOfCake = { ...ingredientOfCake };
      quantityOfIngredient = copyIngredientOfCake.quantity * numberOfCakes;
      unit = ' ' + copyIngredientOfCake.unit;
      if (ingredient === 'eggs') {
        // if(numberOfCakes != 1){
        copyIngredientOfCake.quantity++;
        quantityOfIngredient = copyIngredientOfCake.quantity;

        quantityOfIngredient = quantityOfIngredient * numberOfCakes;
        // break;
        // }
        // else {
        //     copyIngredientOfCake.quantity = Number(copyIngredientOfCake.quantity) + 1;
        //     quantityOfIngredient = copyIngredientOfCake.quantity;
        // }
      }
    }
  }
  return quantityOfIngredient.toString() + unit;
}

// const result = getQuantityOfIngredient("eggs", 2);
// console.log('result:', result);

// const result = getQuantityOfIngredient("eggs", 1);
// console.log('result:', result);

// Scenario 3
function getPurchaseList() {
  var calculator_funcs = [];
  var ingredients = RECIPE.ingredients.buttercream.concat(
    RECIPE.ingredients.cake
  );
  console.log(ingredients);
  for (var ingredient of ingredients) {
    calculator_funcs.push(function (result) {
      var quantityOfIngredient = result[ingredient.name]
        ? result[ingredient.name]
        : 0;
      console.log('quantityOfIngredient', quantityOfIngredient);
      result[ingredient.name] =
        quantityOfIngredient + Number(ingredient.quantity);
      console.log(result);
      return result;
    });
  }
  var result = {};
  for (var calculator_func of calculator_funcs) {
    result = calculator_func(result);
  }
  return result;
}

function getPurchaseList2() {
  var calculator_funcs = [];
  var ingredients = RECIPE.ingredients.buttercream.concat(
    RECIPE.ingredients.cake
  );
  console.log(ingredients);

  for (var ingredient of ingredients) {
    calculator_funcs.push(function (result) {
      var quantityOfIngredient = result[ingredient.name]
        ? result[ingredient.name]
        : 0;
      console.log('quantityOfIngredient', quantityOfIngredient);
      result[ingredient.name] =
        quantityOfIngredient + Number(ingredient.quantity);
      console.log(result);
      return result;
    });
  }
  var result = {};
  for (var calculator_func of calculator_funcs) {
    result = calculator_func(result);
  }
  return result;
}

function getPurchaseList3() {
  let ingredients = RECIPE.ingredients.buttercream.concat(
    RECIPE.ingredients.cake
  );
  let result = {};

  for (let ingredient of ingredients) {
    if (!result[ingredient.name]) {
      result[ingredient.name] = 0;
    }
    result[ingredient.name] += Number(ingredient.quantity);
  }

  return result;
}
2;
const result = getPurchaseList3();
console.log('result:', result);
