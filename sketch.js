var electric = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i <50; i++){
      electric[i] = new zip();
  }

}

function draw() {
  background(220);
  
  for (var i = 0; i < 50; i++) {
    electric[i].show();
    electric[i].update();
  }

  //bolt();
  
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

function zip(){
  this.x = random(0,width);
  this.y = random (0, -height);
  this.n = random(230,250)
  this.n2 = random(230,250);
  this.n3 = random(230,250);
  this.n4 = random(250,280);
  this.n6 = random(250,260);
  
  this.show = function(){
    //bolt();
    ellipse(this.n,this.y,this.n6);
    /*
    translate(-200,-200);
    noStroke();
    beginShape();
      vertex(this.n+70, 137);
      vertex(this.n+50, 177);
      vertex(this.n2, 210);
      vertex(this.n+10, 232);
      vertex(this.n-15, 263);
      vertex(this.n2, 196);
      vertex(this.n4, 180);
      vertex(this.n3+40, 149);
    endShape(CLOSE);
    */
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
