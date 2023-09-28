// l32.... Strict Mode in JS

"use strict";

////////////////////.....................L 39 Arrays

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years1 = Array(1991, 1984, 2007, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// console.log((friends[2] = "jay"));
// console.log(friends);

// friends = ["bob", "alice"];    // ERROR given

// const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years));  // Error NaN

// console.log(calcAge(years[0]));
// console.log(calcAge(years[3]));
// console.log(calcAge(years[years.length - 1]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[4])];

// console.log(ages);

// ////////////............L40 ...Basic Arrat Methods
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// console.log(friends.push("Jay"));
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // Remove Elements

// friends.pop();
// console.log(friends);

// console.log(friends.shift());
// console.log(friends);

// console.log(friends.indexOf("Michael"));

// console.log(friends.includes("Steven"));

/////////////.................Challenge2

// const calcTip = function (bill) {
//   return bill >= 300 && bill >= 50 ? (bill * 15) / 100 : bill * 0.2;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

//////////////////.......... L 42 434 objects ............

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["firstName"]);

// const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about Jonas? choose between firstName, lastName, age, job, friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("wrong request");
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas["friends"][0]} and ${jonas.friends[1]}`
// );

//////////////////////...............L44 Objects.  THIS KEYWORD  .........

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicence: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   ////////////////
//   // calcAge: function (birthYear_argument) {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },
//   ///////////
//   calcAge: function (birthYear_argument) {
//     // console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return (this.summary = `The summary of ${
//       this.firstName
//     } is - He is ${this.calcAge()} year old , working as a ${
//       this.job
//     }, has some friends ${this.friends} and He can also drive.`);
//   },
// };

// // console.log(jonas.calcAge());
// // console.log(jonas["calcAge"](1996));

// // console.log(jonas.calcAge());

// // console.log(jonas.calcAge());
// // console.log(jonas.age);
// // console.log("\n");
// console.log(jonas.getSummary());
// console.log(jonas.summary);

//////////////...........Challenge 3  .............
/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.BMImark = this.mass / this.height ** 2);
//   },
// };

// console.log(mark.calcBMI());
// console.log(mark.BMImark);

// const john = {
//   fullName: "John",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.BMIjohn = this.mass / this.height ** 2);
//   },
// };

// const markHigherBMI = mark.calcBMI() > john.calcBMI();
// console.log(markHigherBMI);
// if (markHigherBMI) {
//   console.log(
//     `${mark.fullName} BMI (${mark.BMImark}) is higher than ${john.fullName} (${john.BMIjohn}}`
//   );
// } else {
//   console.log(
//     `${john.fullName} BMI (${john.BMIjohn}) is higher than ${mark.fullName} (${mark.BMImark}}`
//   );
// }

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller's",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// const john = {
//   fullName: "John Smith's",
//   mass: 708,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }
