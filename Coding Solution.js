/////////////.................Challenge2

const calcTip = function (bill) {
  return bill >= 300 && bill >= 50 ? (bill * 15) / 100 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

//////////////................funcdamental 2 .............. coding  challenge 3..............solution........

const mark = {
  fullName: "Mark Miller's",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

const john = {
  fullName: "John Smith's",
  mass: 708,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

//////////////////////...........coding solution 4.....solution\

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];

  // tips.push(calcTip(bills[i]));
  // console.log(totals);
  // return totals.push(bills[i] + tips[i]);
}
console.log(totals);
