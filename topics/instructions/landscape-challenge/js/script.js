/**
 * Title of Project landscape-challenge
 * Author Name Ziyan Pan
 * group member Weini Wang
 * 
 * HOW EMBARRASSING! Draw a landscape with a house 
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);
    //creating ur canvas
    background("#80d6f1");
    // setting background color 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // draw everything stated in the functions
    people();// first layer 
    land();
    cloud();
    moon();
    star();
    drawHouse();
}
function land() {
    push();
    fill("#007ca5");//giving the ellipse color
    noStroke();//no border line 
    ellipse(150, 500, 450, 300);//ellipse(x, y, width, height), x, y is the position in the canvas
    pop();

    push();
    fill("#157291");//darker color 
    noStroke();
    ellipse(435, 550, 580, 300);// the second ellipse 
    pop();

}

function cloud() {
    //a clound learned from lecture, from pippin. location and color changed 
    push();
    noStroke();
    fill("#c7c7c7");
    ellipse(400, 100, 100, 100);
    ellipse(480, 80, 100, 100);
    ellipse(460, 120, 60, 60);
    ellipse(490, 130, 60, 60);
    ellipse(520, 120, 60, 60);
    pop();
}

function moon() {
    //adding a white circle as moon 
    push();
    noStroke();
    fill(255);
    ellipse(100, 100, 120, 120);
    pop();
}

function star() { //a diamond shape star 
    push();
    noStroke();
    fill("#c2f1ed");
    quad(230, 122, 246, 80, 230, 38, 214, 80);
    pop();
}

function people() { //using a circle and a ellipse as the body and head of the character 
    push();
    noStroke();
    fill("#32327c")
    ellipse(100, 300, 20, 20);
    ellipse(100, 350, 20, 90);
    pop();
}

//the house part inspiration from the lecture 
function drawHouse() {
    drawBody();
    drawRoof();
    drawWindow();
    drawDoor();
}

//draw the body of the house by a rectangle
function drawBody() {
    // The main body of the house
    push();
    noStroke();
    fill("#3f3f87");
    rect(300, 240, 280, 180);
    pop();
}

//Draws the roof of our house (a triangle)
function drawRoof() {
    push();
    noStroke();
    fill("#32327c");
    triangle(280, 240, 440, 180, 600, 240);
    pop();
}

// Draws a window on our house
 
function drawWindow() {
    push();
    noStroke();
    fill("#8888bb");
    ellipse(500, 320, 80, 80);
    pop();
}

//added door on our project 
function drawDoor() {
    // The door
    push();
    noStroke();
    fill("#7676b1");
    rect(320, 300, 80, 120);
    pop();

    // The doorknob
    push();
    noStroke();
    fill("#32327c");
    ellipse(340, 360, 10, 10);
    pop();
}