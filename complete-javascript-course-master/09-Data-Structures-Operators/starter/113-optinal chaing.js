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
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // we can compute propetry name , rather than writing it out.
};

// ////////////////............Optional Chaining.......
console.log(restaurant.openingHours.mon);
console.log((restaurant.openingHours.mon &&= restaurant.openingHours.mon.open));

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with opetional chaning
// // if the optional chaining condition is true it will reutrn the value else it will return the undefined not the long error........
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} , we open at ${open}`);
}

/////////..Optional chaining for METHODS...............
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderRisooto?.(0, 1) ?? 'Method does not exit');

///////..........Optional chaining works for Array ...... here we can check if the array is empty or not

const users = [
  {
    name: 'jonas',
    email: 'Hello@jonas',
  },
];

console.log(users[0]?.name ?? 'User array EMpty');

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('user array empty');
}
