"use district";

let face ={
    x:0,
    y:0,
    size:20,
    color:"#5fd47eff",//default color
    isGreen:true
}

let face2 ={
    x:0,
    y:0,
    size:20,
    color:"#5fd47eff",//default color
    
}

let face3 ={
    x:0,
    y:0,
    size:20,
    color:"#5fd47eff",//default color
    rectBoolean:false
}

function setup(){
    createCanvas(500,500);
    face.x = width/2;
    face.y = height/2;
    face2.x = width/1.5;
    face2.y = width/1.5;

    setTimeout(timeEvent,5000);
}
function timeEvent(){//timeEvent function is not p5, don't put it in draw!
    console.log("timer was triggered")
    face3.rectBoolean = true;
}

function draw(){
    background("#eaff00ff");
    push();
    fill(face.color);
    ellipse(face.x,face.y,face.size,face.size);
    pop();

    push();
    fill(face2.color);
    ellipse(face2.x,face2.y,face2.size,face2.size);
    pop();

    if(face3.rectBoolean ===true){
        push();
        fill(face3.color);
        rect(face3.x,face3.y,face3.size,face3.size);
        pop();
    }
}

function mousePressed(){
    // face.x= mouseX;
    // face.y= mouseY;
    let distance = dist(face.x,face.y,mouseX, mouseY);
    if(distance<face.size/2){
        if(face.isGreen === true){
            face.color = "#749bdfff";
            // face.isGreen = false;
        }
        else{
             face.color = "#5fd47eff";
            //  face.isGreen = true;
        }
        face.isGreen = !face.isGreen;
    }
 }

 function keyPressed(event){
    console.log(event);
    console.log(event.key);
    if(event.key === "q"){
        face2.x +=2
    }else if(event.key === "f"){
        face2.x -=2
    }
}