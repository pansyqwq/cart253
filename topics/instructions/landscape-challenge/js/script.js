/**
 * Title of Project landscape-challenge
 * Author Name Ziyan Pan
 * group member Weini Wang
 * 
 * HOW EMBARRASSING! Draw a landscape with a house 
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 480);
    //creating ur canvas
    background("#80d6f1");
    // setting background color 
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // draw everything stated in the functions
    land();
    cloud();
    moon();
    star();
}
function land(){
    push();
    fill("#007ca5");//giving the ellipse color
    noStroke();//no border line 
    ellipse(150,500,450,300);//ellipse(x, y, width, height), x, y is the position in the canvas
    pop();

    push();
    fill("#157291")//darker color 
    noStroke();
    ellipse(430,550,500,300);// the second ellipse 
    pop();

}

function cloud(){
    //a clound learned from lecture, from pippin. location and color changed 
    push();
    noStroke();
    fill("#c7c7c7");
    ellipse(400,100,100,100);
    ellipse(480,80,100,100);
    ellipse(460,120,60,60);
    ellipse(490,130,60,60);
    ellipse(520,120,60,60);
    pop();
}

function moon(){ 
    //adding a white circle as moon 
    push();
    noStroke();
    fill(255);
    ellipse(100,100,120,120);
    pop();
}

function star(){ //a diamond shape star 
    push();
    noStroke();
    fill("#c2f1ed")
    quad(230,122,246,80,230,38,214,80);
    pop();
}