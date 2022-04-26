'use strict';

//Guess My Number
// console.log(document.querySelector('.message').textContent);
// // queryselector is a method that is present in the document.
// // for class we use dot and for id we use #.

// //DOM Manipulation
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number..')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').Value = 23));

//Handling click Events
// document.querySelector('.check').addEventListener('click', function () {
//   // A function is also a value and so we can use it as argument. Here we have not assigned any variable instead we have passed the function as an argument through the addEventListener method
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number..';
//   }
// });

// //Implementing Game Logic

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  // A function is also a value and so we can use it as argument. Here we have not assigned any variable instead we have passed the function as an argument through the addEventListener method
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number..';
    displayMessage('No Number');
    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number..';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    // Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Manupulating CSS styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '15rem';
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high..' : 'Too Low..';
      displayMessage(guess > secretNumber ? 'Too high..' : 'Too Low..');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;

  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low..';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
