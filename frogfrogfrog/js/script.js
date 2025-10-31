/**
 * CatCatCat
 * Ziyan Pan
 * 
 * A game of catching cats with your arm
 * 
 * Instructions:
 * - Move the character with your mouse
 * - Click to launch the arm
 * - Catch Cats
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

//Our cat variables
let catFrames = [];
let frameIndex = 0;  
const cat = {
    x:100,
    y:200,
    size: 150
};


// Our frog/ character
const frog = {
    // The character's body has a position and size
    body: {
        x: 320,
        y: 520,
        hand: 50,
        size: 150,
        color: "#13769dff"
    },
    // The character's arm has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,// Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    data: {
        catch:0, // The number of catches
        tries:0, // The total attemps
        miss: 0 // The number of times the person has missed
    }

};

let gameUI = "start"; // the gameUI can be: start, game, over


// Our fly/ Cat
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 30,
    speed: 3
};

/**
 * Creates the canvas and initializes the cat
 */
function setup() {
    createCanvas(640, 480);
    // Give the cat its first random position
    resetFly();
}

//preload the images
function preload(){
    for (let i = 0; i < 4; i++) {
    catFrames[i] = loadImage(`assets/images/Walk${i}.png`);
    console.log("cat frame was added")
  }
}

function drawCat(x,y,w,h){
    imageMode(CENTER); // draw from the center instead of top-left
    image(catFrames[frameIndex], x, y, w, h);
    // console.log("there is an image",Image);
}

function catWalk(){
    if (frameCount % 15 === 0) {
    frameIndex = (frameIndex + 1) % catFrames.length;
  }
//   console.log("the cat is walking")
}

//Our Starting Scene 
//has instructions and start the game button
function GameStartUI() {
    //setting up background and instruction texts
    push();
    background("#67d39fff");
    drawCat(320,240,400,400);
    catWalk();// cat idel animation

    textSize(20);
    textAlign(LEFT, CENTER); //align to the left
    text("Instructions:", width / 4, height / 5); // the text is displayed at x: width/4 and y: height/5
    text("* - Move the character with your mouse", width / 4, height / 5 + 30);
    text("* - Click to launch the hand", width / 4, height / 5 + 60);
    text("* - Catch Cats", width / 4, height / 5 + 90);
    pop();

    //text of starting the game 
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Press to Start the Game", width / 2, height / 8);
    console.log("instruction scene");
    pop();

    //the characteris placed, and the arm will stick out when pressed
    moveTongue();
    drawFrog();

    //the UI will change to game UI when triggered
    if(frog.tongue.y <= height/2){
        gameUI = "game";
        frog.tongue.state = "idle"; // make the tongue stop moving 
        frog.tongue.y = height;// set the rongue height to the bottom
        console.log("game has started")
    }
}

//the actions of the game itself
function gameState() {
    background("#87ceeb");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    if(frog.data.miss > 2){ 
        gameUI = "Over";// the game is over if u missed 3 times
    }
}

//Our ending scene
function gameOverUI(){
    background("#ebb987ff");
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Game Over", width / 2, height / 2);
}

//switching the scenes
function draw() {
    if (gameUI === "start") {
        GameStartUI();
    } else if (gameUI === "game") {
        gameState();
    } else if (gameUI === "Over"){
        gameOverUI();
    }
}

/**
 * Moves the Cat according to its speed
 * load end page if it gets all the way to the right
 */
function moveFly() {
    // Move the cat(originally fly)
    fly.x += fly.speed;
    // Handle the cat going off the canvas
    if (fly.x > width) {
        // resetFly();
        gameUI = "Over"//game over when cat ran away
    }
}

/**
 * draw the cat and the heart of the cat
 */
function drawFly() {
    push();
    drawCat(fly.x, fly.y, 300, 300);
    catWalk();
    pop();
    push();
    // noStroke();
    // fill("#000000");
    // ellipse(fly.x, fly.y, fly.size);
    textAlign(CENTER, CENTER);
    textSize(fly.size);
    text("💖", fly.x, fly.y); 
    pop();
}

/**
 * Resets the cat to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(20, 300);
}

/**
 * Moves the character to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the arm based on its state
 */
function moveTongue() {
    // Tongue (arm) matches the character's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        //if we are in game mode, count the number of tries and misses
        if(gameUI === "game" && frog.tongue.y === 460){
        frog.data.tries += 1; // adding a number to tries when the tongue was triggered
        console.log ("number of tries", frog.data.tries);
        frog.data.miss = frog.data.tries - frog.data.catch; // calculating the number missed
        console.log ("number of miss", frog.data.miss);
        }

        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (arm) and the frog (character's body)
 */
function drawFrog() {
    

    // Draw the arm (originally the tongue)
    push();
    stroke(frog.body.color);
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the hand on top of the arm
    push();
    textAlign(CENTER, CENTER);
    textSize(frog.body.hand);
    text("🖐", frog.tongue.x, frog.tongue.y); 
   
    pop();

    // Draw the character's body
    push();
    fill(frog.body.color);
    // noStroke();
    textSize(100);
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    textAlign(CENTER, CENTER);
    text("🥺", frog.body.x, frog.body.y-100); 
    pop();
}

/**
 * Handles the arm overlapping the cat
 */
function checkTongueFlyOverlap() {
    // Get distance from hand to cat
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.hand / 2 + fly.size / 2);
    if (eaten) {
        // Reset the cat
        resetFly();
        frog.data.catch += 1;
        console.log("catched:", frog.data.catch);
        // Bring back the arm
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}