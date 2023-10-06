'use strict';

///////////////////////.......... function returning new functions................

// this concept is more useful in the environment called functional programming.

// this works because of closeurs........
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('jonas');
greetHey('Steven');

greet('hello')('Jonas');

// eg with allow function
const greet1 = greeting1 => name1 => {
  console.log(`${greeting1} ${name1}`);
};

greet1('HELLLO')('HITESH');

////////////////// .........function calling back function................

const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by:${fn.name}`); //name is just the name propertry of the functions , just like length and trim
};

transformer('Javascript is the best!', upperFirstWord); // upperFirstWord is a callback function, this function is not called here, just passed as an argument to transformer(higher order function), and is called inside the transformer function.
transformer('Javascript is the best!', oneword);

//eg

// js uses callback all the time.
// callback makes our code more reusable and it allows us to create a abstraction.
const high5 = function () {
  console.log(`hello`);
};

document.body.addEventListener('click', high5);

//eg
['Jonas', 'Martha', 'Adam'].forEach(high5);
