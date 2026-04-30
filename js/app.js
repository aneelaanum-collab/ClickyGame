
// Variables

let score = 0;
let timeLeft = 2;
let gameStarted = false;
let gameEnded = false;
let interval = null
//HTML DOM
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const label1 = document.getElementById('label1');
const input1 = document.getElementById('name');

// UI Function & Events
button1.addEventListener('click', () => {
  if (!gameEnded) {
    increaseScore();
  }
  if(!gameStarted) {
    startGame();
  }
})
button2.addEventListener('click', () => {
  submitHighScore();
})
//setInterval(countdown, 1000);
input1.style.display = 'none';
label1.style.display = 'none';
button2.style.display = 'none';
// Function to increase score value
function increaseScore() {
  score++;
  scoreDisplay.innerText = score;
}
//Function to reduce time
function countdown() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;
  if(timeLeft <= 0) {
    endGame()
    timerDisplay.innerText = 0;
    endGame();
  }
}
//Function to handle game start
function startGame(){
  interval = setInterval(countdown, 1000);
  gameStarted = true;
}
// Function to handle game end

function endGame(){
  gameEnded = true;
  clearInterval(interval);
  button1.style.display = 'none';
  input1.style.display = 'block';
  label1.style.display = 'block';
  button2.style.display = 'block';
}
// Function to handle submit score
async function submitHighScore() {
  console.log(input1.value);
  const response = await fetch("https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/", {
    method: "POST",
    body: JSON.stringify({ name: input1.value, score: score }),
  });
  alert(score);
  console.log(response);
console.log("this is",input1.value);
}
// Function to fetch data
function getScoreBoardData() {
  const url = 'https://script.google.com/macros/s/AKfycbys5aEPMvNCutyhNYYCcQcCjzsi2UtqNspmKyCH-AicJxJbCJMrAoT0LUaYaXhTWA8n/exec';
  fetch(url)
    .then(response => {
      console.log('Response object:', response);
      return response.json();
    })
    .then(data => {
      console.log('Scoreboard data:', data);

      // Top 10 score in order
      const topScores = data
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      // show players data on page
      const scoreboardBody = document.getElementById('scoreboard');
      scoreboardBody.innerHTML = topScores.map((player, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${player.name}</td>
          <td>${player.score}</td>
        </tr>
      `).join('');
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
getScoreBoardData();
