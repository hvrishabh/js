'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
//////////
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

  openingHours: openingHours,
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//////////////............Maps.......

// when creating a new map from scrach use this method,
// when adding elements to map programmatically follow the other map.set() method.

const question = new Map([
  ['question', 'What is the best programming language in the world? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct ans'],
  [false, 'try again'],
]);

// this above structure is the same as the , when getting entries from the openingHours object , as defined below

// convet Objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
// iterating the maps
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key} : ${value}`);
  }
}
// getting answer from prompt
// const answer = Number(prompt('Your answer'));
const answer = 3;

console.log(answer);

console.log(question.get(question.get('correct') === answer));

//// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
////////////////////////////////////////////////////

///////////////////...........MAPS...........

// // maps are data structe to map values to keys, in maps keys can have any datatype and "this" keyword can be used in maps,

// const rest = new Map(); // Create an empty map

// rest.set('name', 'Classico Italiano'); // it is similar to add method in sets, it also allows us to use any dataype we want to use.

// rest.set(1, 'Fireenece,Italy'); // it also updates the map ,it is called upon and but also returns the map
// console.log(rest.set(2, 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// // rest.set([1, 2], 'Test');
// // console.log(rest.get([1, 2])); // it will through undefined, bcoz [1,2] are not the same element in the heap , even if they are written in the same way.
// // therefore we have to , declare array with a variable name,
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// console.log(rest);

// ////////// ........ To read data from the map , we use the get method.....

// // console.log(rest.get('name'));
// // console.log(rest.get(true));
// // console.log(rest.get(false));

// // console.log(rest.has('name'));
// // console.log(rest.delete(2))
// // console.log(rest.clear())

// // console.log(rest.size);

// let time = 221;

// // if (time > rest.get('open') && time < rest.get('close')) {
// //   console.log(rest.get(true))
// // } else {
// //   console.log(rest.get(false))
// // }

// time > rest.get('open') && time < rest.get('close')
//   ? console.log(rest.get(true))
//   : console.log(rest.get(false));
