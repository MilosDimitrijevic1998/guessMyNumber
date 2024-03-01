'use strict';
let secretNumber = document.querySelector('.number').textContent = Math.floor(Math.random() * 20) + 1;
let score = 20

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click' , function() {
  
  const guessInput = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  const mainScore = document.querySelector('.score');
  

  if(!guessInput) {
    message.textContent = "⛔️ Unknown number!";
  } else if (guessInput > secretNumber) {
      if (score > 1) {
        score--;
        mainScore.textContent = score;
        message.textContent = "📈 Too high!";
      } else {
        message.textContent = "💥 Game over!"
        mainScore.textContent = 0;
      }

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

