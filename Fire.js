//Fire from last project but gravity is turned off and the random is now going evenly in x and y direction
class Fire {
  
  constructor(){
    //origin position of the particles
    this.fx = 200;
    this.fy = 200;
    //change this to vary the left right direction
    this.fvx = random (-2,2);
    //change these numbers to vary the up down direction 
    this.fvy = random(-2,2);
    this.alpha = 155;
    //controls the starting color of R in RGB.
    this.rColor = 255;
    //controls the starting color of G in RGB. 
    this.gColor = 125;
    //controls the starting color of B in RBG
    this.bColor = 0;
    //controls the starting scale of the fire particle
    this.fScale = slider3.value();
    
  }
  
    
  finished(){
    //this function returns true or false
    return this.alpha < 0;
  }

  update(){
    //connects the current x or y to the vector x or y
    this.fx += this.fvx;
    this.fy += this.fvy;
    //controls fade over time
    this.alpha -= 5;
    //the color changes as the fire goes up
    //controls the fire turning yellow to red
    this.gColor -= 5;
    this.fScale -= 0.01;
  }
  
  show(){
    noStroke();
    fill(this.rColor,this.gColor,this.bColor,this.alpha)
    ellipse(this.fx, this.fy, this.fScale);
  }
}
