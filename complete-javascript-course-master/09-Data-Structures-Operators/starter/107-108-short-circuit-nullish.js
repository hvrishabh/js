'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = [1],
    mainIndex = [0],
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived ${this.starterMenu[starterIndex]} and main menu ${[
        this.mainMenu[mainIndex],
      ]} will ve delived to ${address} at ${time} hours`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/////////////////.................. OR Operator ............
// // logical operator May use any data type, return any data type
// short-circuit evaluation
// // if the first value is truthy in OR || , then OR operator will not even conside the rest value passed .otherwise it will iterate through other values also.

console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
// restaurant.numGuests = 0;  // if the value is 0, it will be considered as false in || OR operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

////////////////////////................ AND operator.......

console.log('...................AND...................');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinch');
}

restaurant.orderPizza &&
  restaurant.orderPizza('muhroom1', 'spanich1', 'mirchi');
//////////////////.............Nullish Operator...........

console.log('...................Nullish...................');

restaurant.numGuests1 = 0;
const guest3 = restaurant.numGuests1 || 10;
console.log(guest3);

// // it works with the idea of null value
// // Nullish value: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests1 ?? 10;
console.log(guestCorrect); // 0

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// // ///// Rest  operator is similar to spread operator , it works directly opposite to spread operator
// // // i.e. to collect multiple element and condnse them to single array;

// //// SPREAD , bcoz on RIGHT side of = operator
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // // REST , boz on the left hand side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // from the above restaurant object
// // the rest element must be the last element, in the defined array

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// /////////////// OBjects//////////.......REST PATTERN.........
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //////////...........REST oopetor with ,FUNCTIONS>>>>>>>>>>>>>

// const add = function (...numbers) {
//   // pack the values into numbers in argument via REST operator

//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7);
// add(2, 3, 5, 2, 3, 5);

// //// using spread opeator first and inside the function using the REST operator
// const x = [23, 5, 7];
// add(...x); // unpack the values

// // //EXAMPLE from above objects

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mixveg');
// // restaurant.orderPizza();  // Undefined

// /////////////////////////////////////////////
// //////////////////////////////////////////////

// ///////////////////////////////////////////////
// // ///////////./....... Spread Operator ,, unpacking all the array elements at once ..........................

// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(newArr);
// // console.log(...newArr);
// // // // When we need elements of array indivisually

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);
// // // // using spread Operator , we create a new array rather than modifing the existing one,
// // // // spear operator help us adding the new elements to the array,but it takes all the values from the array rather than just selected values, used whenever we want to seperte elements by comma, where as destrucre allow us to create new variables and allowing us to take selected values from the arrray.
// // // // uses of spead operator
// // // merge the operators together and create a shallow copies of arrays

// // const mainMenuCopy = [...restaurant.mainMenu];
// // console.log('mainMenuCopy', mainMenuCopy);

// // // join arrays
// // // const menu = [restaurant.mainMenu, ...restaurant.starterMenu, ...mainMenuCopy];
// // // console.log(menu);

// // const menu = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// //   ...mainMenuCopy,
// // ];
// // console.log(menu);

// // // spead operators works on all iterables,
// // // // iterables are things all array,maps,sets, and string, ... but not objects

// // const str = 'jonas';
// // const letters = [...str, ' ', 's.']; // seperating each letter of string and storing in array
// // console.log(letters);

// // // mostly used when we pass an argument or we build a new array

// // const sepletters = [...str];
// // console.log(sepletters);
// // console.log(typeof sepletters);
// // console.log(typeof [...str]);

// // // but some limitation of spread operators are

// // // console.log(`${[(...str)]} dummy`);   // Error , syntax error

// // // Example
// // const ingredients = [
// //   // prompt("let's make pasta! Ingredient 1?"),
// //   // prompt("let's make pasta! Ingredient 2?"),
// //   // prompt("let's make pasta! Ingredient 3?"),
// // ];

// // console.log(ingredients);

// // // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // restaurant.orderPasta(...ingredients);

// // // // // Spread operators also works with objects although objects are not iterables......from 2018
// // // Real-world example

// // const newRestaurant = { founding: 1991, ...restaurant, founder: 'Guisepper' };

// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurant.name = 'Ristorante Roma';
// // console.log(restaurantCopy);
// // console.log(restaurant);
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// // // we cam also create the shallow copies of objects.
