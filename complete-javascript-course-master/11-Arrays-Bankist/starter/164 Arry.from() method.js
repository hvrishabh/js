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

// const eurToUSD = 1.11;

//////////////////////// l 147 DOM manupulation
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // to clear all the static html

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

// displayMovements(account1.movements);

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
// console.log(accounts);

////////////////////////////////
/////// printing balance in app. .  using reduce method......

// const calcDisplayBalance = function (movements) {
//   const balance = movements.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };
// // calcDisplayBalance(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements);

/////////////////////////...from l 155 chaining
// const calcDisplaySummary = function (movements) {
//   const incomes = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}😊`;

//   const out = movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}`;

//   const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * 1.2) / 100)
//     .filter((int, i, arr) => {
//       // if interest >1 then only it will be applicable.
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);

//   labelSumInterest.textContent = `${interest}`;
// };

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}😊`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // if interest >1 then only it will be applicable.
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

// calcDisplaySummary(account1.movements);

////////////////////////////////////............

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

/////////////////////////////////....... l 158...........

// // Event Handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  // console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('login');
    // display ui and wlcm message
    labelWelcome.textContent = `Welcome back , ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    // to remove pointer from PIN
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//////////////////////////////........ l159 implementing Transfer..................

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, reciverAcc);
  //clear inputs
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // console.log('transfer');

    // Doing the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
});

//////////////////////. from l 161........loan feature

//  loan given only if there is 10% of request amt in amy deposit
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount / 10)) {
    // add movement
    currentAccount.movements.push(amount);
    // upate UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

///////////////////////.................. l 160 findIndex ........
////////////.......... implementing close account feature.........

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
  labelWelcome.textContent = `Login to get Started `;
});

///////////////////////////////.......implementing sorting method using l 162.......

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
////////////////////............ l163 ....sorting arrays...........

// const owners = ['jonas', 'Zach', 1, 2, 5, 3, 'Adam', 'Martha'];
// console.log(owners.sort());
// // sort() it mutates the array and it rearranges numerically first and then alphabetically

// console.log(owners);

// // sorting with numbers
// // sorting() method does not work with the negative numbers, bcoz it converts every number to strign and then perform the sorting .
// console.log(movements);
// // console.log(movements.sort()); // does not work

// // sorting (for ascending order)
// // return < 0 ==> A > B // order remains the same
// // return > 0 ==> B > A // switch the order

// // movements.sort((a, b) => {
// //   // here a and b , are two consecutive values
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);

// /////////// sorting() (for descending order)
// // return < 0 --> A > B // order remains same
// // return > 0 --> A < B // switch the order

// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);

//////////////////////////////////////////////////
///////////////////////////////////////////

////////////////// l 164 how to programmatically create and fill arrays................

// array constructor function
// it create empty array
const x = new Array(7);
console.log(x);

// console.log(x.map(() => 5)); // still empty

x.fill(5);
console.log(x);

x.fill(23, 3, 6); // 5 is the value to be filled and 3 is the begain parameter, and 6 is the last parameter upto which we can fill it and it is not included
console.log(x);

//// array.from()
// we are not using form as an nethod on array
// but using it on array construtor
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// const dice = Array.from({ length: 100 }, (val, i) => {
//   return Math.trunc(Math.random(val * 6));
// });

// console.log(dice);

/////////    Query selector all return a node list , with something array which contains all the selected elements, but not a real array.

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent)
  );
  console.log(movementsUI);

  // console.log(movementsUI.map(el => Number(el.textContent)));

  // or
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  console.log(movementsUI2.map(el => Number(el.textContent)));
});

////////////////////////////////////////// l 165.....how to use array methods

// which method to use
