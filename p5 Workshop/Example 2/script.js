var r, g, b; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {

  background(127);

  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);

  ellipse(360, 200, 200, 200);
}

function mousePressed() {

  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}