'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} Million People</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
            </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// https://countries-api-836d.onrender.com/countries/

// public APIs
//  https://github.com/public-apis/public-apis/blob/master/README.md

// https://restcountries.com/
// search for the endPoints
// https://restcountries.com/v3.1/all

// const getCountryData = function (country) {
//   // Old school

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   // resgister a callback on the requet object for the load event.

//   request.addEventListener('load', function () {
//     //   console.log(this);   // here is contains the complete request Object.
//     //   console.log(this.responseText);// this will return the JSON object and then we will convert it into array.

//     //   const data = JSON.parse(this.responseText);
//     //   console.log(data);

//     // // destructure it.
//     //   const data = JSON.parse(this.responseText)[0];
//     // // or
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} Million People</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies}</p>
//             </div>
//         </article>
//         `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('india');

/////////////////////////////////////////.........\
/////////////////..........249 how web works..Requests and Responses.......

// /////////////////////////////////////////.........\
// /////////////////..........250 .......... Callback hell......

// // chaining ajax call

// const renderCountry = function (data, className = '') {
//   const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flags.svg}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} Million People</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//             </div>
//         </article>
//         `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // Ajax call country 1

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country1
//     renderCountry(data);

//     //Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     // ajax call for neigbhouring country
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// // getCountryAndNeighbour('britain');

// /////////////////////////////////..... call back hell structure...........
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////////////
//////////////////.........251 Promises and Fetch API....

// ////.......252 .. consume Promise

// const getCountryData = function (country) {
//   // then() method is available on the promise, and in then() method we pass a callback method, that we want to be executed as soon as the promoise full filled.

//   // and its callback contains one argument once it is called by JS , and that argument is the resulting value of the full filled promise.

//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       // json is a method , that is available on all the respose object that is coming from the fetch function. i.e  on all of the resolved values. like "response"

//       // but this json is also a asynchronous function() htat is it will also return a promise.
//       // threefore we return the value here and we then choose an another then() function to retieve the data.
//       return response.json();
//       console.log();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

///////////////////////////////////////////////
////////.......255...........
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     // response.json();
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`); // new Error is a constructor function.
//     }
//     return response.json();
//   });
// };

///////////////////////////////////////////////
// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       // response.json();
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`); // new Error is a constructor function.
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))

//     .catch(err => {
//       console.log(`${err} 👀👀👀👀`);
//       renderError(`something went wrong ${err.message} TRY Again`);
//     })
//     .finally(() => {
//       // hiding the loading spinner....
//       countriesContainer.style.opacity = 1;
//     });
// };
/////////////////////////////////////
///////////////.........255........//////////////////////

// const getCountryData = function (country) {
//   // country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       //
//       if (!neighbour) {
//         throw new Error('No neighbour found.');
//       }
//       // country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))

//     .catch(err => {
//       console.log(`${err} 👀👀👀👀`);

//       renderError(`something went wrong ${err.message} TRY Again`);
//     })
//     .finally(() => {
//       // hiding the loading spinner....
//       countriesContainer.style.opacity = 1;
//     });
// };
// // getCountryData('australia');

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

/////////////////////................... 253 chaining promise.............

/////////////////////................... 254 handling rejected  promise.............
/////////////////////................... 255 Throughing errors manually  promise.............

//////////////////////////////////////
/////////////////////////////////////
///////////////////////////////////////
//////////////////////////............. Coding challenge 1........... l 256...........

// Asynchronous JavaScript
// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message
// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)
// The Complete JavaScript Course 31
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK �

///////////////////////////////////////////////
///////////////////////////////////////////
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
///////////////////////////////////////
/////////////////////////////////////////

// The Complete JavaScript Course 32
// Coding Challenge #2
// For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast
// GOOD LUCK �

////////////////////////////////////////
///////////////////////////////////////

// The Complete JavaScript Course 33

// Coding Challenge #3
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab
// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
// GOOD LUCK

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////.l 259 Building a Promise.............

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is Happening.');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN'); // calling the resolve() fun means it is fullfilled promise. and inside this we pass the fullfilled promise value that we are going to use in the .then() method.
//     } else {
//       reject('YOU LOST YOUR MONEY');
//     }
//   }, 2000);
// }); // it takes one arugment and that is executor function() , which takes 2 arugments(resolve , reject) as function , that are executed once we reiceve a fullfilled value or a rejected value..

// // consuming the promise we build above

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

///////////////////////////////////
//////////////////////////////////

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is Happening.');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN');
    } else {
      reject(new Error('YOU LOST YOUR MONEY'));
    }
  }, 2000);
});
// consuming the promise we build above

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//// we ususally build promises to wrap old callback function into promises... and this process is called promisifying

// i.e converting callback async based behaviour to promise based.

// promisfying a setTimeout() function into await() function.

const wait = function (seconds) {
  // create a function and return a promise.

  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

// consume Promise
// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 1 sec`));

console.log('........................................');
// setTimeout(() => {
//   console.log('1 sec passed');
//   setTimeout(() => {
//     console.log('2 sec passed');
//     setTimeout(() => {
//       console.log('3 sec passed');
//       setTimeout(() => {
//         console.log('4 sec passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(1)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`4 second passed`);
    return wait(1);
  });

//////////////////////////
///////////////////////

// ceate a instaneously fullfilled and rejected Promise....

// resolve() is static method on the Promise constructor ,
Promise.resolve('Resolved value Passed').then(x => console.log(x));

Promise.reject('Rejected value Catched').catch(x => console.log(x));
