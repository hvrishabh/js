'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// console.log(btnsOpenModal);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// // this for loop is done to loop over the classes and open the modal on the click
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////////////////////
/////////////////////////////////////////

////////////////............. l186 Selecting,creating and deleting elements

///////////...........Selecting..........
console.log(document.documentElement);

console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // it return the first element that matches this class
console.log(header);

// to select multiple elements use , querySelectorAll, it will although return a node list and we have to convet it into array
const allSections = document.querySelectorAll('.section');

console.log(allSections); //nodelist
console.log([...allSections]); //array

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log([...allButtons]);
console.log(allButtons); // it returns a HTML collection , which is different from the nodeList and Array, this is the live collection, while it is not the case for nodeList

console.log(document.getElementsByClassName('btn')); // this will also return the liveCollection not the nodeList

////////////////////////////////////////////////////////
/////////////////..........Creating and Inseting elements........

// .insetAdjacentHTML   , this method is used to bulid HTML elements

const message = document.createElement('div'); // it creates a DOM element and then stores the element, but its not on the webpage

message.classList.add('cookie-message');
message.textContent =
  'we use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for imporved funcionality and analytics. <button class = "btn btn--close-cookie">Got it! </button>';

header.append(message); // append() , adds the elements as the last child of the parent() element, header here(parent element)

// header.before(message);
// header.after(message);

//////////////////////////////////////..........
////////////..........delete the elements............
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    // or

    message.parentElement.removeChild(message);
  });

///////////////////////////////////////////////////////////////////
///////////////.............l 187.......... styles,attributes and classes...................

// these styles are set as inline properties.

/////////.............styles...............
message.style.backgroundColor = '#37383d'; // element.style.propertyName = "value"

message.style.width = '120%';

// we can use the style property to read the value but only for inline css property
console.log(message.style.height);
console.log(message.style.backgroundColor);

//but we can get it by using getComputedStyle()
console.log(getComputedStyle(message)); // it returns the object
console.log(getComputedStyle(message).height);

// message.style.height = getComputedStyle(message).height + 40 + 'px'; // directly this will not work as we are trying to add the numbers to the string

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

console.log(getComputedStyle(message).height);

//////............css custom properties............

// // document.documentElement == :root in css
// document.documentElement.style.setProperty('--color-primary', 'orange');

////////////////.............. attributes...........

const logo = document.querySelector('.nav__logo');
console.log(logo); // it gives the complete elements
console.log(logo.alt); // it gives alt , attribute property
console.log(logo.src); // here we get the whole link
console.log(logo.getAttribute('src')); //here we only get the link on dom
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
//
console.log(logo.designer); // undefined

// for non-standard properties we have to use other method , this method will return undefined
console.log(logo.getAttribute('designer'));

// setting property/attribute using setAttribute()
logo.setAttribute('compay', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

/////////////////..........data attributes.........
console.log(logo.dataset.versionNumber);

//////////............classes.........
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

// dont use this
// logo.className = 'jonas'; // this will overwrite all the classes and only one class can be written like this
