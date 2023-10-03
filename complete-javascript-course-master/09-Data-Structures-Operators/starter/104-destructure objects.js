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

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',

  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log(name);
console.log(openingHours);
console.log(categories);
/////////////////////.............................

// storing the destructure with a different variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('name of rest', restaurantName);
console.log('timing of rest', hours);
console.log('categories of food', tags);

// setting default value while destructing the array

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// switching // mutating variables with objects

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// // let a = obj.a  // Error a is already initalized above
// {a,b} = obj // ERROR syntax error , whle we start a line {} with curle bracket JS expects a code block, but we cant assign anything to code block , there for assign the round blrackets to them

console.log(({ a, b } = obj));

//////////// Nested object destructing .............

// const { fri } = openingHours;
// console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);

//////////////////////////////////////////////////////////////////

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

// const [x, y, z] = arr; // Destructuring of an array
// console.log(x, y, z);
// console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // // ............///////////..........Re Arrangements
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main,secondary)

// // ////..................////////////.........Swapping Variables

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //////////////////...................Resturant Order..........

// // array of starter and main menu

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// // destructing the array

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// ///////////////////................Nested Destructing .......
// const nested = [2, 4, [5, 6]];
// const [a1, , b1] = nested;
// console.log(a1, b1);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// /////////////// setting the default value while extracting the array.......

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
