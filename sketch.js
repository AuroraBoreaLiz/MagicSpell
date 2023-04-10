function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  n = noise();
  noStroke();
  beginShape();
    vertex(313, 137);
    vertex(311, 177);
    vertex(261, 210);
    vertex(260, 232);
    vertex(231, 263);
    vertex(252, 196);
    vertex(282, 180);
    vertex(305, 149);
  endShape(CLOSE);
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
