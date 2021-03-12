var hr;
var min;
var sec;
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  
hr=hour();
min=minute();
sec=second();

  angleMode(DEGREES);

  secAngle=map(sec,0,60,0,360);
  minAngle=map(sec,0,60,0,350);
  hrAngle=map(sec,0,60,0,300);
  drawSprites();
}