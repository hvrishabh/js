'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('usa');

/////////////////////................... 253 chaining promise.............
