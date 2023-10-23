'use strict';

//////////////////////////l 203 .......constructon function and New operator

// creating a constructor function

// arrow function doesn't work as a constructor function bcoz it does not have its own this keyword

const Person = function (firstName, birthYear) {
  console.log(this);
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // // instance Methods
  // // never create a method inside of a constructor function, instead use protype and protype inheritance
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

// 1. New {} empty object is created
// 2. function is called, this, keyword set to new empty object = {} , as created above
// 3. {}, linked to prototype
// 4. function automatically return {} object

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('jack', 1975);
console.log(jack);

const jay = 'jay';
console.log(jay instanceof Person);
console.log(jonas instanceof Person);

//////////// l 219 prototypes.................
