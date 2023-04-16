function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  bolt();
  
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}
