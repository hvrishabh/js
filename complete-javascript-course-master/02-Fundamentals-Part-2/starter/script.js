/////////////////.................L47 48  for loop.........
"use strict";

// for loop keeps running while the condition is True

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types[] array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// // // .......................................
// const years = [1991, 2007, 1992, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
//   // ages[i] = Date - years[i];
// }
// console.log(ages);

// // continue and break;

// console.log("-----------ONLY STRINGS..................");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////................Reverse lOOPING.................

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "peter", "Steven"],
//   true,
// ];

// // 0,1,2,3,...
// // 4,3,2,1....0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// /////////.................. Nesting LOOP...........

// for (let Exercise = 1; Exercise < 4; Exercise++) {
//   console.log(`..............Starting excercise ${Exercise}`);
//   for (let rep = 1; rep < 5; rep++) {
//     console.log(`Lifing weight repetition ${rep}`);
//   }
// }

/////////////////////////////////........... L 49 while loop....................
// for (let rep = 1; rep < 5; rep++) {
//   console.log(`Lifing weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifing weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6);
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

//////////////////.......................coding challenge 4...........

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const fun1 = function () {
  return +10;
};

// for (let i = 0; i < bills.length; i++) {
//   tips[i] = calcTip(bills[i]);
//   totals[i] = bills[i] + tips[i];

//   // tips.push(calcTip(bills[i]));
//   // console.log(totals);
//   // return totals.push(bills[i] + tips[i]);
// }
// console.log(totals);

//////////////////////////............Foreach in JS.......
let demo;
const test = bills.forEach((bill) => {
  demo = calcTip(bill);

  console.log(bill, demo);
});
