'use strict';
/////////////////...........
// // closuers

// clousers is not something we do explictly , it happens automatically

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// a closuer makes a function remember all the variables that existed , at the function birth place.

// a function has access to the variable environment (VE) of the execution context in which it was created .

// // closure: VE attached to the function , exactly as it was at the time and place the function was called.
