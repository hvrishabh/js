'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, '0');
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class=""movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

/////////////////// ...... Fake always login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//////////////////////////////////////////
////////////////////////////

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    // labelDate.textContent = now;
    // day-month-year
    const day = `${now.getDate()}`.padStart(2, '0');
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, '0');
    const min = `${now.getMinutes()}`.padStart(2, '0');
    labelDate.textContent = `${day}/${month}/${year} , ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
// ///////////.............L170....................
// console.log(23 === 23.0);

// // base 10 is 0 to 9
// // binary base2 is 0 and 1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); //false

// console.log(Number('23'));
// // or
// console.log(+'23'); //type cooresion

// // Parsing
// // it also supports passing the redix(base of number system)
// console.log(Number.parseInt('30px', 10));
// // to make this work , string must start with number
// console.log(Number.parseInt('e23', 10));

// // parseFloat
// // use whenever we want to read number from a string
// console.log(Number.parseFloat('2.5rem '));
// console.log(Number.parseFloat('  2.5rem '));

// // isNaN
// console.log('....................NAN........');
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('123'));
// console.log(Number.isNaN(+'20X'));
// console.log(Number.isNaN(23 / 0));
// console.log('....................NAN........');
// // Checking if value is number
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23x'));
// console.log('....................NAN........');
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));
// console.log('....................NAN........');

// /////////////////////////////////////////////////////////////////////////

// /////////////////...........L 171 math and Rounding

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(23));
// console.log(Math.sqrt(25 ** (1 / 2)));
// // to find the cubic root
// console.log(64 ** (1 / 3));
// console.log('....................171........');

// console.log(Math.max(3, 12, 3, 4324, 23));
// console.log(Math.max(3, 12, 3, '23', 22));
// console.log(Math.max(3, 12, 3, '12b', 23));
// console.log(Math.max(3, 12, 3, Number.parseFloat('23x'), 22));
// console.log('....................NAN........');

// console.log(Math.min(3, 12, 234));
// console.log(Math.min(3, '12b', 234));
// console.log(Math.min(3, '12', 234));
// console.log('....................NAN........');

// // area of circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.random());
// console.log(Math.random() * 6);
// console.log(Math.trunc(Math.random() * 6));
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log('....................NAN........');

// // random number
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));
// console.log('....................NAN........');

// // Rounding integers
// // .trunc() removes any decimal parts
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.7));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.9));
// console.log(Math.floor(23.9));
// console.log(Math.floor('23.9')); // they do the type corresion

// // trunc and floor works similar on positive numbers but not for negative numbers

// console.log(Math.floor(-23.3));
// console.log(Math.trunc(-23.3));
// console.log('....................NAN........');

// // rounding decimals
// console.log((2.3).toFixed(0)); // toFixed()_ always return a string
// console.log((2.3).toFixed(4));
// console.log((2.32333).toFixed(4));
// // to convert to a number
// console.log(+(2.32333).toFixed(4));
// console.log('....................NAN........');

// //////////////////...............L 172 reminder operator...........

// console.log(5 / 2);
// console.log(5 % 2); // 5 = 5*2+1

// console.log(8 / 3);
// console.log(8 % 3);

// // even no.. if reminder is 0 , when divided by 2
// console.log(6 % 2);
// console.log(7 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(2));
// console.log(isEven(-2));
// console.log(isEven(397));

// const isOdd = n => n % 2 !== 0;
// console.log(isOdd(2));
// console.log(isOdd(-2));
// console.log(isOdd(397));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'yellow';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// // if we need to do anything for every N time, then we can use % reminder operator

// /////////................l 173.... Numberic seperator ..............

// // numeric seperator must only be used only writting numbers in the code not when it is being called in APIs or in strings
// // 287,460,000,000
// // numeric seperators are just underscores just like the comma's
// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee1 = 12_00;
// const transferFee2 = 1_500;

// const PI = 3.14_15;
// // const PI = 3.14__15; // error

// // const PI = 3._1415; // error // we can not place underscore at the start or at the end of a number
// console.log(PI);

// console.log(Number('23000'));
// console.log(Number('23_000')); // not a number

// ////////......... l 174.......working with BigInt

// // numbers are respesented as 64 bit
// // biggest number that js can represent
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 55 + 1);
// console.log(typeof (2 ** 55 + 1));

// console.log(2344324234234234234234324324);
// console.log(2344324234234234234234324324n); // if we place n after the number then it is converted into BIGINT
// console.log(typeof 2344324234234234234234324324n);
// console.log(BigInt(2344324234234234234234324324)); // this also give wrong outputs so constructor BigInt must be used wuth small numbers, rather use the n variable

// console.log(BigInt(23432432));

// // operators
// console.log(12223n + 100000n);
// console.log(12223233333333333333333333333n * 100000n);

// // but we cant operator simple numbers with BigInt
// const num = 23;
// const huge = 233232303030030330n;

// // console.log(huge + num); // Error
// console.log(huge + BigInt(num));

// // exception with logical operator
// console.log(20n > 12);
// console.log(20n == 20); // true
// console.log(20n === 20); // false

// // exception with string concationation

// console.log(huge + 'is Realy big'); // type corresion is done by js

// // we can not use the Math.operators() on BigInt

// // Divisions
// console.log(10n / 3n); // it returns the round off values
// console.log(11n / 3n);

// ///////////////...............l 175 ..createing dates.......

// // create a date
// // 1. using constructor
// const now1 = new Date();
// console.log(now1);

// //2. parsing a string
// console.log(new Date('Aug 02 2020 12:02:32'));
// console.log(new Date('December 23,2303'));

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 18, 12, 23, 5));
// //js auto corrrect
// console.log(new Date(2037, 10, 32)); // it converts 32 to 2 dec

// // unix time stamp
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth()); // moths are 0 based in js

// console.log(future.getDate());
// console.log(future.getDay()); // 0 is sunday

// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());
// console.log(future.getTime()); // to get the timestamp
// //i.e is the milliseconds that have passed since jan1970

// console.log(new Date(2142237180000));

// // time stamp for right now
// console.log(Date.now());

// //
// // Set versions of all the above methods

// future.setFullYear(2040);
// console.log(future);

// future.setMonth(11);
// console.log(future);

// /////////////...........l 176........adding date to application........

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//////////////........... l 177 ........ operations with dates.................
