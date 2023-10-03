var firstName = 'matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // // const self = this; // self or that
    // const isMillenial = function () {
    //   //   console.log(this);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   //   console.log(self);
    //   //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    const isMillenial1 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial1();
  },
  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// jonas.greet(); // Here this keyword refers to window object , but window object does not have any firstName Propertry therefor it is undefined.
// console.log(this.firstName);

// Try neve using the arrow function as method to avoid probles=ms of this keyword

///////////////// WHhen there is function inside a method......
jonas.calcAge();

/////////////////////////// Arguments keyword.............//////

const addExpr = function (a, b) {
  console.log(arguments); // used when we want funciton to have more parameters than expected
  return a + b;
};

addExpr(2, 4);
addExpr(2, 4, 5, 12);

var addArrow = (a, b) => {
  console.log(arguments); // Error, not defined
  a + b;
};

addArrow(2, 3, 4);
// but the arrow function does not gets the "Argument Keyword"
