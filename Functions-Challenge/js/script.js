/**
 * functions challenge
 * Pansy,Leah,Norah
 * 
 * challenging myself with challenge functions
 */

"use strict";
/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 2
    }
};

const ball2 = {
    x: 500,
    y: 30,
    width: 15,
    height: 15,
    velocity: {
        x: 0,
        y: 5
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);
      moveBall(ball2);

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);
    
    drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);

    console.log(checkOverlap(ball,paddle)); 
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
 paddle.x = mouseX;
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
 ball.x += ball.velocity.x;
 ball.y += ball.velocity.y;
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, paddle) {
    console.log("ball bounces")
    if(checkOverlap(ball,paddle) === true){
        ball.velocity.y= -ball.velocity.y;
    }else if ( ball.y > 300 || ball.y < 0){
        ball.velocity.y= -ball.velocity.y;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if rectA and rectB overlap, and false otherwise
 * Assumes rectA and rectB have properties x, y, width and height to describe
 * their rectangles, and that rectA and rectB are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(ball, paddle) {
  return (ball.x + ball.width/2 > paddle.x - paddle.width/2 &&
          ball.x - ball.width/2 < paddle.x + paddle.width/2 &&
          ball.y + ball.height/2 > paddle.y - paddle.height/2 &&
          ball.y - ball.height/2 < paddle.y + paddle.height/2);
}