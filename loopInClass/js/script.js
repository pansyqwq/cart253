/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    // let y = height/2;
    let x = 0;
    let rectWidth = 50;
    // fill(255,0,0);

    // while(x < width){
    //     rect(x, y, rectWidth);
    //     x = x + rectWidth;
    // }

    // let x_2 = 10;
    // while (y < height){
    //     rect(x_2, y, rectWidth);
    // }
    // for(let i=20; i>=0; i--){// don't use i=0 anywhere else
    //     console.log(i);
    // }

    for(let y =0; y<height; y = y+ rectWidth){
        fill(255,0,0);
        rect(x, y, rectWidth);
    }

    let y = 50;
    for(let i=0; i<=10; i++){
        fill(255,0,0);
        rect(x, y*i, rectWidth);
        fill(0,0,0);
        text(i,x,y*i);
    }
}