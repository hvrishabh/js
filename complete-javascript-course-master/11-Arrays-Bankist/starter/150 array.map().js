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

////////////////////////////////////////////////

/////////.............  L 150 Array.map()..........

// map method returns a new array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

// // // with arrow function , simplify this
const movementsUSD = movements.map(mov => mov * eurToUSD);

// callback function also gets as an argument the current array element
console.log(movements);
console.log(movementsUSD);

// // with for-of loop

// const movementsUSDforof = [];
// for (const mov of movements) {
//   movementsUSDforof.push(mov * eurToUSD);
// }
// console.log(movementsUSDforof);

////////////////////////////////......................

// map method also have access to (value,index and complete array)

const movementsDescription = movements.map(
  (mov, i, arr) =>
    // {
    //   if (mov > 0) {
    //     return `Movement ${i + 1} You desposited ${mov}`;
    //   } else {
    //     return `Movement ${i + 1} You withdraw ${Math.abs(mov)}`;
    //   }
    // }
    `Movement ${i + 1} : You ${mov > 0 ? ' deposited' : 'withdraw'} ${Math.abs(
      mov
    )}}`
);
console.log(movementsDescription);

// if we use consol.log(then it will not form an array and will return single items)

// but if we retrn then a new array is formed as all the elements are there in the new array.

// with foreach method everything was visible to the console, i.e it creates a side effect

const empArray = [];
const test = movements.forEach((mov, i, arr) => {
  if (mov > 0) {
    return empArray.push(`Movement ${i + 1} You desposited ${mov}`);
  } else {
    return empArray.push(`Movement ${i + 1} You withdraw ${Math.abs(mov)}`);
  }
});
// console.log(movementsDescription1);
console.log(test); // it returns undefined
console.log(empArray);
