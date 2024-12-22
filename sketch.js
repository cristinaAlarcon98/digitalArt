function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function mySphere(color, x1, y1, z1, x2, y2, z2) {
  push();
  line(x1, y1, z1, x2, y2, z2);
  translate(x2, y2, z2);
  fill(color);
  stroke('white');
  strokeWeight(0.1);
  sphere(10);
  pop();
}

function drawFlower(){

 

  rotateY(frameCount * 0.04);

  stroke('white');
   mySphere('#FB003B', 0, 0, 0, 0, 0, 0);

   mySphere('#94B4F7', 0, 0, 0, 0, 0, 20);
 
   mySphere('#FFB800', 0, 0, 0, 0, 0, -20);
 
   mySphere('#00E1B6', 0, 0, 0, 0, 20, 10);
 
   mySphere('#FFB800', 0, 0, 0, 0, 20, -10);
 
   mySphere('#BEFB00', 0, 0, 0, 0, -20, 10);
 
   mySphere('#00E1B6', 0, 0, 0, 0, -20, -10);
}

function draw() {
  background('black');
 
let spacing = 100; 
 for (let x = -windowWidth / 2 + 40; x < windowWidth / 2 + 40; x += spacing) {
    for (let y = -windowHeight / 2 + 40; y < windowHeight / 2 + 40; y += spacing) {
      push();
      translate(x, y, 0);
      drawFlower();
      pop();
    }
 }
  
}
