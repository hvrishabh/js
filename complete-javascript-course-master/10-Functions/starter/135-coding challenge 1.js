'use strict';
/////////////////...........

// /////////////////...........COding challenge 1.......
// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

const poll = {
  question: 'What is your fav programming languate',
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      // to get the answers
      prompt(
        `${this.question}\n ${this.options.join(
          '\n'
        )} \n (Write options number)`
      )
    );
    // update the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus
poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [5, 2, 3] });

////////////////////............. THE call and apply method.................

// setting this, keyword manually

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function()[]
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// // does not work
//  //book(23, 'Sarah Williams'); // now this is a regular function call and in regular function 'this' keyword points to undefined.

// therefore we have to tell JS , explicitly what 'this' keyword refers to here and there are 3 methods to do so , call, apply and bind.

book.call(eurowings, 23, 'Sarah Williams'); // function is just an object and objects have method , so function can have methods too, and call() method is one of them.
// // call() function has first arguments, as on which object we are refering our this keyword here.
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Copper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Marry harry');
console.log(swiss);

// apply() method
// it works similar to call but it does not take list of arguments after 'this' keyword argument , rather it take array

const flightdata = [583, 'George cooper'];
book.apply(swiss, flightdata);
console.log(swiss);

book.call(swiss, ...flightdata);
console.log(swiss);

///////////........ bind() method.............

// // bind() method works similar to the call method,it set the this keyword for any function call,
// // bind does not immedietly calls the function ,rather it returns a new function where this keyword is bound. it sets to whatever value we pass to bound.

const bookEW = book.bind(eurowings);
const bookLU = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'STEVEN WILLIAMS');

const bookEW23 = book.bind(eurowings, 23); // here we have preset the flight no 23, // here the argument is already set, when we call the function only name argument is pending.
bookEW23('Jonas Schmedtmann');
bookEW23('Martha cooper');

// with EVENT LISTENERS

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //   console.log(this); // here this keyword is attached to button element, bcoz in event handler function , this keyword always points to handle on which is attached to,
  this.planes++;
  console.log(this.planes);
};
// // lufthansa.buyPlane(); // this time , 'this' keyword points to lufthansa object.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // lufthansa.buyPlane is the handler function and it is attached to 'buy new plane' button element,

// but we want 'this' keyword to point to lufthansa object , and we have to do this manually
// we have pass a mthod here , as an argument , not call a function , therefore we here use bind method , not the call method, bcoz call method calls the method .

// eg // Partial application
// means preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // here in addTax() function there is no this keyword usage but still we here use bind(null in place of this, and to fix other argument parameter like here for the rate)
// bind is different that default values , here we define a specific function.

console.log(addVAT(100));

// returning a function inside a funciton

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(1000));
