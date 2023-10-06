'use strict';

/////////////////....... Working with strings. part3............

// Split and Join
console.log('a+very+nice+string'.split('+')); // slice is used for small values, split is more used
console.log('Jonas Schmedtman'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//
const captializeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // console.log(n[0].toUpperCase() + n.slice(1));
    // // or
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
captializeName('Jessica ann smith davis');
captializeName('jonas schmedtmann');
captializeName('hitesh kumar verma');

// Padding a string........... adding a no of char , untill the string has desired length

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(50, '+'));

console.log('Jonas'.padStart(25, '-').padEnd(40, '.'));

// Example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4649791245));
console.log(maskCreditCard('13131546464979233232'));

// Repeat Method

const message2 = 'Bad weather... All Departures Dealyed...';
console.log(message2.repeat(5));

///
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈ '.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
///////////////////////////////////////////////////////////
//////////////////////////////////////////
// String methods are case sensitive...........

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix captialization in name
// const passenger = 'JOnAS'; // Jonas required

// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // comparing email

// const email = 'hello@jonas.io';
// const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // to remove the white spaces
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.'); // replace also create a new string , rather than iterating the old string.
// console.log(priceUS);

// const announcement =
//   'All Passengers come to bording door 23, Boarding door 23!';
// console.log(announcement);

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate')); // replacing all with regular expression.

// ////... BOOLEAN RETURN

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // to check wheather it includes that string or not.

// console.log(plane.startsWith('Airbus') && plane.endsWith('neo'));

// // Practise exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(`you are not allowed`);
//   } else {
//     console.log('You are Welcome.');
//   }
// };

// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for portection.');
