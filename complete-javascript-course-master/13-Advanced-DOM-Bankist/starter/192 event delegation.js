'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

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

//////////// smooth Scrolling............

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});
/////////////////////////////////////
////////////...........L 192 ..... event delgation....for page navigation ................

// page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     // smooth scrolling
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 2steps of event delegation // 1. we add the event listener to a common parent element //2.  and then in htat event listener determine , what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  // matching stategy
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');

    // smooth scrolling
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// here this is not the efficient solution for 1000 sites therefore we use the event delegation, in which we put the event handler to the parent element of all common elements and then when a user clicks on of hte link, the event is generated and it bubbles up , and then we can catch the event in this common parent element and handle it here

//// bcoz we know where the event is origionally originated , so we can figure that out by looking at the events.tarrget property

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// ////////////////............. l186 Selecting,creating and deleting elements

// ///////////...........Selecting..........
// console.log(document.documentElement);

// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); // it return the first element that matches this class
// console.log(header);

// // to select multiple elements use , querySelectorAll, it will although return a node list and we have to convet it into array
// const allSections = document.querySelectorAll('.section');

// console.log(allSections); //nodelist
// console.log([...allSections]); //array

// document.getElementById('#section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log([...allButtons]);
// console.log(allButtons); // it returns a HTML collection , which is different from the nodeList and Array, this is the live collection, while it is not the case for nodeList

// console.log(document.getElementsByClassName('btn')); // this will also return the liveCollection not the nodeList

// ////////////////////////////////////////////////////////
// /////////////////..........Creating and Inseting elements........

// // .insetAdjacentHTML   , this method is used to bulid HTML elements

// const message = document.createElement('div'); // it creates a DOM element and then stores the element, but its not on the webpage

// message.classList.add('cookie-message');
// message.textContent =
//   'we use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for imporved funcionality and analytics. <button class = "btn btn--close-cookie">Got it! </button>';

// header.append(message); // append() , adds the elements as the last child of the parent() element, header here(parent element)

// // header.before(message);
// // header.after(message);

// //////////////////////////////////////..........
// ////////////..........delete the elements............
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     // or

//     message.parentElement.removeChild(message);
//   });

///////////////////////////////////////////////////////////////////
// ///////////////.............l 187.......... styles,attributes and classes...................

// // these styles are set as inline properties.

// /////////.............styles...............
// message.style.backgroundColor = '#37383d'; // element.style.propertyName = "value"

// message.style.width = '120%';

// // we can use the style property to read the value but only for inline css property
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// //but we can get it by using getComputedStyle()
// console.log(getComputedStyle(message)); // it returns the object
// console.log(getComputedStyle(message).height);

// // message.style.height = getComputedStyle(message).height + 40 + 'px'; // directly this will not work as we are trying to add the numbers to the string

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// console.log(getComputedStyle(message).height);

// //////............css custom properties............

// // // document.documentElement == :root in css
// // document.documentElement.style.setProperty('--color-primary', 'orange');

// ////////////////.............. attributes...........

// const logo = document.querySelector('.nav__logo');
// console.log(logo); // it gives the complete elements
// console.log(logo.alt); // it gives alt , attribute property
// console.log(logo.src); // here we get the whole link
// console.log(logo.getAttribute('src')); //here we only get the link on dom
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';
// //
// console.log(logo.designer); // undefined

// // for non-standard properties we have to use other method , this method will return undefined
// console.log(logo.getAttribute('designer'));

// // setting property/attribute using setAttribute()
// logo.setAttribute('compay', 'Bankist');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// /////////////////..........data attributes.........
// console.log(logo.dataset.versionNumber);

// //////////............classes.........
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c', 'j');
// logo.classList.contains('c', 'j');

// // dont use this
// // logo.className = 'jonas'; // this will overwrite all the classes and only one class can be written like this

// //////////////////////////............. l 188......smooth Scrolling............

// const btnScrollTo = document.querySelector('.btn--scroll-to');

// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect()); // this gives us coordinate as per the view port size, not for current height-width.

//   console.log(`current scroll (x/y)`, window.pageXOffset, window.pageYOffset); // current scoll position // from the top and left

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   //Scrolling
//   // window.scrollTo(s1coords.left, s1coords.top); // now the position is relative to the viewport not to the top of the page.

//   console.log(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // ); // i.e the current position + the current scroll

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // }); // here we implemented a smoorth scroll with the help of object with , left,top,behavior property

//   // modern way
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//////////////////////////////////////////////
// //////////////////............... l189 .......... event handlers and types of event handlers...........

// // event is a signal , that is generated by a DOM node.

// // using addEventListener , we can apply multiple function to the same event, just by changing the functions
// // and we can also remove the eventHandler in case , we dont need it

// // but with onEvent property , the property over writes the previous
// const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: grt , you are reading the heading');
// // });

// // mdn event reference // search it on google

// // // another method of attaching an eventListener
// // by using the on event property

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: grt , you are reading the heading');
// // }; // old method of listening to events

// const alertH1 = function (e) {
//   alert('addEventListener: grt , you are reading the heading');

//   // and we can also remove the eventHandler in case , we dont need it, but we have to make a name function , like here as alertH1, rather than just passing an anonyomus function

//   // h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// // 3Rd way of handling events
// // uisng HTML attributes

// // // we should avoid using it
// // // we goto index.html and inside we write
// // <div onclick="alert('hello')"></div>

// /////////////////...............l190....191........EVENT propogation: .Bubling and Capturing

// // random color function

// //rgb(255,255,255)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// // attacing event to navlinks and navLink

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // this keyword in event handler , points to the element on which event handler is attached.
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget); // e.target ,  is where the click/event happened not where the eventListener is attached
//   //e.currentTarget, is where the eventListner is attached

//   console.log(this);
//   console.log(e.currentTarget === this); // they both are always going to be same in any event handler
//   console.log('.........................');

//   //stopping the event propogation
//   // e.stopPropagation(); // this means event never arrived at the other elements(parent elements)
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
//   console.log(this);
//   console.log(e.currentTarget === this);
//   console.log('.........................');
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//     console.log(this);
//     console.log(e.currentTarget === this);
//     console.log('.........................');
//   },
//   true
// );

// //here all the parents/three are handling the same evnet , and the event(e) , that they recieve is the exact same event. bcoz of event bubbling .

// // these three event handlers ,recieves events form target phase and bubbling phase
// //

// // bubbling phsae can be very important for the event delegation
// // by defining a third parameter in the addEventListener() , we can capture the event in the catpuring phase

// // if we set third parameter to true, it will now listen to the capturing phase rather than bubbling phase.
// // in practise it will look the same// but we can withness it in the console. now the first element that appears is the nav , not the link

// ///////////////////////////////////////
// ////////////////////////////////////////
