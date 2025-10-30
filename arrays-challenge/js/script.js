/**
 * Bingo
 * Ziyan Pan, teamate: Weini Wang

 * zz
 */
/**
 * Boingo
 * Pippin Barr
 *
 * A ball that bounces around on the canvas
 */

let ball = undefined; // Will create it with createBall()
let balloons = [];// creating an empty array for balls

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    ball = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
            // x: mouseX-pmouseX,
            // y: mouseY-pmouseY,
            
        }
    };
    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (let ball of balloons) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }

}

function mousePressed(){
    let newBall = createBall();
    balloons.push(newBall);
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) { //Convert to functions with parameters
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}


