/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let ellipseSize = 20;
let ellipseOffset = 4;
let backgroundColor = 0;

// {} is an object and it groups variables, use : for elements inside 
let eyeProperties = {
    eyeX:40,
    eyeY:50,
    eyeSize:30,
    eyeSpeed_x:1,
    eyeSpeed_y:2,
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    backgroundColor = constrain(mouseX,0,255);
    background(mouseX);
    eyeProperties.eyeX = eyeProperties.eyeX + eyeProperties.eyeSpeed_x;
    eyeProperties.eyeY = eyeProperties.eyeY + eyeProperties.eyeSpeed_y;
    eyeProperties.eyeX = constrain(eyeProperties.eyeX,0,300)
    eye();
    // backgroundColor = backgroundColor + 1;
    push();
    pop();
}

function eye(){
    console.log (eyeProperties.eyeX);
    push();
    fill(255,0,0);
    ellipse(eyeProperties.eyeX, 
        eyeProperties.eyeY,
        eyeProperties.eyeSize,
        eyeProperties.eyeSize);
    pop();
}