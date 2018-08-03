var racecarSize = 50;
var startX = 0;
var startY = 100;
var speed = 2;

var racecar1X = 0;
var fastspeed = 5;

var racecar2X = 0;
var mediumspeed = 3;

var racecar3X = 0;
var slowspeed = 1;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(200, 225, 225);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);
  
  ellipse(startX, startY, racecarSize, racecarSize);
  ellipse(racecar1X, startY * 2, racecarSize, racecarSize);
  ellipse(racecar2X, startY * 3, racecarSize, racecarSize);
  ellipse(racecar3X, startY * 4, racecarSize, racecarSize);
  
  startX = startX + speed;
  racecar1X = racecar1X + fastspeed;
  racecar2X = racecar2X + mediumspeed;
  racecar3X = racecar3X + slowspeed;
}