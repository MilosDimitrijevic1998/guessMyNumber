'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20

// ---> 1. eventListener on CHECK button click
const checkButton = document.querySelector('.check');
checkButton.addEventListener('click' , function() {
  
  const guessInput = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const mainScore = document.querySelector('.score');
  
  //When there is no input
  if(!guessInput) {
    message.textContent = "⛔️ Unknown number!";
  // When player wins
  } else if (guessInput === secretNumber) {
        message.textContent = "🎉 Correct number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
  // When guess if too high
  } else if (guessInput > secretNumber) {
      if (score > 1) {
        score--;
        mainScore.textContent = score;
        message.textContent = "📈 Too high!";
      } else {
        message.textContent = "💥 Game over!"
        mainScore.textContent = 0;
      }
  // When guess it too low
  } else if (guessInput < secretNumber) {
      if (score > 1) {
        score--;
        mainScore.textContent = score;
        message.textContent = "📉 Too low!"; 
      } else {
        message.textContent = "💥 Game over!";
        mainScore.textContent = 0;
    }
  }
})
// ---> 1. End of function

// ---> 2. eventListener on AGAIN button
const again = document.querySelector('.again');
again.addEventListener('click', function(){

  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  

})
// ---> 2. End of function
