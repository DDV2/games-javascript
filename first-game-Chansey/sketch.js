var chansey;
var chansey2;
var counter = 0;
let colorFondo;
let fin;
let ctamaño, coj, dead;
function preload(){
   chansey = loadImage("./chansey1.png");
   chansey2 = loadImage("./chansey2.png");
  }
  
  
let robots = [];

function setup(){
  createCanvas(700, 600);
  imageMode(CENTER);
  for (var i = 0; i < 2; i++){
    for(var j = 0; j < 2; j++){
      robots.push(new Robot(i * 500 + 50, j * 400 + 75, 60));
    }
  }
  dead = false;
  ctamaño = 100;
  coj = 0;
  fin = false;
  colorFondo= color(50, 50, 50);
}

function draw(){
  if(dead){
    background(0);
    text("You died..", width/2 - 30, height/2, -10);
  }else{
    background(colorFondo);
    //drawing robot army.
    for(let robot of robots){
      robot.drawRobot();
    }
    if(fin){
      colorFondo = color(0);
      image(chansey2, 350, 300 + coj, ctamaño, ctamaño);
    }else{
      //Chansey
      image(chansey, 350, 300, 100, 100);
    }
    
    //chanseyMESSAGE
    if(counter == 1){
      fill(255);
      text("STOP IT", 310, 365);
    }
  
  
    if(counter == 2 ){
      fill(255);
      text("Carefull NOW..", 170, 300);
      colorFondo= color(100, 10, 10);
    } 
    if(counter == 3){
      stroke(255, 0, 0);
      fill(255);
      textSize(25);
      text("YOU WANNA FUCKING DIE??", 250, 230);
      stroke(0);
      line(348, 270, 359, 278);
      line(362, 278, 368, 270);
      noStroke();
      fill(255, 0, 0);
      rect(353, 276, 5, 5);
      rect(363, 276, 5, 5);
      colorFondo= color(240, 50, 60);
    }
    if(counter == 4){
      fin = true;
    }
    //button "make chansey happy"
    stroke(255);
    fill(0);
    rect(310, 0, 60, 30);
    fill(255);
    textSize(15);
    text("Reset", 320, 20);
  }

}

function mousePressed(){


  for (let antennas of robots){
    antennas.checkIt(mouseX, mouseY);
  }

    //this make Chansey happy
    if(mouseX < 375 && mouseX > 315 && mouseY < 30 &&mouseY > 0){
      for(let reseting of robots){
        //so now the chanseyMESSAGE disapear
        reseting.state = false;
        counter = 0;
      }
    }
    if(counter == 4) {
      setTimeout(todoSeAcabo, 2000);
    }
}

function todoSeAcabo() {
  for(let reseting of robots){
    reseting.state = false;
  }
  setTimeout(seAcerca, 1000)
}

function seAcerca() {
  for(let robot of robots){
    robot.t = robot.t/2;
  }
  ctamaño = ctamaño * 2;
  setTimeout(final, 1000);  
}

function final() {
  ctamaño = ctamaño * 3;
  coj = 200;
  setTimeout(muerto, 1000);
}

function muerto() {
  ctamaño = ctamaño * 4;
  coj = 750;
  setTimeout(()=>{
    dead = true;
  }, 200);
}