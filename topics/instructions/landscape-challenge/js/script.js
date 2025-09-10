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
    land();
}
function land(){
    ellipse(150,500,450,300);//ellipse(x, y, width, height), x, y is the position in the canvas
    fill("#007ca5");//giving the ellipse color
    noStroke();//no border line 

    ellipse(430,550,500,300);// the second ellipse 
    fill("#157291")//darker color 
    noStroke();

}