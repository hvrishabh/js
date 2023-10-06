'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //     numPassengers = numPassengers || 1;
  //     price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};

createBooking('LH123', 4, 4);
createBooking('LH123');
createBooking('LH123', 2);

//skipping arguments is not possbile
// but we can make it 'undefined';
createBooking('LH123', undefined, 1200);
