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

////////////...........L 192 ..... event delgation....for page navigation ................

// page navigation

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

//////////////............ l 194........Building a tabbed component...........

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard Clasue
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  // activating content area (as per the data-tab, attribute on button)

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////............ l 195.....Passing Arguments to Event Handlers...........
const nav = document.querySelector('.nav');

///////////////////......................
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    console.log(this);
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////
////////////////////........... L 196 .......Sticky navigation.............

// // scroll event is available on windows , not on document

// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//////////........l 197.....a better way: the intersection observer API

// // intersection of server API,
// // Well, this API allows our code to basically observe changes to the way that a certain target element intersects another element, or the way it intersects the viewport.

//////////////////////////////////
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// // So let's now start with the options here,
// // and so this object needs first a root property.
// // And this root is the element
// // that the target is intersecting.

// const obsOptions = {
//   root: null, // And we are looking for the viewport, remember, because we set the root to null.
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
//////////////////////////////////////////

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; // same as entries[0]
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// section 1 is the target   and the root element will be the element that we want our target element to intersect.

// So we could now here select an element
// or as an alternative, we can write null,
// and then we will be able to observe our target element
// intersecting the entire viewport, all right?.
// So basically, this entire rectangle here,
// which shows the current portion of the page, okay?
// And then second, we can define a threshold.
// Threshold, and this is basically the percentage
// of intersection at which
// the observer callback will be called,
// so this callback here.
/////////////////////...........

// So this callback function here will get called
// each time that the observed element,
// so our target element here, is intersecting
// the root element at the threshold that we defined,

// So in the current example, whenever the first section,
// so our target here, is intersecting the viewport at 10%,
// so the viewport, because that's the root,
// and 10% because that's the threshold.
// So whenever that happens, then this function here
// will get called and that's no matter if we are scrolling
// up or down, all right?

// And this function will get called with two arguments,
// and so we can specify them here,
// and that's the entries and the observer object itself.
// All right, so this object here basically
// will also get passed into the callback function, all right?
// Now this case, we're only interested in the entries,
// but sometimes using the observer is also useful.
// Now we can have actually multiple thresholds,
// so here we can have an array

// so these entries here
// are actually an array of the threshold entries, okay,
// and so in this case again, there's only one element there,
// but let's create a more general function already
// which basically loops over these entries
// so that we can take a look at all of them.
// And so let's just do that, so basically,
// simply log them to the console,
