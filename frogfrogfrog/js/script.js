/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
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


// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

//Our Starting Scene 
//has instructions and start the game button
function GameStartUI() {
    //setting up background and instruction texts
    push();
    background("#67d39fff");
    textSize(20);
    textAlign(LEFT, CENTER); //align to the left
    text("Instructions:", width / 4, height / 6); // the text is displayed at x: width/4 and y: height/6
    text("* - Move the frog with your mouse", width / 4, height / 6 + 30);
    text("* - Click to launch the tongue", width / 4, height / 6 + 60);
    text("* - Catch flies", width / 4, height / 6 + 90);
    pop();

    //text of starting the game 
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Press to Start the Game", width / 2, height / 2);
    console.log("instruction scene");
    pop();

    //the frog, and the tongue will stick out when pressed
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
    if(frog.data.miss > 5){
        gameUI = "Over";
    }
}

function gameOverUI(){
    background("#ebb987ff");
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Game Over", width / 2, height / 2);
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

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
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
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
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        frog.data.catch += 1;
        console.log("catched:", frog.data.catch);
        // Bring back the tongue
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