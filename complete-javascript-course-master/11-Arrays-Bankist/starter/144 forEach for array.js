'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // slice

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // ['c','d','e']
// // it returns the new array
// console.log(arr.slice(2, 4)); // ['c','d']  // index 2 is included but 4 index value is not included
// console.log(arr.slice(-2)); //[d,e]
// console.log(arr.slice(2, -2)); //[c]
// console.log(arr.slice(-1)); //[e]

// console.log(arr.slice()); // to create a shallow copy of the array

// //SPLICE // it changes / mutate the origional array
// // it is mainely used to delete one or more items of the array
// // console.log(arr.splice(3));
// arr.splice(-1);
// arr.splice(1, 2); // 2nd parameter is based on the no of values to be deleted
// console.log(arr);

// // REVERSE
// // Reverese method mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// // it does not mutate the original array here.

// // 1st is the method on which method is called and 2nd is the one which we pass into the concat method
// const Letters = arr.concat(arr2);
// console.log(Letters);

// console.log([...arr, ...arr2]);

// // JOIN
// // this will result in a string
// console.log(Letters.join('-'));

// // ///////////////////////////////////////////////
// // /////................ L143 ....... AT method

// // at() method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // to get the last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1)); // here in at() we can write -a to get the last value.

// // at method also works on strings
// console.log('jonas'.at(0));

// // ///////////////////////////////////////////////
// // /////................ l 144 ....... FOREACH()

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You desposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You desposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdraw ${Math.abs(movement)}`);
  }
}

console.log(`...................... FOREACH().........`);

// forEach()
// it requires a callback function, which tells it what to do with the values and values are passed as an argument to the function.

//// we also have current value, current index, whole array in the forEach() function.
// // continue and break statements do not work in forEach loop
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index + 1} : ${array} : You desposited ${movement}`);
  } else {
    console.log(`${index + 1} : ${array} : You withdraw ${Math.abs(movement)}`);
  }
});
