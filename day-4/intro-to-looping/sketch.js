// sketch.js
function setup() {
  createCanvas(600,600)
}

function draw() {
  var x = 50
//  var xSize = 350
//  var ySize = 350
  
  var red = Math.floor(Math.random() * 255)
  
  var green = Math.floor(Math.random() * 255)
  var blue = Math.floor(Math.random() * 255)
//   var color = "rgb("+red+","+green+","+blue+")"
  var bgColor = `rgb(${red}, ${green}, ${blue})`
  
  var circleHeight = 300
  var circleWidth = 300
  
  background(0)
  
  for ( var count = 0; count < 9; count += 1) {
      fill(bgColor)
      ellipse(300,300, circleHeight, circleWidth)

      red = Math.floor(Math.random() * 255)
      green = Math.floor(Math.random() * 255)
      blue = Math.floor(Math.random() * 255)
    //   color = "rgb("+red+","+green+","+blue+")"
      bgColor = `rgb(${red}, ${green}, ${blue})`
      
      circleHeight = circleHeight - 30
      circleWidth = circleWidth - 30
      
  }
}
  

//  for (var xSize = 0; xSize < 3; xSize += 1){
//    ellipse(width/2, height/2, xSize,ySize)
//  }

//    ellipse(width/2, height/2, 350,350)
//    ellipse(width/2, height/2, 300,300)
//    ellipse(width/2, height/2, 250,250)
//    ellipse(width/2, height/2, 200,200)
//    ellipse(width/2, height/2, 150,150)
//    ellipse(width/2, height/2, 100,100)
//    ellipse(width/2, height/2, 50,50)

