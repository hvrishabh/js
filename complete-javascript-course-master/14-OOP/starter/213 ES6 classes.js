'use strict';

// //////////////////////////l 203 .......constructon and new operator..........

// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('jonas', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);

// //////////// l 219 Prototypes.................

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // jonas.calcAge(); // 46
// // matilda.calcAge(); // 20

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(jonas)); // true
// // console.log(Person.prototype.isPrototypeOf(Person)); // false

// // // settings properties on prototype

// Person.prototype.species = 'Homo Spaniens';
// // console.log(jonas, matilda);
// // console.log(jonas.species, matilda.species);
// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// //////////.......... 210    Prototypal inheritance  / Delegation works

// ////////////.......211 ..........Prototypal inheritance on Build-In objects.......

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__); // Object.prototype (top of the prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// //////////////// prototypes of arrays

// const arr = new Array([2, 3, 4, 5, 6, 6, 6, 6]);
// // const arr = [2, 3, 4, 5, 6]; // is same as, new Array ===[2,3,4,5,6]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };
// // console.log(arr.unique());

// ///////////////.........
// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// //////////////..........................

// // Coding Challenge #1
// // Your tasks:
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' property. The 'speed' property is the current speed of the car in
// // km/h
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // Test data:
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// // GOOD LUCK

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`speed of Car inc by 10 and  is ${this.speed} `);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`speed dec by 5 and is  ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

/////////////////////////////////////////////////////////
////////////////...................
//////////////////.........l 213...... ES6 classes........
// behind the scene classes are still a type of functions only.

// // class expression
const PersonCl1 = class {};

// // class decleration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // all these function that we write here outside the constructor function will be on the prototype inheritance

  //// methods will be added ot .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. classes are not  hoisted, even if they are class decleration, i.e we can not use them before they are declared, where as functions are hoisted.

// 2. Class are also first-class cititzens , same as functions, i.e we can pass them into functions and return them into functions.

// 3. classes are executed in strict mode
