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

    // for(let y =0; y<height; y = y+ rectWidth){
    //     fill(255,0,0);
    //     rect(x, y, rectWidth);
    // }

    // let y = 50;
    // for(let i=0; i<=10; i++){
    //     // fill(255,0,0);
    //     fill(i*20);
    //     rect(x, y*i, rectWidth);
    //     fill(0,0,0);
    //     text(i,x,y*i);
    // }

    let startColor = color("#ff0000");//0%
    let endColor = color("#0099ffff");//100%
    for(let i = 0; i<10; i++){
        let percent = i/10;
        let c = lerpColor(startColor, endColor,percent);
           fill(c);
        rect (50*i,10,50);
    }
    
    for (let i=0; i<20; i++){
        for(let j=0; j<5; j++){
            console.log(i,j);
        }
    }

    // const CELL_SIZE = 20;
    // const NUM_COLS = 500/CELL_SIZE;// 500 is the width
    // const NUm_ROWS = 500/CELL_SIZE;

    // rectMode(CORNER);
    // // for (let x=0; x<NUM_COLS; x++){
    // //     fill("#ff0000");
    // //     rect(CELL_SIZE*x,0,CELL_SIZE);
    // // }
    //    for (let y=0; y<NUm_ROWS; y++){
    //     fill("#ff0000");
    //     // rect(0,CELL_SIZE*y,CELL_SIZE);
    //     for(x=0; x<NUM_COLS; x++){
    //         rect(CELL_SIZE*x,CELL_SIZE*y,CELL_SIZE);
    //     }
    // }
    // noLoop();
    // let shrooksArray = [30,70,50,60,45,23]

    // for(let i=shrooksArray.length-1; i>=0; i--){
    //     console.log(shrooksArray[i]);
    // }
}