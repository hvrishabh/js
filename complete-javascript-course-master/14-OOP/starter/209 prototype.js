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

//////////// l 219 Prototypes.................

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  //   console.log(this); // this keyword , here is set to the object calling the method
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
// console.log(jonas); // here in this instance we dont have calaAge method defined but still due to prototype inheritance we are able to access this method , that is created on Person constructor function, via prototype property

matilda.calcAge(); // 20

// // it works bcoz any object has access to the methods and properties form its propotypes, and prototype for jonas and metilda is Preson.prototype

console.log(jonas.__proto__); // it is simply prototype of jonas,
// // so the prototype of the jonas object is essentially the prototype property of the constuctor function.

console.log(jonas.__proto__ === Person.prototype); // true

//// Person.prototype is not the prototype of person, but instead , this is gonna be used as the prototype of all the objects that are created with the person constructor function .

// // jonas.__proto__  is the prototype property of the person constructor function

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// // settings properties on prototype

Person.prototype.species = 'Homo Spaniens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
