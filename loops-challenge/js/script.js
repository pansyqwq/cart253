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
    let startColor = color("#0a06ffff");//0%
    let endColor = color("#00ffe1ff");//100%
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
        c = 0;
        line(0, y, width, y);
        b += 50;
        y += 50;
    }
}


