'use strict';

// //////////////////////////l 203 .......constructon and new operator..........

// const Person = function (firstName, birthYear) {
//   // console.log(this);
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('jonas', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);

// //////////// l 219 Prototypes.................

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // jonas.calcAge(); // 46
// // matilda.calcAge(); // 20

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(jonas)); // true
// // console.log(Person.prototype.isPrototypeOf(Person)); // false

// // // settings properties on prototype

// Person.prototype.species = 'Homo Spaniens';
// // console.log(jonas, matilda);
// // console.log(jonas.species, matilda.species);
// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));

// //////////.......... 210    Prototypal inheritance  / Delegation works

// ////////////.......211 ..........Prototypal inheritance on Build-In objects.......

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__); // Object.prototype (top of the prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// //////////////// prototypes of arrays

// const arr = new Array([2, 3, 4, 5, 6, 6, 6, 6]);
// // const arr = [2, 3, 4, 5, 6]; // is same as, new Array ===[2,3,4,5,6]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };
// // console.log(arr.unique());

// ///////////////.........
// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// //////////////..........................

// // Coding Challenge #1
// // Your tasks:
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' property. The 'speed' property is the current speed of the car in
// // km/h
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // Test data:
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// // GOOD LUCK

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`speed of Car inc by 10 and  is ${this.speed} `);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`speed dec by 5 and is  ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

/////////////////////////////////////////////////////////
////////////////...................
////////////////.........l 213...... ES6 classes....behind the scene classes are still a type of functions only.

// // // class expression
// const PersonCl1 = class {};

// // // class decleration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //// methods will be added ot .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   // classea also have getters and setters
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // implemnting static methods
//   static hey() {
//     // console.log(this);
//     console.log('hey there staic in class');
//   }
// }
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();

// // jessica.age(); /// this will through an error
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
// jessica.greet();

// const walter = new PersonCl('Wallter White', 1965);

// PersonCl.hey();

// // /////////////////////////////////////////////////////
// // ////////////////////////////////..................... l 214.............setters and getters.............

// // const account = {
// //   owner: 'jonas',
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   }, // we use the get keyword for getter and declare the latest as a function

// //   // any setter method needs to have atleast one argument
// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest); // simply use this as a property , dont call it as a function here

// // account.latest = 50;
// // console.log(account.movements);

// /////////////////////////////////////////////////////
// ////////////////////////////////..................... l 215.............Static Methods.............

// // // Array.from method is used to convert array like structure to arrays,
// console.log(Array.from(document.querySelectorAll('h1'))); // here we convert node list to array

// // but
// // [1, 2, 3].from();// this is not a method, bcoz from method is is the Array constructor not in the prototype

// //eg
// Number.parseFloat(12); // here this method parseFloat is on the Number constructor not on the Number prototype , so this method is the parse float method

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // creating a static function
// Person.hey = function () {
//   // console.log(this); // entire constructor function , this keyword will be equal to the object calling the method.
//   console.log('Hey there');
// };
// Person.hey();
// // jonas.hey(); // thisis not a function bcoz hey is a static function not in a prototype of jonas object

// //////////////////////////////////////
// ///////////////////////////////////////
// //////////............ l 216 Object.create........
// console.log('......................Object.create ......................');

// // here we use the Object.create to essentially manually set the prototype of an object, to any other object that we want.

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   // this may look like constructor function but this has nothing to do with the constructor function.//
//   // // this is just the manual way of initializing the object
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // object.create creates a new object and the prototype of that object will be the object that we pass in .
// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ////////////////////////////////////////////
// //////////////////////////////////////////
// ////////////////////////////////////////////

// // Coding Challenge #2
// // Your tasks:
// // 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// // by 1.6)
// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// // converts it to km/h before storing the value, by multiplying the input by 1.6)
// // 4. Create a new car and experiment with the 'accelerate' and 'brake'
// // methods, and with the getter and setter.
// // Test data:
// // § Data car 1: 'Ford' going at 120 km/h
// // GOOD LUCK �

// console.log(
//   '//////////////////////////////////////////coding challnge 2................'
// );
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/hr`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// //////////////////////////////////////////
// ////////////////////////////////////

// // Coding Challenge #3
// // Your tasks:
// // 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// // "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// // current battery charge in % ('charge' property)
// // 2. Implement a 'chargeBattery' method which takes an argument
// // 'chargeTo' and sets the battery charge to 'chargeTo'
// // 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// // and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// // km/h, with a charge of 22%'
// // 4. Create an electric car object and experiment with calling 'accelerate',
// // 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// // you 'accelerate'! Hint: Review the definiton of polymorphism �
// // Test data:
// // § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// // GOOD LUCK �
// // The Complete JavaScript Course 29
// //////////////////////////////////////////
// ////////////////////////////////////

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/hr , with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake(); // ERROR
tesla.accelerate();

// //////////////////////////////////////////
// ////////////////////////////////////

// // Coding Challenge #4
// // Your tasks:
// // 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// // child class of the 'CarCl' class
// // 2. Make the 'charge' property private
// // 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// // methods of this class, and also update the 'brake' method in the 'CarCl'
// // class. Then experiment with chaining!
// // Test data:
// // § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// // GOOD LUCK

// //////////////////////////////////////////
// ////////////////////////////////////////////
// //////////////////////////////////////////
// ////////////////////////////////////////////
// //////////////////////////////////////////

///////......218....Inheritance betweeen 'classes': Constructor Functions...........

console.log('.........................intertance between classes.........');

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  // console.log(this);
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  Person.call(this, firstName, birthYear);

  this.course = course;
};

// we have to make Person.prototype , the prototype (__proto__ property) of student.prototype and to do this we have a manual method of Object.create()

Student.prototype = Object.create(Person.prototype); // we have to create this method before we add any new method to the student.prototype

// student.prototype is now an object that inherits form Person.prototype

// Object.create() will return a empty object of student.prototype , therefore it must be initialized before adding any other functon to student.prototype

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}  `);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); // 17

// console.log(mike.__proto__.__proto__.calcAge(2000));
console.log(mike instanceof Student);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // it should be student , but here itis showing Person

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

//////////////.............220 inheritance between classes ES6 classes/.............

console.log('................................220..........');
// // class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //// methods will be added ot .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // classea also have getters and setters
  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // implemnting static methods
  static hey() {
    // console.log(this);
    console.log('hey there staic in class');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super() is the constructor function of the parent class
    super(fullName, birthYear); // this always needs to happen first ,else we will not be able access the this keyword
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();

martha.calcAge();

///////////////////////////////////////
///////////////////////////////////////

//////////////.............221 inheritance between classes : Object.create.............

console.log('.................221.............');

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  Init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.Init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('jay', 2010, 'CS');
jay.introduce();
jay.calcAge();
