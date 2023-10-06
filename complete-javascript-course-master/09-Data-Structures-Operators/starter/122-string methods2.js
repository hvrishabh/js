'use strict';

/////////////////....... Working with strings.............

// String methods are case sensitive...........
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix captialization in name
const passenger = 'JOnAS'; // Jonas required

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email

const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // to remove the white spaces
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.'); // replace also create a new string , rather than iterating the old string.
console.log(priceUS);

const announcement =
  'All Passengers come to bording door 23, Boarding door 23!';
console.log(announcement);

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // replacing all with regular expression.

////... BOOLEAN RETURN

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // to check wheather it includes that string or not.

console.log(plane.startsWith('Airbus') && plane.endsWith('neo'));

// Practise exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`you are not allowed`);
  } else {
    console.log('You are Welcome.');
  }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for portection.');
