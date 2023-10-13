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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

///////////////// 151/////////
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

////////////////////////////////
/////// printing balance in app. .  using reduce method......

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

/////////////////////........152......filters.......

const deposit = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposit);

// // with for-of loop .............

// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositFor.push(mov);
// }

// console.log(depositFor);

const withdraws = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdraws);

///////////////////////////............... l 153....REDUCE ............
console.log(`...............reduce method.........`);

console.log(movements);

// accumulator is like a snow ball , that keeps on building and adding things
let sum = 0;
const balance = movements.reduce(function (
  accumulator,
  currentElement,
  index,
  array
) {
  console.log(index, accumulator);
  // return (sum = sum + currentElement);
  return accumulator + currentElement;
},
0);

// using arrow function()
const balance3 = movements.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0
);

console.log(balance);

// // using for loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// console.log(balance2);

///////////////////////////

// maximum value using REDUCE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
