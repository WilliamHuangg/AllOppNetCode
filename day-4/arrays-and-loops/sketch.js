var bubble = {
  x: random(width)
  y: random(height)
}
var bubbleSize = 40

function setup() {
  createCanvas(500,400)
}

function draw() {
  background(0)
  
  for (var i = 0; i < bubbles.length; i++)
    var currentBubble = bubbles[i]
    ellipse ( currentBubble.x, currentBubble.y , bubbleSize, bubbleSize)
    
}

function mouseClicked() {
  // let's add code here
  var bubble = "something";
  bubbles.push(bubble);
  
  print(bubbles.length)
  
}