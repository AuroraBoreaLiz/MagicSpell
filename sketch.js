var electric = [];
let q = 4;
var scribble;
let smoke = [];
let fire = [];
let angle = 90;

function setup() {
  createCanvas(400, 400);

  /*
  for (var e = 0; e < q; e++){
      electric[e] = new Zip();
    
  
  }
  */
  electric = new Zip();
  scribble = new Scribble();
}

function draw() {
  background(220);
  noStroke();
  angleMode(DEGREES);
  


  //circle border
  push();
    blendMode(OVERLAY);
    fill(0,0,102)
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  push();
    blendMode(OVERLAY);
    fill(255,204,153);
    scribble.scribbleEllipse( width/2, height/2, 50, 50 );
  pop();
  
  push();
    blendMode(SCREEN);
    fill(255,204,153,50);
    scribble.scribbleEllipse( width/2, height/2, 40, 40 );
  pop();
  
  electric.show();
  
  
/*
     //fill smoke array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <5; i++) {
    let s = new Smoke ();
    smoke.push(s);
  noStroke();
  }  
      //fill smoke array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <5; i++) {
    let s = new Smoke ();
    smoke.push(s);
    
  }
  
  //for (let i = 0; i <particles.length; i++){
  //particles.length-1 starts from the end of the array when deleting particles at the end of their lifespace so they aren't skipped when the array shifts
  for (let i = smoke.length-1; i >= 0; i--){
    smoke[i].update();
    smoke[i].show();
    if (smoke[i].finished()){
      
      //remove this smoke
      //splice function removes an element from the array at position i from just that one element
      smoke.splice(i,1);
    }
  }

  //fill fire array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <10; i++) {
    
    let f = new Fire ();
    fire.push(f);
    
  }
  //doing the reverse count for this array puts the later particles on top so the visual is less pleasing
  for (let i = 0; i < fire.length; i++){
    fire[i].update();
    push();
    blendMode(ADD);
    fire[i].show();
    pop();
    //remove this fire particle when it is no longer visible
    if (fire[i].finished()){     
      
      fire.splice(i,1);
    }
  }
 
   
  for (var e = 0; e < q; e++) {
    electric[e].show();
    //electric[e].update();
  }

*/  
    
    
  


  //bolt();
  
  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

//base example with rain https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0
class Zip{
  
  constructor(){
    this.zipx = 200;//random(200, width);
    this.zipy = 200; //random (200, -height);
    this.zipvx = random (-1,1);
    this.zipvy = random(-3,-1);
  }
  

  
  show(){
   push(); 
    translate(this.zipx, this.zipy);
    scale(0.3);
    //rotate(90);
    push();
      for (var r3 = 0; r3 < 15; r3++) { 
      rotate(25);
        bolt();
      }
      
    pop();
  pop();
  }
  
  update(){
    this.zipx += this.zipvx;
    this.zipy += this.zipvy;
    /*
    this.speed = random(5,10);
    this.gravity = 1.05;
    this.zipy = this.zipy + this.speed*this.gravity;
    
    if (this.zipy > height){
      this.zipy = random (0, -height);
      this.gravity = 0
    }
    */
  }
  
}

class Fire {
  
  constructor(){
    this.fx = random(280,320);
    this.fy = 380;
    this.fvx = random (-1,1);
    this.fvy = random(-3,-1);
    this.alpha = 155;
    //controls the starting color of R in RGB.
    this.rColor = 255;
    //controls the starting color of G in RGB. 
    this.gColor = 125;
    //controls the starting color of B in RBG
    this.bColor = 0;
    //controls the starting scale of the fire particle
    this.fScale = 25;
    
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
    this.alpha -= 3;
    //the color changes as the fire goes up
    //controls the fire turning yellow to red
    this.gColor -= 2;
    this.fScale -= 0.5;
  }
  
  show(){
    noStroke();
    fill(this.rColor,this.gColor,this.bColor,this.alpha)
    ellipse(this.fx, this.fy, this.fScale);
  }
}

class Smoke {
  
  
  constructor(){
    //particles start at the bottom
    this.x = 300;
    this.y = 380;
    //change this to make particles go random left and right
    this.vx = random(-1,1);
    //change this in the negative to make the particles go up randomly
    this.vy = random(-5,-1);
    this.alpha = 255;
    this.sScale = 25;
    this.sColor = 100;
    
  }
  
  finished(){
    //this function returns true or false
    //when the particle fades below zero the particle dies
    return this.alpha < 0;
  }
  
  //moves the particles x and y with the random from vx and vy
  update(){
    this.x += this.vx;
    this.y += this.vy;
    //controls fade over time
    //particle lifetime
    this.alpha -= 5;
    //change this to change how quickly the smoke size decreases over time
    this.sScale -= 1.5;
    this.sColor -= 2;
  }
  
  //controls what the particle looks like
  show () {
    noStroke();
    //stroke(255);
    fill (this.sColor,this.alpha);
    ellipse(this.x, this.y, this.sScale);
  }
}
