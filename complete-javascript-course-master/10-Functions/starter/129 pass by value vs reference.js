'use strict';

//////////////// arguments , value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 247234234234,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 247234234234) {
    alert('Checked In');
  } else {
    alert('Wrong passport !');
  }
};

checkIn(flight, jonas);

console.log(flight); // flight is a primitive type and therefore it is passed by value, and its value does not change on changing the function.
console.log(jonas); // jonas is an object datatype, its value is passed by reference and will change on any change.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// passing by value and passing by refernce

// js alwasys pass by value, there is no pass by refernce in js only pass by value, even thought it may look like pass by reference, with objects, but still it is pass by value only;

// in pass by reference it is still a vlaue, that contains memory address, basically we pass the refernce to the function, but we dont pass via reference.
