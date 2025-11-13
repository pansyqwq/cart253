/**
 * data challenge
 * Ziyan Pan & Weini Wang
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";
let jsonCars;
let jsonDinosaur;
let counter = 0;

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
function preload() {
 jsonCars= loadJSON("assets/data/car.json");
 jsonDinosaur= loadJSON("assets/data/dinosaurs.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

carData = floor(random(0, jsonCars.cars.length)); //get the name of the car inside array in car.json
dinosaurData = floor(random(0, jsonDinosaur.dinosaurs.length)); // get the name of the dinosaur inside array

carName= jsonCars.cars[carData] + jsonDinosaur.dinosaurs[dinosaurData]; // combine the two names
console.log(carData);
}