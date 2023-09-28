'use strict';

// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message');

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

///////////....................... L74 Event Listners............

document.querySelector('.again').addEventListener('click', function () {
  document.location.reload();
});
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

let score = Number(document.querySelector('.score').textContent);
score = 20;
let highScore = 0;
// console.log(typeof score);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      //   (document.querySelector('.message').textContent = 'No Number!')
      displayMessage('No number')
    );
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // WHen guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too HIGH Number!' : 'Too LOW Number';

      displayMessage(
        guess > secretNumber ? 'Too HIGH Number!' : 'Too LOW Number'
      );
      document.querySelector('.score').textContent = --score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game...!';
      displayMessage('You lost the game...!');
      document.querySelector('.score').textContent = --score;
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too HIGH Number!';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game...!';
  //       document.querySelector('.score').textContent = --score;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too LOW Number!';
  //       document.querySelector('.score').textContent = --score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game ....';
  //       //   document.querySelector('.score').textContent = --score;
  //     }
  //   }
});
