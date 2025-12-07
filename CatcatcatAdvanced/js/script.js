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
let mouseActive = false;
let nextCatPending = false;
let caughtCatX = 0;   

//Our cat variables, for animations
let catFrames = [];
let gingerFrames = [];
let frameIndex = 0;

let faceEmoji = "🥺"; // default normal mode for emoji

let meowSound;// cat meow sound effect
let gameMusic;// background music of the game
let restart;// the image for restart button

let types = [1, 2];
let catType = 1; // the type of cat, the first cat will be 1, the second cat will be 2

let level = 0;


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
    arm: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 10,// Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    data: {
        catch: 0, // The number of catches
        tries: 0, // The total attemps
        miss: 0, // The number of times the person has missed
        mood: "normal" // can be: normal, happy, sad, the mood of the character

    }
};

let gameUI = "start"; // the gameUI can be: start, game, over


// Our fly/ Cat
// Has a position, size, and speed of horizontal movement
const cat = {
    x: 0,
    y: 200, // Will be random
    size: 30,
    speed: 6
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
function preload() {
    for (let i = 0; i < 4; i++) {
        catFrames[i] = loadImage(`assets/images/Walk${i}.png`);
        console.log("cat frame was added")
    }// all the frames of the cat

    for (let i = 0; i < 4; i++) {
        gingerFrames[i] = loadImage(`assets/images/ginger${i}.png`);
        console.log("cat2 frame was added")
    }// all the frames of the cat2

    meowSound = loadSound("assets/sounds/Meow1.mp3");
    gameMusic = loadSound("assets/music/game.mp3");
    restart = loadImage("assets/images/restartButton.png");
}

function drawCat(x, y, w, h) {
    imageMode(CENTER); // draw from the center instead of top-left
    image(catFrames[frameIndex], x, y, w, h);
    // console.log("there is an image",Image);
}

function drawCat2(x, y, w, h) {
    push();
    imageMode(CENTER); // draw from the center instead of top-left
    translate(x, y); // translate the 0,0 to the position of x and y
    scale(-1, 1); //scale applies to the entire image
    image(gingerFrames[frameIndex], 0, 0, w, h);
    console.log("there is an image", Image);
    pop();
}

function catWalk() {
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
    drawCat(320, 240, 400, 400);
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
    if (frog.arm.y <= height / 2) {
        gameUI = "game";
        frog.arm.state = "idle"; // make the tongue stop moving 
        frog.arm.y = height;// set the rongue height to the bottom
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

    //cat counting text
    push();
    textSize(25);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("number of cats caught: " + frog.data.catch, width - width / 4, 20);
    pop();

    music();
    // if(frog.data.miss > 2){ 
    //     gameUI = "Over";// the game is over if u missed 3 times
    // }
}

//Our ending scene
function gameOverUI() {
    changeMood();
    music();
    background("#ebb987ff");
    fill(0);

    //show the number of caught cats
    push();
    textSize(30);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("number of cats caught: " + frog.data.catch, width / 2, height / 3);
    pop();

    // the game over text
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Game Over", width / 2, height / 5);
    pop();

    // Draw the character's body
    push();
    fill(frog.body.color);
    ellipse(width - width / 4, frog.body.y - 20, frog.body.size + 30);//body

    //draw the text bobble
    push();
    noFill(); // makes inside of rect transparent
    stroke(0);// choose outline color (0 = black)
    strokeWeight(3);
    rect(30, height - 220, 340, 140, 20, 20, 0, 20); //长方形的右下角是90度，the right bottom cornor is 90 degrees
    pop();

    let s = "I wish I could get more cats";
    //draw the character's face 
    if (frog.data.catch <= 3) {
        s = "I’m so sad… I need more cats T_T";
        frog.data.mood = "sad";
    } else if (frog.data.catch > 10 && frog.data.catch < 50) {
        s = "So many cats… This must be heaven!";
        frog.data.mood = "happy";
    } else if (frog.data.catch >= 50) {
        s = "this is CAT PARADISE!!!";
        frog.data.mood = "bravo";
    } else {
        s = "Hmm… maybe just one more cat?";
        frog.data.mood = "normal";
    }

    //the text for the character to speak
    textSize(24);
    text(s, 50, height - 200, 300, 100);

    //draw the face emoji
    push();
    textSize(120);
    textAlign(CENTER, CENTER);
    text(faceEmoji, width - width / 4, frog.body.y - 130); //face
    pop();

    //the reset button
    push();
    fill("#f19238ff");
    noStroke();
    rect(20, 20, 50, 50, 10); //rect(x,y,w,h,arc)
    image(restart, 25, 25, 40, 40);// image of the restart button
    pop();


    //the continue to the next level button
    push();
    let label = "Go to the next level?";

    let rectW = 200
    let rectH = 40;

    let cx = width / 2;
    let cy = height / 2 - 25;

    fill("#f19238ff");
    noStroke();
    rectMode(CENTER);
    rect(cx, cy, 200, rectH, 10); //rect(x,y,w,h,arc)

    //text to the next level
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(label, cx, cy);
    console.log("the next scene text was activated");
    pop();
}

function newCat2() {
    push();
    background("#b1a6ebff");
    drawCat2(320, 240, 400, 400);
    catWalk(); // cat idle animation
    pop();

    // text of starting the game 
    push();
    textSize(48);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("NEW CAT ADDED!!!", width / 2, height / 8);
    pop();

    // the character is placed, and the arm sticks out when pressed
    moveTongue();
    moveFrog();
    drawFrog();
    music();

    // UI changes to level2 when arm reaches the middle
    if (frog.arm.y <= height / 2) {

        gameUI = "level2";
        frog.arm.state = "idle"; 
        frog.arm.y = height;

        
        resetFly(); // need to have reset fly!!!             

        console.log("level2 has started");
    }
}

function level2UI() {
    level = 1;
    push();
    background("#eba6cdff");
    pop();

    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();

    //cat counting text
    push();
    textSize(25);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("number of cats caught: " + frog.data.catch, width - width / 4, 20);
    pop();

    music();
}

function music() {
    //loop the music
    if (!gameMusic.isPlaying()) {
        gameMusic.setVolume(0.3);
        gameMusic.play();
    }
}

//switching the scenes
function draw() {
    if (gameUI === "start") {
        GameStartUI();
    } else if (gameUI === "game") {
        gameState();
    } else if (gameUI === "Over") {
        gameOverUI();
    } else if (gameUI === "cat2") {
        newCat2();
    } else if (gameUI === "level2") {
        level2UI();
    }
}

// function chooseCat(){
//     if (gameUI === "game"){
//         catType = 1;
//     } else if (gameUI === "level2"){
//         catType = int(random(types));
//     }
// }

/**
 * Moves the Cat according to its speed
 * load end page if it gets all the way to the right
 */
function moveFly() {
    if (nextCatPending === true) {
        // x freezes
        cat.x = caughtCatX;

        // the cat y moves with the arm
        cat.y = frog.arm.y;      // 或者 frog.arm.y - 40 之类的

        return; 
    }
    if (catType === 1) {
        // Move the cat(originally fly)
        cat.x += cat.speed;
        // Handle the cat going off the canvas
        if (cat.x > width) {
            // resetFly();
            gameUI = "Over"//game over when cat ran away
            // frog.data.catch += 50;//used for testing the bravo ending scene
        }
    } else if (catType === 2) {
        if (cat.x === 0) {
            cat.x = width;
        } else if (cat.x < 0) {
            // resetFly();
            gameUI = "Over"//game over when cat ran away
        }
        cat.x -= cat.speed;
    }

}

/**
 * draw the cat and the heart of the cat
 */
function drawFly() {
    if (catType === 1) {
        push();
        drawCat(cat.x, cat.y, 300, 300); // first cat animation
        catWalk();
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(cat.size);
        text("💖", cat.x, cat.y);
        pop();
    } else if (catType === 2) {
        push();
        drawCat2(cat.x, cat.y, 300, 300); // second cat animation
        catWalk();
        pop();

        push();
        textAlign(CENTER, CENTER);
        textSize(cat.size);
        text("💖", cat.x, cat.y);
        pop();
    }
}
function pickCatType() {
    if (gameUI === "level2") {
        // 50/50 random between 1 and 2
        if (random() < 0.5) {
            catType = 1;
        } else {
            catType = 2;
        }
        // or: catType = random([1, 2]);  // p5.js also allows this
    } else {
        // level 1: always use cat 1
        catType = 1;
    }
}

/**
 * Resets the cat to the left with a random y
 */
function resetFly() {
    pickCatType();
    if (catType === 1) {
        cat.x = 0;
    } else if (catType === 2) {
        cat.x = width;
    }

    let newY = random(40, 300);
    while (abs(newY - cat.y) < 50) { //abs takes the absolute value, the while loop will end when the condition was broken
        newY = random(40, 300); // pick a new value if newY is too close to the previous cat.y
    }
    cat.y = newY;
}

/**
 * Moves the character to the mouse position on x
 */
function moveFrog() {
    if (gameUI === "start" || gameUI === "cat2") {
        frog.body.x = width / 2;
    } else {
        frog.body.x = mouseX;
    }
}

/**
 * Handles moving the arm based on its state
 */
function moveTongue() {
    // Tongue (arm) matches the character's x
    frog.arm.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.arm.state === "idle") {
        frog.arm.y = height;
        // Do nothing
    }

    // If the tongue is outbound, it moves up
    else if (frog.arm.state === "outbound") {
        frog.arm.y += -frog.arm.speed;
        // The tongue bounces back if it hits the top
        if (frog.arm.y <= 0) {
            frog.arm.state = "inbound";
            frog.data.mood = "sad";
        }
    }

    // If the tongue is inbound, it moves down
    else if (frog.arm.state === "inbound") {
        frog.arm.y += frog.arm.speed;
        //if we are in game mode, count the number of tries and misses
        if (gameUI === "game" && frog.arm.y === 460) {
            frog.data.tries += 1; // adding a number to tries when the tongue was triggered
            console.log("number of tries", frog.data.tries);
            frog.data.miss = frog.data.tries - frog.data.catch; // calculating the number missed
            console.log("number of miss", frog.data.miss);
        }

        // The tongue stops if it hits the bottom
        if (frog.arm.y >= height) {
            frog.data.mood = "normal";// change the emoji back to idle mode when the arm hits the bottom
            frog.arm.state = "idle";
        }
    }
    if (nextCatPending &&
        frog.arm.state === "inbound" &&
        frog.arm.y >= height * 0.80) { // when the arm is at the bottom of the page

        resetFly();          // get the next cat
        nextCatPending = false; // 标记清掉
    }
}

function changeMood() {
    // change the character emoji with different mood
    if (frog.data.mood === "normal") {
        faceEmoji = "🥺";
    } else if (frog.data.mood === "sad") {
        faceEmoji = "😭";
    } else if (frog.data.mood === "happy") {
        faceEmoji = "🥰";
    } else if (frog.data.mood === "bravo") {
        faceEmoji = "🥳";
    }
}
/**
 * Displays the tongue (arm) and the frog (character's body)
 */
function drawFrog() {
    changeMood();
    // Draw the arm (originally the tongue)
    push();
    stroke(frog.body.color);
    strokeWeight(frog.arm.size);
    line(frog.arm.x, frog.arm.y, frog.body.x, frog.body.y);
    pop();

    // Draw the hand on top of the arm
    push();
    textAlign(CENTER, CENTER);
    textSize(frog.body.hand);
    text("🖐", frog.arm.x, frog.arm.y);
    pop();

    // Draw the character's body
    push();
    fill(frog.body.color);
    // noStroke();
    textSize(100);
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    textAlign(CENTER, CENTER);
    text(faceEmoji, frog.body.x, frog.body.y - 100);
    pop();
}

/**
 * Handles the arm overlapping the cat
 */
function checkTongueFlyOverlap() {
    // Get distance from hand to cat
    const d = dist(frog.arm.x, frog.arm.y, cat.x, cat.y);
    // Check if it's an overlap
    const eaten = (d < frog.body.hand / 2 + cat.size / 2);
    if (eaten && !nextCatPending) {
        // make the cat pending
        nextCatPending = true;
        caughtCatX = cat.x; 

        frog.data.catch += 1;
        frog.data.mood = "happy"; // change the emoji to 🥰
        console.log("catched:", frog.data.catch);
        // Bring back the arm
        frog.arm.state = "inbound";
        //let the cat meow
        meowSound.setVolume(0.3); // volume goes between 0.0 and 1.0
        meowSound.play();
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (mouseActive === false) {
        if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70 && gameUI === "Over") {
            if (level === 0) { ////make another variable in the script, to assign to the levels 
                gameUI = "game";   // restart the game
            } else if (level === 1){
                gameUI = "level2"; 
            }

            resetFly();        //reset cat position
            nextCatPending = false;

            frog.arm.state = "idle";

            frog.data.catch = 0;
            frog.data.tries = 0;
            frog.data.miss = 0;
            frog.data.mood = "normal";

            mouseActive = true;
            setTimeout(function () {
                mouseActive = false
            }, 200)

            return; // need to do this so when I click reset button, it doesn't also trigger the arm
        }
        else if (mouseX > 220 && mouseX < 420 && mouseY > 195 && mouseY < 235 && gameUI === "Over") {
            gameUI = "cat2";   // introducing cat2
            resetFly();        // reset cat position

            frog.arm.state = "idle";

            frog.data.catch = 0;
            frog.data.tries = 0;
            frog.data.miss = 0;
            frog.data.mood = "normal";

            mouseActive = true;
            setTimeout(function () {
                mouseActive = false
            }, 200) // u can only press the mouse again after 0.2 sec

            return;
        }

        if (frog.arm.state === "idle") {
            frog.arm.state = "outbound";// trigger the arm to go up
        }
    }
}



// need to randomize the cat on the second level, maybe need an array. 
// the random need to be 50: 50
// don't random every frame, maybe do it in reset 



