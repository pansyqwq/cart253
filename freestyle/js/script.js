/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * create the canvas
*/
let timer = {
    startTime:0,
    timePasses:0,
    timeInterval: 10000
}
let finishState = "none";
let gameState = "start";
let score = 0;
function setup() {
    createCanvas(500,500);
    background(0);
    setTimeout(startTheGame,5000);// start the game 5 sec after

}

//event handler for timer
function startTheGame(){
    gameState = "play";

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    console.log(millis()); //mili second, a variable none stop keeps going.时间线 可使用场景: start 5000, gameClock: millis()-5000. if 现在是7 秒， then gameClock = 2000
    if(gameState=="start"){
        startScreen();
    }
    else if(gameState =="play"){
        gameScreen();
    }
    else if(gameState =="end"){
        endScreen();
    }
}
//starting screen
function startScreen(){
    background("#7bb2ffff");
}
//A new screen when game started
function gameScreen(){
    console.log("game is starting");
    background("#a1b9daff");
    displayRect();
    displayScore();
    displayTimer();
    // console.log(timer.startTime);
    timer.timePasses = millis()-timer.startTime; // calculate time passed since game started (-5 second)
    console.log(timer.timePasses);
    if(timer.timePasses > timer.timeInterval){
        gameState = "end";
        if(score >=10){
            finishState = "win";
        } else{
            finishState = "lose";
        }
    }
}

function endScreen(){
    background("#998beaff");
}

//once the game started, calculate the score by mouse clicking
function mousePressed(){
    if(gameState === "play"){
        if(mouseX <width/3){
        score++;
        console.log(score);
        }else{
        score--;
        }
    }
}

//draw a rectangle on the left of the screen
function displayRect(){
    push();
    textSize(24);
    fill("#000000");
    rect(0,0,width/3,height);
    pop();
}

// display the score
function displayScore(){
    push();
    textSize(24);
    fill("#000000");
    text(score,width-150,50);
    pop();
}

function displayTimer(){
    push();
    textSize(24);
    fill("#000000");
    text(10-floor(timer.timePasses/1000),width-150,120);
    pop();
}