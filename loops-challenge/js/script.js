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

    let x = 0;
    let y = 0;
    let c = 0;
    let b = 0;
    let startColor = color("#ff0000");//0%
    let endColor = color("#0099ffff");//100%
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            let percent = i / 10;
            let c = lerpColor(startColor, endColor, percent);
            fill(c);
            rect(50 * i, 50*j, 50);
        }
    }
    while (x < width) {
        stroke(c);
        line(x, 0, x, height);
        c += 50;
        x += 50;
    }
    while (y < height) {
        stroke(b);
        line(0, y, width, y);
        b += 50;
        y += 50;
    }

   




    // const CELL_SIZE = 50;
    // const NUM_COLS = height / CELL_SIZE;// 500 is the width
    // const NUm_ROWS = width / CELL_SIZE;

    // rectMode(CORNER);
    // // for (let x=0; x<NUM_COLS; x++){
    // //     fill("#ff0000");
    // //     rect(CELL_SIZE*x,0,CELL_SIZE);
    // // }
    // for (let y = 0; y < NUm_ROWS; y++) {
    //     fill("#ff0000");
    //     // rect(0,CELL_SIZE*y,CELL_SIZE);
    //     for (x = 0; x < NUM_COLS; x++) {
    //         rect(CELL_SIZE * x, CELL_SIZE * y, CELL_SIZE);
    //     }
    // }

// for(let i=0; i<=250; i=i+25){
//     for(let j=0; j<=500; j=j+50){
//          stroke(i);
//          line(j, 0, j, height);
//     }
}


