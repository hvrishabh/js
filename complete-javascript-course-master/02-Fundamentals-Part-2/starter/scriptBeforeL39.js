// l32.... Strict Mode in JS

"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;

// if (hasDriversLicence) console.log("i can drive");

////////..........L 33 functions ...............

// function is a piece of code which can be reused;

// function logger() {
//   console.log("My name is Jonas.");
// }

// // calling ,running, invoking the function .
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// let appleJuice = fruitProcessor();
// console.log(appleJuice);

// console.log(fruitProcessor(3, 4));

/////////.......... L 34  Functional Decleration and Expression ...................

// // we can call function declartion  before they are defined in the code.
// function calcAge1(birthYear = 2000) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // ....... Another method to deckare the function
// // Anonymous function

// // this below code is an expression , which we have a value , and we have stored this into the calcAge2 variable .

// // we can call function declartion  before they are defined in the code.
// // but function expressions can not be called before they are defined

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//////////////............. L 35 Arrow functions......

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `The name is ${firstName} and the retirement age is ${retirement}`;
// };

// console.log(yearsUntillRetirement(1991, "Ramu"));

////////////................ L 36 Calling a function Inside the other function ..........

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(applePieces, orangePieces);
//   let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// const mixJuice = fruitProcessor(5, 6);
// console.log(mixJuice);

////////////////////////...................... L 37  REviewing functions ................

// const calcage = function (birthYear) {
//   return 2037 - birthYear;
// };
// const yearsUntillRetirement = function (birthYear, firstName) {
//   const age = calcage(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntillRetirement(1991, "Ram"));
// console.log(yearsUntillRetirement(1970, "Mike"));

///////////////////.........Coding channel 5...............

// const calcAverage = (score1,score2,score3) => {
//   return (score1+score2+score3) / 3;
// };
// let scoreKoalas = calcAverage(65,54,27);
// let scoreDolphins = calcAverage(44,23,71);

// let checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas > 2 * avgDolphins) {
//     console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

////////////////////.....................L 39 Arrays
