"use district";

let face ={
    x:0,
    y:0,
    size:20,
    color:"#5fd47eff"//default color

}

function setup(){
    createCanvas(500,500);
    face.x = width/2;
    face.y = height/2;
}

function draw(){
    background("#eaff00ff");
    push();
    fill(face.color);
    ellipse(face.x,face.y,face.size,face.size);
    pop();
}

function mousePressed(){
    // face.x= mouseX;
    // face.y= mouseY;
    let distance = dist(face.x,face.y,mouseX, mouseY);
    if(distance<face.size/2){
        face.color = "#000000"
    }
    
}