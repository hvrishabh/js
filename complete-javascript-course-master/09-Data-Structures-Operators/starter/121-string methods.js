'use strict';

/////////////////....... Working with strings.............

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log('B737'[1]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // it will give us the first index wehere 'r' will occur
console.log(airline.lastIndexOf('r')); // it will give us the last index wehere 'r' will occur

console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4)); // ti will cut the string and form a new sub string
// they will always return a new string.

console.log(airline.slice(4, 7)); // it will not extract the last index

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got a middle seat');
  } else {
    console.log('you get lucky');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas')); // whenever we call a method on a string JS converts that string into a string object behind the scenes , like in this one here

console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

////////////////////////////////////////////////////
/////////////////////////................String Method....l2.........
