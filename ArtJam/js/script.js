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

const petal = {
  x1: undefined,
  y1: undefined,
  x2: undefined,
  y2: undefined,
  x3: undefined,
  y3: undefined,
  fills: {
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
    drawTopPetal();
    drawSidePetal();
    drawBottomPetal();
    drawPistil();
    console.log(drawBottomPetal);
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

function drawBottomPetal(){

    //do a light arc (a partly missing circle)) as the curve of the outter petal
    push();
    noStroke();
    fill(petal.fills.light);
    arc(336, 550, 170, 130, 100, 255, OPEN);
    pop();

    //do another light arc (a partly missing circle)) as the curve of the outter petal
    push();
    noStroke();
    fill(petal.fills.light);
    arc(465, 550, 170, 130, 200, 180, OPEN);
    pop();

    //do a light triangle for the outter part of the petal
    push();
    noStroke();
    fill(petal.fills.light2);
    petal.x1 = 400;
    petal.y1 = 400;
    petal.x2 = petal.x1 + 140;
    petal.y2 = petal.y1 + 120;
    petal.x3 = petal.x1 - 140;
    petal.y3 = petal.y2;
    triangle(petal.x1, petal.y1, petal.x2, petal.y2, petal.x3, petal.y3); 
    pop();

    //do a dark blue triangle for the inner part of the petal
    push();
    noStroke();
    fill(petal.fills.dark);
    petal.x1 = 400;
    petal.y1 = 400;
    petal.x2 = petal.x1 + 100;
    petal.y2 = petal.y1 + 100;
    petal.x3 = petal.x1 - 100;
    petal.y3 = petal.y2;
    triangle(petal.x1, petal.y1, petal.x2, petal.y2, petal.x3, petal.y3); 
    pop();

    //do a dark blue arc (a partly missing circle)) as the curve of the petal
    push();
    fill(petal.fills.dark);
    arc(353, 525, 120, 100, 100, 255, OPEN);
    pop();

    //do another blue arc as the curve of the petal
    push();
    fill(petal.fills.dark);
    arc(450, 525, 120, 100, 200, 180, OPEN);
    pop();
}

function drawSidePetal(){
   //do a light art as the curve of the right petal
    push();
    // noStroke();
    fill(petal.fills.light);
    arc(490, 425, 240, 180, -PI/5, 1.1*PI, OPEN);
    pop();

    //do a light art as the curve of the left petal
    push();
    // noStroke();
    fill(petal.fills.light);
    arc(330, 400, 250, 240, 0, 1.1*PI, OPEN);
    pop();

  // do an dark blue ellipse for the inner part of the right petal
    push();
    fill(petal.fills.dark);
    ellipse(450, 430, 140,70);
    pop();

  // do an dark blue ellipse for the inner part of the left petal
    push();
    fill(petal.fills.dark);
    ellipse(350, 430, 140,70);
    pop();
}

function drawTopPetal(){
    //draw the top right petal
    push();
    fill(petal.fills.light3);
    ellipse(450, 350, 200,150);
    pop();

    //draw the top left petal
    push();
    fill(petal.fills.light2);
    ellipse(360, 350, 200,150);
    pop();

}

