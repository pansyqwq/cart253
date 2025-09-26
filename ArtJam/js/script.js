/**
 * Self portrait
 * Ziyan Pan(Pansy)
 * 
 * an artwork that represents myself
 * the flower is the meaning of my name, Pansy
 */

"use strict";

const petal = {
  x1: undefined,//will be mouseX
  y1: undefined,//will be mouseY
  fills: {
    white: "#ecf3e9ff", // white for large triangle
    yellow: "#f9d300ff", // yellow for small triangle
    dark: "#0f0142ff", // dark blue for inner petal
    light: "#5832ffff", // light purple for outter petal
    light2: "#3f2bddff",// a slightly different purple
    light3: "#4346f9ff"//a blue for a different petal
  }
}

/**
 * CREATING MY CANVAS
*/
function setup() {
    createCanvas(800, 800);
    background("#a5cbb5ff");
}

/**
 * all the functions that builds the portrait
*/
function draw() {
    moveUser();
    drawTopPetal();
    drawSidePetal();
    drawBottomPetal();
    drawPistil();
    console.log(drawPistil);
}
/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  petal.x1 = mouseX;
  petal.y1 = mouseY;
}
//creating the pistil, two parts a large white triangle and a small yellow triangle
function drawPistil(){
    //creating a big white triangle
    push();
    noStroke();
    fill(petal.fills.white);
    triangle(petal.x1, petal.y1, petal.x1+30, petal.y1+30, petal.x1-30, petal.y1+30); 
    pop();

    //creating a small yellow triangle
    push();
    noStroke();
    fill(petal.fills.yellow);
    triangle(petal.x1, petal.y1+20, petal.x1+10, petal.y1+10, petal.x1-10, petal.y1+10); 
    pop();
}

function drawBottomPetal(){

    //do a light arc (a partly missing circle)) as the curve of the outter petal
    push();
    noStroke();
    fill(petal.fills.light);
    arc(petal.x1-64, petal.y1+150, 170, 130, 100, 255, OPEN);
    pop();

    //do another light arc (a partly missing circle)) as the curve of the outter petal
    push();
    noStroke();
    fill(petal.fills.light);
    arc(petal.x1+64, petal.y1+150, 170, 130, 200, 180, OPEN);
    pop();

    //do a light triangle for the outter part of the petal
    push();
    noStroke();
    fill(petal.fills.light2);
    triangle(petal.x1, petal.y1, petal.x1+140, petal.y1+120, petal.x1-140, petal.y1+120); 
    pop();

    //do a dark blue triangle for the inner part of the petal
    push();
    noStroke();
    fill(petal.fills.dark);
    triangle(petal.x1, petal.y1, petal.x1+100, petal.y1+100, petal.x1-100, petal.y1+100); 
    pop();

    //do a dark blue arc (a partly missing circle)) as the curve of the petal
    push();
    fill(petal.fills.dark);
    arc(petal.x1-47, petal.y1+125, 120, 100, 100, 255, OPEN);
    pop();

    //do another blue arc as the curve of the petal
    push();
    fill(petal.fills.dark);
    arc(petal.x1+50, petal.y1+125, 120, 100, 200, 180, OPEN);
    pop();
}

function drawSidePetal(){
   //do a light art as the curve of the right petal
    push();
    // noStroke();
    fill(petal.fills.light);
    arc(petal.x1+90, petal.y1+25, 240, 180, -PI/5, 1.1*PI, OPEN);
    pop();

    //do a light art as the curve of the left petal
    push();
    // noStroke();
    fill(petal.fills.light);
    arc(petal.x1-70, petal.y1, 250, 240, 0, 1.1*PI, OPEN);
    pop();

  // do an dark blue ellipse for the inner part of the right petal
    push();
    fill(petal.fills.dark);
    ellipse(petal.x1+50, petal.y1+30, 140,70);
    pop();

  // do an dark blue ellipse for the inner part of the left petal
    push();
    fill(petal.fills.dark);
    ellipse(petal.x1-50, petal.y1+30, 140,70);
    pop();
}

function drawTopPetal(){
    //draw the top right petal
    push();
    fill(petal.fills.light3);
    ellipse(petal.x1+50, petal.y1-50, 200,150);
    pop();

    //draw the top left petal
    push();
    fill(petal.fills.light2);
    ellipse(petal.x1-40, petal.y1-40, 200,150);
    pop();
}

