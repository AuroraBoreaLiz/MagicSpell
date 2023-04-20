var electric = [];
let q = 4;
var scribble;
let smoke = [];
let fire = [];
let angle = 90;
let sel;


function preload() {
  //load in the table of data
  table = loadTable("blendModeList.csv", "csv", "header");
}
function setup() {
  createCanvas(400, 400);
  
    // learned slider from https://codepen.io/newtonstreet/pen/BzGjYR
  createP("Sun Beam Color "+ "~.~.~.~"+ " Sun Beam Size")
  slider = createSlider(0,255,127);
  slider2 = createSlider(0.0,7.0,0.25, 0);
  
  //get things from the csv file
  blendModeOption = table.getColumn("blendModeOptions");

  electric = new Zip();
  scribble = new Scribble();
  
  sel = createSelect();
  sel.position(0,480);
  for (var i = 0; i < blendModeOption.length; i++) {    
    sel.option(table.getColumn([i]));
    }
  
}

function draw() {
  background(0);
  noStroke();
  angleMode(DEGREES);
  
  
    //fill fire array
  //can generate more particles at once by adjusting the i< 
  for (let i=0; i <10; i++) {
    
  let f = new Fire ();
  fire.push(f);
    

  push();
    fill(255,slider.value(),0,50);
    blendMode(SCREEN);
    electric.show();
    electric.update();
  pop();
  
  //circle border
  push();
    blendMode(OVERLAY);
    fill(0,0,0)
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  push();
    //blendMode(ADD);
    fill(255,100,0);
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  push();
    //blendMode(SCREEN);
    fill(255,204,153,50);
    scribble.scribbleEllipse( width/2, height/2, 90, 90 );
  pop();


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
    
  

  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

//base example with rain https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0
class Zip{
  
  constructor(){
    this.zipx = 200;
    this.zipy = 200;
    this.zipvx = random (-1,1);
    this.zipvy = random(-3,-1);
  }
  

  
  show(){
   push(); 
    translate(this.zipx, this.zipy);
    scale(slider2.value());
    
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
    //this.zipx += this.zipvx;
    //this.zipy += this.zipvy;
    this.rotate = frameCount * 0.05;
  }
  
  flip(){
        if (!mouseIsPressed){
    // If the mouse is not pressed, draw the image as normal
  } else {
    push();
    // Scale -1, 1 means reverse the x axis, keep y the same.
    scale(-1, 1);  
   
    pop();
  }
  }
  
}

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
    this.alpha -= 5;
    //the color changes as the fire goes up
    //controls the fire turning yellow to red
    this.gColor -= 5;
    this.fScale -= 0.3;
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
