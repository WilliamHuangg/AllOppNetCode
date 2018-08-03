var bubbles = []
var bubbleSize = 40

function setup() {
  createCanvas(500,400)
}

function draw() {
  background(0)
  
  for(var i = 0; i < bubbles.length; i++) {
        var currentBubble=bubbles[i]
      ellipse(currentBubble.x, currentBubble.y, bubbleSize, bubbleSize)
      
        currentBubble.x += random(-2, 2)
        currentBubble.y += random(-2, 2)
    }
}

function mouseClicked() {
  // let's add code here
  
    for(var i = bubbles.length - 1; i >= 0; i--) {
    var currentBubble = bubbles[i]

    var distance = dist(mouseX, mouseY, currentBubble.x, currentBubble.y)

    if (distance <= 20) {
    }
}
  
  var bubble = {
      x: random(width),
      y: random(height)
  } ;
  bubbles.push(bubble);
  
  print(bubbles.length)
  
}
