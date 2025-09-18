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
  // Colour for mrFurious
  fill: {
    r: 255,
    g: 225,
    b: 225,
    reduceG:1,
    reduceB:1
  }
  
};

// color data for the background
let sky = {
  r:160,
  g:180,
  b:200,
  reduceR:0.5,
  reduceG:0.5,
  reduceB:0.5
}

//the properties for bird 
let birdP = {
  x: 0,
  y: 40,
  size: 30,
  // Colour for bird
  fill: {
    r: 150,
    g: 200,
    b: 200,
  }
}


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

  //turning background gradually to black 
  sky.r = sky.r - sky.reduceR;
  sky.g = sky.g - sky.reduceG;
  sky.b = sky.b - sky.reduceB;
  // restricting numbers in the range
  sky.r = constrain(sky.r,0,255);
  sky.g = constrain(sky.g,0,255);
  sky.b = constrain(sky.b,0,255);
  background(sky.r, sky.g, sky.b);
  

  console.log(mrFurious.fill.g);
  // make the circle more and more red
  mrFurious.fill.g -= mrFurious.fill.reduceG;
  mrFurious.fill.b -= mrFurious.fill.reduceB;
  //set the range of the color
  mrFurious.fill.g = constrain(mrFurious.fill.g,0,255);
  mrFurious.fill.b = constrain(mrFurious.fill.b,0,255);
  
  //making mrFurious shake 
  mrFurious.x += random(-5,5);
 

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  bird();
  }

  //create a circle as a bird
  function bird(){
    //move the bird to the right
    birdP.x += 1
    //make the bird move randomly up and down in a range 
    birdP.y += random(-5,5);
    birdP.y = constrain(birdP.y,40,100)
    fill(birdP.fill.r,birdP.fill.g,birdP.fill.b);
    ellipse(birdP.x,birdP.y,birdP.size);
  }
