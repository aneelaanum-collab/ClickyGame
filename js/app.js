



// Variables

let score = 0
const scoreDisplay = document.getElementById('scoreDisplay')
//let score;

//HTML DOM
const button1 = document.getElementById('button1');

// UI Function
button1.addEventListener('click', () => {
  increaseScore();
})
function increaseScore() {
  score++;
  scoreDisplay.innerText = score;
  //console.log(score);
}
