/**
 * Event challenge
 * Ziyan Pan teamates: Wenni Wang, Leah
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#87ceeb");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}

//lose the game
function lose(){
    gameOver = true;
}

//lose the game when key released
window.addEventListener("keyup",function(){
    lose();
    console.log("keyup");
})

// lose the game when mouse released
window.addEventListener("mouseup",function(){
    lose();
    console.log("mouseReleased");
})

// //lose the game when mouseWheel moves
// function mouseWheel() {
//     lose();
//     console.log(mouseWheel);
// }

//lose the game when mouseWheel moves
window.addEventListener("wheel",function(){
    lose();
    console.log("mouseWheel");
})

// //lose the game when mouse moved
// function mouseMoved(){
//     lose();
//     console.log(mouseMoved);
// }

//lose the game when mouse moved
window.addEventListener("mousemove",function(){
    lose();
    console.log("mouseMoved");
})

//lose the game when offline
window.addEventListener('offline',()=>{ //lambda function, define another function inside a function
    console.log("user is offline");
    lose();
})

// lose the game when visibility change
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    lose();
    console.log("user lost focus");
  } 
});