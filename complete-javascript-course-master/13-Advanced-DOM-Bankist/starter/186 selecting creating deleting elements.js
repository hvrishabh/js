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

//innerHTML and textContent both of these properties are used to set and read content

// above , we have created the element and below is the we inseting it into the DOM
// header.prepend(message); // i.e it is inserted into our DOM
// prepend() , add the elements as the first child of the parent(header here) element

header.append(message); // append() , adds the elements as the last child of the parent() element, header here(parent element)
// // BUT the element is only inseted once ,bcoz it is now the live dom element and can't be present at two place simulatneously
// // append here just moved the element from first position to the last position bcoz it was already inseted with the prepend()

// // therefore we can also move elements with The prepend() and append() if element already present.

// // what if we actually want to have multiple copy
// // then we clone the element and then append it

// header.append(message.cloneNode(true));

////////////////////////////
// // .before() and .after() are used to inset just before and after the Element i.e. they created the sibling to that element

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
