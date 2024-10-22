function setup() {
  createCanvas(400, 400); 
  background(255);
  
}

function draw() {
  noFill(); 
  stroke(0); 
  
  drawObject(150, 150); 
}

function drawObject(x, y) {
  
  rect(x, y, 100, 100); 
  
  
  triangle(x, y, x + 100, y, x + 50, y - 50); 
  
  
  ellipse(x + 50, y + 50, 50, 50); 
}
