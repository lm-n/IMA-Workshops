
var slider;

var people = "¿How many people are in space?";

function setup() {
  createCanvas(720, 400);
  peopleInSpace();
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(127);
  strokeWeight(2);
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
  textSize(32);
  textAlign(CENTER);
  text(people, 360, 40);
  fill(0, 102, 153);
}

function peopleInSpace(){

  setTimeout(function () {
    $.getJSON('http://api.open-notify.org/astros.json', function(data) {
      console.log(data['number']);
      people = data['number'];
    });
  }, 5000);
}