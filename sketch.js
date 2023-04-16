var electric = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i <3; i++){
      electric[i] = new zip();
  }

}

function draw() {
  background(220);
  
  for (var i = 0; i < 3; i++) {
    electric[i].show();
    electric[i].update();
  }

  //bolt();
  
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

function zip(){
  this.x = random(0,width);
  this.y = random (0, -height);
  
  this.show = function(){
    bolt();
  }
  
  this.update = function (){
    this.speed = random(5,10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;
    
    if (this.y > height){
      this.y = random (0, -height);
      this.gravity = 0
    }
  }
  
}
