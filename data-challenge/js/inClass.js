"use district";
let CELL_SIZE = 125;
let NUM_COLS = 4;
let NUM_ROWS = 4;
let currentMaze = null;
let jsonDATA;
let currentMazeObject = null;
let counter = 0;

function preload() {
    jsonDATA = loadJSON("assets/data/mazeClass.json");
    console.log(jsonDATA);
}
function setup() {
    createCanvas(500, 500);
    mousePressed();

    console.log(currentMaze);
}

function draw() {
    background(0);
    drawMaze();
}

function drawMaze() {
    for (let i = 0; i < NUM_COLS; i++) {
        for (let j = 0; j < NUM_ROWS; j++) {
            if (currentMaze[i][j] === 1) {
                drawCell(i, j);// call i and j here
            }
        }
    }
}

function drawCell(x, y) {
    fill(`#${currentMazeObject.color}`);
    rectMode(CORNER);
    rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
}

function mousePressed() {
    counter++;
    // if (counter > 2) { counter = 0 }
    //get first maze
    currentMazeObject = jsonDATA.mazes[counter%3]// number in here changes the set of data in maze json, % 3 take the remainder of 3
    currentMaze = currentMazeObject.maze;
    reSet();
}

function reSet() {
    NUM_COLS = currentMaze.length;
    NUM_ROWS = currentMaze.length;
    CELL_SIZE = width / currentMaze.length;
}