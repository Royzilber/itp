

## MIDTERMS

## Phase 1

i drew the my object [hyperlink](https://drive.google.com/file/d/1Y-4nUsOI-nzoVcKPNa8d05NT09nL_jF7/view?usp=sharing).



## phase 2 

i drew the object with the data given
i searched on the website on how to make a triangle and came up with a code like this

i didnt want the shapes to be filled with color so i wrote no fill

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

## phase 3

i copied the settings from the github shared folder and changed them to my shape 

ended up with the following 

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

  function draw() {
  drawShape(150, 150, 1);
 
}

## phsae 4

i acidentaly  quit my viual studio code but ill try to recreate my process now.

i wanted my shapes to apear in a pattern so i figured out that i need some kind of a loop. 

i copied my code with my function: 

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

than i needed to set variables for columns and rows so i did the following 

function draw() {
  let cols = 5; 
  let rows = 5; 
  let cellWidth = width / cols; 
  let cellHeight = height / rows; 
  let scaleFactor = cellWidth / 150; 

  set the variable of cols and rows to the setting i want which is 5 but it can be any number 

  cell width is the range of the object being in the canvas so if the canvas is 400x400 than it will be divided by the number of col, the following line is the same thing but with the rows.

  scaleFactor is the how i fit my shape inside of a box in my canvas 

  # loop 

  than i had to creat the loop which was if i less than 0 colms than add one until it hits five 
  i did the same thing for j variable for rows . 
and i printed my function with the scale factor. 

the following: 

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





