function setup() {
  createCanvas(400, 400); 
  noFill(); 
}

function drawObject(x, y, s) {
  push(); 
  translate(x, y); 
  scale(s); 
  stroke(0);
  rect(0, 0, 100, 100);
  stroke(0);
  triangle(0, 0, 100, 0, 50, -50);
  stroke(0);
  ellipse(50, 50, 50, 50);
  pop();
}

function draw() {
  let cols = 5; 
  let rows = 5; 
  let cellWidth = width / cols; 
  let cellHeight = height / rows; 
  let scaleFactor = cellWidth / 150; 

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth; 
      let y = j * cellHeight; 
      drawObject(x, y, scaleFactor); 
    }
  }
}
