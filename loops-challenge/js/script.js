/**
 * Lines
 * Ziyan Pan, teamate: Weini Wang
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    //line(x1, y1, x2, y2)
    //stroke(value), gray scale, smaller the darker

    let x=0;
    let y=0;
    let c=0;
    let b=0;
    while(x<width){
        stroke(c);
        line(x,0,x,height);
        c+=50;
        x+=50;
    }
    while(y<height){
        stroke(b);
        line(0,y,width,y);
        b+=50;
        y+=50;
    }

    // for(let i=0; i<=250; i=i+25){
    //     for(let j=0; j<=500; j=j+50){
    //          stroke(i);
    //          line(j, 0, j, height);
    //     }
    // }


    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);
}