



// Variables

let score = 0;
let timeLeft = 60;
let gameStarted = false;

//HTML DOM
const button1 = document.getElementById('button1');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
// UI Function
button1.addEventListener('click', () => {
  increaseScore();
  if(!gameStarted) {
    startGame();
  }
})
// TODO: stat only when "Clicked Me is Clicked"
setInterval(countdown, 1000);


// Function
function increaseScore() {
  score++;
  scoreDisplay.innerText = score;
  //console.log(score);
}
function countdown() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;
}
// TODO: stop timer at the end

function startGame(){
  setInterval(countdown, 1000);
  gameStarted = true;
}
function endGame(){
  
}
