/**
 * Self portrait
 * Ziyan Pan
 * 
 * an artwork that represents myself
 */

"use strict";

//data for the pistil
const pistil = {
  x1: undefined,
  y1: undefined,
  x2: undefined,
  y2: undefined,
  x3: undefined,
  y3: undefined,
  fills: {
    white: "#ecf3e9ff", // white for large triangle
    yellow: "#f9d300ff" // yellow for small triangle
  }
};

/**
 * CREATING MY CANVAS
*/
function setup() {
    createCanvas(800, 800);
    background("#80d6f1");
}


/**
 * all the functions that builds the portrait
*/
function draw() {
    drawPistil();
}

//creating the pistil, two parts a large white triangle and a small yellow triangle
function drawPistil(){
    //creating a big white triangle
    push();
    noStroke();
    fill(pistil.fills.white);
    pistil.x1 = 400;
    pistil.y1 = 400;
    pistil.x2 = pistil.x1 + 30;
    pistil.y2 = pistil.y1 + 30;
    pistil.x3 = pistil.x1 - 30;
    pistil.y3 = pistil.y2;
    triangle(pistil.x1, pistil.y1, pistil.x2, pistil.y2, pistil.x3, pistil.y3); 
    pop();

    //creating a small yellow triangle
    push();
    noStroke();
    fill(pistil.fills.yellow);
    pistil.x1 = 400;
    pistil.y1 = 420;
    pistil.x2 = pistil.x1 + 10;
    pistil.y2 = pistil.y1 + 10;
    pistil.x3 = pistil.x1 - 10;
    pistil.y3 = pistil.y2;
    triangle(pistil.x1, pistil.y1, pistil.x2, pistil.y2, pistil.x3, pistil.y3); 
    pop();
}