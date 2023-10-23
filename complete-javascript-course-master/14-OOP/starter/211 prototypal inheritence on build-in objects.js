'use strict';

//////////////////////////l 203 .......constructon and new operator..........

const Person = function (firstName, birthYear) {
  // console.log(this);
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);

//////////// l 219 Prototypes.................

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// jonas.calcAge(); // 46
// matilda.calcAge(); // 20

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// // settings properties on prototype

Person.prototype.species = 'Homo Spaniens';
// console.log(jonas, matilda);
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

//////////.......... 210    Prototypal inheritance  / Delegation works

////////////.......211 ..........Prototypal inheritance on Build-In objects.......

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

//////////////// prototypes of arrays

const arr = new Array([2, 3, 4, 5, 6, 6, 6, 6]);
// const arr = [2, 3, 4, 5, 6]; // is same as, new Array ===[2,3,4,5,6]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // Prototype property of the constructor is gonna be the prototype of all the object created by that constructor
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

/////////extend functionality of array using prototypes

// // here we added a new property to the Array constructor , now all arrays will inherit this method and we can call that method on any array that we want.
// but this is genreally not a good idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

///////////////.........
const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
