function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
    stroke(0);
    strokeWeight(1);
    fill(200,0,0);
    ellipse(150, 150, 160, 160);
    
    fill (150,120,0);
    rect(145, 40, 10, 30);
    
    stroke(50, 150, 0);
    strokeWeight(0);
    fill (0,225,0);
    quad(145, 70, 120, 60, 110, 45, 125, 50);
    
    noStroke();
    fill(255);
    ellipse(220,120,60,60);
  
}