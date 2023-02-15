let timer = document.querySelector("#timer");
let primaryNumber = document.querySelector("#primary-number");
let secondaryNumber = document.querySelector("#secondary-number");
let grid = document.querySelector("#grid");
let output = document.querySelector("#output");
let score = document.querySelector("#score");

let intervalId;
let total = 0;
let playerScore = 0;

grid.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    if (parseInt(event.target.innerHTML) === total) {
   
      playerScore++;
      score.innerHTML = `Score: ${playerScore}`;
      clearInterval(intervalId);
      displayNumbers();
      startTimer();
    } else {
      clearInterval(intervalId);
      alert("                                           GAME OVER !     SCORE:" +playerScore);

      if (confirm("Do you want to restart the game?")) {
        playerScore = 0;
        score.innerHTML = `Score: ${playerScore}`;
        clearInterval(intervalId);
        displayNumbers();
        startTimer();
      }
    }
  }
});

function displayNumbers() {
  let firstNumber = parseInt(Math.floor(Math.random() * 9));
  let secondNumber = parseInt(Math.floor(Math.random() * (10 - firstNumber)));
  total = firstNumber + secondNumber;
  primaryNumber.innerHTML = firstNumber;
  secondaryNumber.innerHTML = secondNumber;
}

function startTimer() {
  let time = 30;
  let minutes = 0;
  let seconds = time;
  timer.innerHTML = `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  intervalId = setInterval(function() {
    time--;
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    timer.innerHTML = `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (time === 0) {
      clearInterval(intervalId);
      output.innerHTML = "Time's up!";
      alert("                                           GAME OVER !     SCORE:" +playerScore);
      if (confirm("Do you want to restart the game?")) {
        playerScore = 0;
        score.innerHTML = `Score: ${playerScore}`;
        clearInterval(intervalId);
        displayNumbers();
        startTimer();
      }
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  displayNumbers();
  startTimer();
});
