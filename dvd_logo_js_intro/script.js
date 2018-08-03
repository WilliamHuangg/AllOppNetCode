var dvd
var xPos
var yPos
var ySpeed = 1
var xSpeed = 1
var bgColor = 'dodgerblue'

function preload() {
  dvd = loadImage('dvdlogo.jpg')
  xPos = 400
  yPos = 400
}

function setup() {
  createCanvas(800,800)

}

function draw() {
  background(bgColor)
  image(dvd, xPos, yPos, 100, 100);
  xPos = xPos + xSpeed
  yPos = yPos + ySpeed
  
  if (yPos < 0) {
    ySpeed = ySpeed * -1
  }
  if (xPos > 800 -100) {
    xSpeed = xSpeed * -1
  }
  if (yPos > 800 - 100) {
    ySpeed = ySpeed * -1
  }
  if (xPos < 0) {
    xSpeed = xSpeed * -1
  }
  if  (xPos === 0) {
    if (yPos === 0){
      bgColor = "yellow"
    }
  }
  if (xPos === 700) {
    if (yPos === 700){
      bgColor = "red"
    }
  }
  if (xPos === 700) {
    if (yPos === 0){
      bgColor = "white"
    }
  }
  if (xPos === 0) {
    if (yPos === 700){
      bgColor = "green"
    }
  }
  
}
