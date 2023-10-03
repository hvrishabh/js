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
    // return `${[this.starterMenu[starterIndex]]} ${[this.mainMenu[mainIndex]]}`;
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // // if there are large no of parameter in function then we pass object inside the parameters that will destructure the parameters, so order doent matter for arguments

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

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

///////////./....... Spread Operator ,, unpacking all the array elements at once ..........................

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(newArr);
console.log(...newArr);
// // When we need elements of array indivisually

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// // using spread Operator , we create a new array rather than modifing the existing one,
// // spear operator help us adding the new elements to the array,but it takes all the values from the array rather than just selected values, used whenever we want to seperte elements by comma, where as destrucre allow us to create new variables and allowing us to take selected values from the arrray.
// // uses of spead operator
// merge the operators together and create a shallow copies of arrays

const mainMenuCopy = [...restaurant.mainMenu];
console.log('mainMenuCopy', mainMenuCopy);

// join arrays
// const menu = [restaurant.mainMenu, ...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

const menu = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
  ...mainMenuCopy,
];
console.log(menu);

// spead operators works on all iterables,
// // iterables are things all array,maps,sets, and string, ... but not objects

const str = 'jonas';
const letters = [...str, ' ', 's.']; // seperating each letter of string and storing in array
console.log(letters);

// mostly used when we pass an argument or we build a new array

const sepletters = [...str];
console.log(sepletters);
console.log(typeof sepletters);
console.log(typeof [...str]);

// but some limitation of spread operators are

// console.log(`${[(...str)]} dummy`);   // Error , syntax error

// Example
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt("let's make pasta! Ingredient 2?"),
  // prompt("let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// // // Spread operators also works with objects although objects are not iterables......from 2018
// Real-world example

const newRestaurant = { founding: 1991, ...restaurant, founder: 'Guisepper' };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurant.name = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurant);
console.log(restaurantCopy.name);
console.log(restaurant.name);

// we cam also create the shallow copies of objects.
