/**
 * Mr. Furious Furious
 * Ziyan Pan
 * working with Weini Wang
 * variables challenge
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225,
    reduceG:1,
    reduceB:1
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);

  console.log(mrFurious.fill.g);
  // make the circle more and more red
  mrFurious.fill.g = mrFurious.fill.g - mrFurious.fill.reduceG;
  mrFurious.fill.b = mrFurious.fill.b - mrFurious.fill.reduceB;
  //set the range of the color
  mrFurious.fill.g = constrain(mrFurious.fill.g,0,255);
  mrFurious.fill.b = constrain(mrFurious.fill.b,0,255);
  

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}