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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////l 146 ..........
// namkist.nelify.app

//////////////////////// l 147 DOM manupulation
const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // to clear all the static html
  // .textContent = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
     </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html); // to input our dynamic values of html
  });
};

displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
// console.log(containerMovements.textContent);

////////////////////// computing usernames L 151....

// const user = 'Steven Thomas Williams'; // stw
////////////////////////////////////////////////

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0].split('')[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

// we use foreach if we just want to loop over and dont need to create a new array,
// if we require to create a new array , we have to use map method

const initials = 'Steven Thomas Williams';
const user = initials.toLocaleLowerCase().split(' ');
console.log(initials);
const demo = console.log(initials[0].split('')[0]);

const username = user.map(function (name) {
  return name[0].split('')[0];
});
console.log(username.join(''));

// // with forEach ........... loop
// const test1 = [];
// initials.forEach(function (value) {
//   return test1.push(value[0].split('')[0]);
// });

// console.log(test1.join(''));

//////////////////////////////////////////////////
///////..............for self learning...............

// const first = 'hitesh kumar verma';

// const second = first
//   .toLowerCase()
//   .split(' ')
//   .map(function (test) {
//     return test[0].split('');
//   })
//   .join('');

// console.log(second);

// const final = function (acc) {
//   return acc
//     .toLowerCase()
//     .split(' ')
//     .map(test => test[0].split(''))
//     .join('');
// };

// const hit = final('hitesh kumar verma');
// console.log(hit);

// const acco = function (accs) {
//   accs.forEach(function (acc) {
//     return (acc.username1111 = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(test => test[0].split(''))
//       .join(''));
//   });
// };

// acco(accounts);
// console.log(accounts);
