"use district";
const CELL_SIZE = 125;
const NUM_COLS = 4;
const NUM_ROWS = 4;
let currentMaze = null;
let jsonDATA;

function preload(){
    jsonDATA = loadJSON("assets/data/mazeClass.json");
    console.log(jsonDATA);
}
function setup() {
    createCanvas(500, 500);

    //get first maze
    currentMaze = jsonDATA.mazes[0]
    console.log(currentMaze);
}

function draw() {
    background(0);
    drawMaze();
}

function drawMaze() {
    for (let i = 0; i < NUM_COLS; i++) {
        for (let j = 0; j < NUM_ROWS; j++) {
            if(currentMaze[i][j] ===1){
            drawCell(i,j);// call i and j here
            }
        }
    }
}

function drawCell(x,y) {
    fill("#FF0000");
    rectMode(CORNER);
    rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
}