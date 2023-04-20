var electric = [];
let q = 4;
var scribble;
let smoke = [];
let fire = [];
let angle = 90;


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
  


  electric = new Zip();
  scribble = new Scribble();
  
  this.selectRow = createSelect();
  this.selectRow.position(0,480);
  
  //get things from the csv file
  const blendModeOption = table.getColumn("blendModeOptions");
  
  for (var i = 0; i < blendModeOption.length; i++) {    
    this.selectRow.option(blendModeOption[i]);
    const blendy = this.selectRow.value();
    
    }
  
  //
  
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
    

  push();
    fill(255,slider.value(),0,255);
    //blendMode(OVERLAY);
    electric.show();
    electric.update();
  pop();
  
  //circle border
  push();
    //blendMode(blendy);
    //blendMode(this.selectRow.value());
    //blendMode(SCREEN);
    fill(0,0,0);
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  //The main ellipse for the sun. Bright
  push();
    blendMode(ADD);
    fill(255,100,0);
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  //A slightly smaller circle that stacks on the main circle to pump up the color value
  push();
    blendMode(SCREEN);
    fill(255,204,153,50);
    scribble.scribbleEllipse( width/2, height/2, 90, 90 );
  pop();

  //text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}

//This is creating the sunrays
class Zip{
  
  constructor(){
    
    //position of the sunrays
    this.zipx = 200;
    this.zipy = 200;
    //jittering of the sunrays (not currently used)
    this.zipvx = random (-1,1);
    this.zipvy = random(-1,-1);
  }
  

  //creates the sun rays
  show(){
   push(); 
    translate(this.zipx, this.zipy);
    //controls the size of the sun rays
    scale(slider2.value());
    
    //generates the sun rays and rotates them around the sun
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
    //this.rotate = frameCount * 0.05;
  }
  
}

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
    this.fScale -= .01;
  }
  
  show(){
    noStroke();
    fill(this.rColor,this.gColor,this.bColor,this.alpha)
    ellipse(this.fx, this.fy, this.fScale);
  }
}
