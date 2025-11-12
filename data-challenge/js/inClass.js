"use district";
const CELL_SIZE = 125;
const NUM_COLS = 4;
const NUM_ROWS = 4;
let currentMaze = null;


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    for(let i =0; i< NUM_COLS; i++){
        for(let j = 0; j < NUM_ROWS; j++){
            fill("#FF0000");
            rectMode(CORNER);
            rect(i*CELL_SIZE,j*CELL_SIZE, CELL_SIZE, CELL_SIZE)
        }
    }
}