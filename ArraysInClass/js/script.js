/**
 * Arrays
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let newArray = [5, 6, 7, 4, 0, 1, 5]; //use square brakets for arrays
//if I want to get access to an element of my array I write: ArrayName[x]
console.log(newArray[2]);

let colors = ["r", "g", "b", "x", "y", "z"];
let index = 0;

let emptyArray = [];
// console.log(emptyArray.length);
// // emptyArray [5] = "hello";
// emptyArray.push("sword");
// emptyArray.push("balloon");
// emptyArray.push("potion");//add an element to the array

// emptyArray.pop()//removes the laet element of the array
// console.log(emptyArray);

function createNewBall(){
    let balls = 
    {
    x: random(0,680),
    y: random(0,400),
    size: 10,
    color:{
        r: random(0,255),
        g: random(0,255),
        b: random(0,255)
    }
    };
    return balls;
}
let balloons =[];
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(680,400);
// //lets make array of objects!
// let balls = [
//     {
//     x: random(0,100),
//     y: random(0,100),
//     size: 0,
//     color:{
//         r: random(0,255),
//         g: random(0,255),
//         b: random(0,255)
//     }
//     },
//      {
//     x: random(0,100),
//     y: random(0,100),
//     size: 0,
//     color:{
//         r: random(0,255),
//         g: random(0,255),
//         b: random(0,255)
//     }
//     },
//      {
//     x: random(0,100),
//     y: random(0,100),
//     size: 0,
//     color:{
//         r: random(0,255),
//         g: random(0,255),
//         b: random(0,255)
//     }
//     },
// ];

let previousValue = colors [0];



console.log(colors[0]);
colors[0]="red"; // you can change the elemnt in array
console.log(colors[0]);
console.log(colors.length);
console.log(colors[colors.length - 1]);// colors.length is getting the length, we need to put length -1 to get the last number
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("white");
  for(let ball of balloons){
    console.log(balloons);
    fill(ball.color.r, ball.color.b, ball.color.g);// getting the random colors
    circle(ball.x, ball.y, ball.size);// getting random position and size
  }

// console.log(colors);//show the entire awway
// console.log(colors[2]);//show a specific element in the array

// console.log(colors[index]);
}

//in mousePressed, I want to dynamically add a new element in my arrawy 
//every time that I click, I want to assign a random number to the element. 
function mousePressed(){
// emptyArray.push(random(0,100));
// console.log(emptyArray);
// console.log("the last number of our array is: " + emptyArray[emptyArray.length-1]);

let newball = createNewBall();//create new ball
balloons.push(newball);// storing new ball in the array
console.log(balloons);// see our array
console.log("the last element's x value");
console.log(balloons[balloons.length -1].x);//the last element 
console.log(balloons[balloons.length -1].color.g);
}