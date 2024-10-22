function setup() {
  createCanvas(400, 400); 
  background(255);
}

function draw() {
  noFill(); 

  stroke(0); 
  rect(150, 150, 100, 100); 

  stroke(0); 
  triangle(150, 150, 250, 150, 200, 100); 

  stroke(0); 
  ellipse(200, 200, 50, 50); 
}
