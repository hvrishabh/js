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

//////////////////////////////////////////////////////////////////

///////////////////////    l 148 coding challenge 1.............

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far

const arr1Julia = [3, 5, 2, 12, 7];
const arr1kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const a1juliaCorrect = dogsJulia.slice();
  a1juliaCorrect.splice(0, 2);
  console.log(a1juliaCorrect);

  const dogArr = [...a1juliaCorrect, ...dogsKate];
  console.log(dogArr);

  dogArr.forEach(function (value, index) {
    const find = value >= 3 ? 'an adult' : ' still a puppy';
    console.log(
      `Dog number ${index + 1} is ${find}, and is ${value} years old`
    );
  });
};

checkDogs(arr1Julia, arr1kate);

///////////////////////////////////////// Coding challenge 2.......................
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// let humAge = [];
// const calcAverageHumanAge1 = function (dogArr) {
//   dogArr.forEach(function (dogAge, i, arr) {
//     if (dogAge < 2) {
//       return humAge.push(2 * dogAge);
//     } else {
//       return humAge.push(16 + dogAge * 4);
//     }
//   });
// };
// calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
// console.log(humAge);

// const calcAverageHumanAge2 = function (dogArr) {
//   let humAge1 = dogArr.map(function (dogAge) {
//     if (dogAge < 2) {
//       return 2 * dogAge;
//     } else {
//       return 16 + dogAge * 4;
//     }
//   });
//   console.log(humAge1);
// };
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter(age => age > 18);
  console.log(adults);

  const average =
    adults.reduce((acc, age) => (acc = acc + age), 0) / adults.length;

  return average;

  // const average = adults.reduce(
  //   (acc, age, i, arr) => (acc = acc + age / arr.length),
  //   0
  // );

  // return average;

  // console.log(average);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);

/////////////////////////////////////////////////////////////////////////////////////
//////////////////...........coding challenge 3 ......
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK

const calcAverageHumanAgeNew = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => (acc = acc + age / arr.length), 0);
  return humanAges;
};
const avg2 = calcAverageHumanAgeNew([5, 2, 4, 1, 15, 8, 3]);
console.log(avg2);

/////////////////////
////////////////////
// ////////////////////////
// ////........coding challenge 4......

// Coding Challenge #4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:
const dogs = [
  { weight: 22, currentFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, currentFood: 200, owners: ['Matilda'] },
  { weight: 13, currentFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, currentFood: 340, owners: ['Michael', 'pappu'] },
];
// GOOD LUCK �

console.log(dogs);

// 1.
let weight;

// dogs.forEach((dog, index) => {
//   const wei = dog.weight;
//   dog.recommendedFood = wei ** 0.75 * 28;

//   if (
//     dog.currentFood < dog.recommendedFood * 1.1 &&
//     dog.currentFood > dog.recommendedFood * 0.9
//   ) {
//     console.log('eating is ok');
//   } else if (dog.currentFood > dog.recommendedFood * 1.1) {
//     console.log('dog is overeating');
//   } else if (dog.currentFood < dog.recommendedFood * 0.9) {
//     console.log('dog is eating low');
//   }
// });

const overEat = [];
const lowEat = [];
const okEat = [];

const test = function (dog) {
  dogs.forEach((dog, index) => {
    const wei = dog.weight;
    dog.recommendedFood = wei ** 0.75 * 28;

    if (
      dog.currentFood < dog.recommendedFood * 1.1 &&
      dog.currentFood > dog.recommendedFood * 0.9
    ) {
      console.log('eating is ok');
      okEat.push(dog.owners);
    } else if (dog.currentFood > dog.recommendedFood * 1.1) {
      console.log('dog is overeating');
      overEat.push(dog.owners);
    } else if (dog.currentFood < dog.recommendedFood * 0.9) {
      console.log('dog is eating low');
      lowEat.push(dog.owners);
    }

    // if (dog.owners.includes('Sarah')) {
    //   if (
    //     dog.currentFood < dog.recommendedFood * 1.1 &&
    //     dog.currentFood > dog.recommendedFood * 0.9
    //   ) {
    //     console.log('eating is ok');
    //   } else if (dog.currentFood > dog.recommendedFood * 1.1) {
    //     console.log('dog is overeating');
    //   } else if (dog.currentFood < dog.recommendedFood * 0.9) {
    //     console.log('dog is eating low');
    //   }
    // }
  });

  //console.log(okEat);
  const okEatAll = okEat.flat();
  console.log(`${okEatAll.join(' and ')} dogs eat ok.`);

  // console.log(overEat);
  const overEatAll = overEat.flat();
  console.log(`${overEatAll.join(' and ')} dogs eat too much.`);

  // console.log(lowEat);
  const lowEatAll = lowEat.flat();
  console.log(`${lowEatAll.join(' and ')} dogs eat too little.`);
};
test(dogs);

// console.log(overEat);
// const overEatAll = overEat.flat();
// console.log(overEatAll);
// console.log(`${overEatAll.join(' and ')} dogs eat too much`);

// console.log(lowEat);
// console.log(lowEat.flat());

// console.log(test(dogs));
const rec = dogs.map(dog => dog.recommendedFood);
console.log(rec);
console.log(rec.slice().sort((a, b) => a - b));
