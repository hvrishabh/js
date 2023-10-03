'use strict';

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1996);
/////////////////////////.......................................
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1996);
//////////////////////////////////////.,,,,,,,,,,,.,,,,,........
const jonas = {
  year: 1992,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};
jonas.calcAge();
/////////////////////////////,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const matila = {
  year: 2013,
};

matila.calcAge = jonas.calcAge; // Method Borrowing
matila.calcAge();

const f = jonas.calcAge; // this is possible bcoz a function is just a value.
console.log(f);
// f();     // Error for this.year is not defined , when calling a this keyword on just a function
