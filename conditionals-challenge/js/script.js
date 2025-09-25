/**
 * conditional challenge
 * Ziyan Pan, teamate: Weini Wang
 * 
 * figuring out distance and overlapping, exercise 
 */

"use strict";

/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

//info for puck circle
const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000",
  fills: {
    noOverlap: "#ff0000", // red for no overlap
    overlap: "#00ff00" // green for overlap
  }
};

//info for user circle
const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

//info for target circle
const target ={
  x: 70, 
  y: 70, 
  size: 100,
  fill: "#1d1995ff"
}

//create a canvas
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  drawTarget();

//   check if the user and puck circles overlap
  movePuck()
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}
//draw the target circle and make it have dashed outline
function drawTarget(){
  push();
  stroke(255);
  strokeWeight(2);
  fill(target.fill);
  setLineDash([10,10]);
  ellipse(target.x, target.y, target.size);
  pop();
}
//make the outline dashed
function setLineDash(list){
    drawingContext.setLineDash(list);
}

// display target circle
function movePuck(){
const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii, 
  const overlap = (d < user.size/2 + puck.size/2);
  // move to the opposite direction based on whether they overlap
    if (overlap && user.x > puck.x){
    puck.x -= 1;
  }
  else if(overlap && user.x < puck.x){
    puck.x += 1;
  }
  
    if (overlap && user.y > puck.y){
    puck.y -= 1;
  }
  else if(overlap && user.y < puck.y){
    puck.y += 1;
  }
}