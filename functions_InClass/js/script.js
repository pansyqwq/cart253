/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let rectX=20;
let rectY=40;
let rectSize = 50;

let rectTwo_x  = 100;
let rectTwo_y  = 100;
let rectTwo_size = 25;

let sun = {
    x:400,
    y:50,
    size:100,
    color:"#d5df87ff"
}
let sun_2 = {
    x:20,
    y:50,
    size:100,
    color:"#9dd242ff"
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
 createCanvas(500,500);
}

function moveRect(temp_x){
    console.log(temp_x);
    temp_x+=1;//update the value
    console.log(temp_x);
    return temp_x;// give back the updated value
}
function moveSunObj(tempSun){
    tempSun.x+=1;
}
function displaySunObj(tempObj){
    push();
    fill(tempObj.color);
    ellipse(tempObj.x,tempObj.y,tempObj.size,tempObj.size);
    pop();
}

function displaySun(temp_x,temp_y,temp_size,temp_color){
    push();
    fill(temp_color);
    ellipse(temp_x,temp_y,temp_size,temp_size);
    pop();
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("pink");
    // fancyRect();
    // fancyRect_Two();
    // moveRect(rectX); //tuen this into the next line
    rectX = moveRect(rectX);
    rectTwo_x = moveRect(rectTwo_x);

    moveSunObj(sun_2)
    displaySun(sun.x,sun.y,sun.size,sun.color);
    displaySunObj(sun_2);

    fancyRect_Rev(rectX,rectY,rectSize);
    fancyRect_Rev(rectX,300,50);
    fancyRect_Rev(rectX,400,100);
}

function fancyRect_Rev(temp_x,temp_y,temp_size){
    push()
    fill("#df87b6ff");
    rect(temp_x,temp_y,temp_size,temp_size);
    pop();
}
function fancyRect(){
    push()
    fill("#df87b6ff");
    rect(rectX,rectY,rectSize,rectSize);
    pop();
    console.log("rect 1");
}

function fancyRect_Two(){
    push()
    fill("#df87b6ff");
    rect(rectTwo_x,rectTwo_y,rectTwo_size,rectTwo_size);
    pop();
    console.log("rect 2");
}