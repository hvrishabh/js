'use strict';

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('after marriage: ', marriedJessica);

// marriedJessica = {}; // Error bxoz this will need to create a new memory address and refernce.// wiith COnst

//.....................Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicacCopy = Object.assign({}, jessica2); // Shallow copy
jessicacCopy.lastName = 'Davis';
jessicacCopy.family.push('Mary');
jessicacCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('after marriage: ', jessicacCopy);

// deep clone is done using the external libraries........
