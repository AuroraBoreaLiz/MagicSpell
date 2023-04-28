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
  
  // learned slider from:
  //https://codepen.io/newtonstreet/pen/BzGjYR
  createP("Sun Beam Size "+ "~.~.~.~"+ " Sun Beam Color")
  slider2 = createSlider(0.0,7.0,0.25, 0);
  slider = createSlider(0,255,127);
  electric = new Zip();
  scribble = new Scribble();  
  dropDown = createSelect();
  dropDown.position(150,480);
  
  //get things from the csv file
  const blendModeOption = table.getColumn("blendModeOptions");
   
  //looping through the table to get the 
  //values in each row from the first column
  for (var i = 0; i < blendModeOption.length; i++) {    
    dropDown.option(blendModeOption[i]);
  }
  
  blendMode(BLEND);
  
  //change the default blend mode across the scene. 
  //Doesn't impact inside push pops. 
  dropDown.changed(changeBlendy);
    
  createP("Fire Particle Size")
  slider3 = createSlider(0,255,15, 0);
  
}

function draw() {
  background(0);
  noStroke();
  angleMode(DEGREES);
  
  //fill fire array 
  for (let i=0; i <10; i++) {
    let f = new Fire ();
    fire.push(f);
  }
  
  //doing the reverse count for this array
  for (let i = 0; i < fire.length; i++){
    fire[i].update();
    push();
      //blendMode(ADD);
      fire[i].show();
    pop();
    
    //remove this fire particle when it is no longer visible
    if (fire[i].finished()){       
      fire.splice(i,1);
    }    
  }   
  
  //the sun rays are shown and updated.
  push();
    fill(255,slider.value(),0,255);
    blendMode(SCREEN);
    electric.show();
    //Update currently does nothing
    electric.update();
  pop();
  
  energyBall();
}

function energyBall(){
  
  //circle border
  push();
    //blendMode(blendy);
    //blendMode(this.selectRow.value());
    blendMode(SCREEN);
    //blendMode(mode);
    fill(0,0,0);
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  //The main ellipse for the sun. Bright
  push();
    //blendMode(ADD);
    fill(255,100,0);
    scribble.scribbleEllipse( width/2, height/2, 100, 100 );
  pop();
  
  //smaller circle stacks on the main circle pump up the color
  push();
    blendMode(SCREEN);
    fill(255,204,153,50);
    scribble.scribbleEllipse( width/2, height/2, 90, 90 );
  pop();
}

function changeBlendy(){
 	let val = dropDown.value();
  if(val == 'BLEND MODES'){
    blendMode(BLEND);
    print('Normal Blend Mode')
  } else if(val == 'DARKEST'){
   	blendMode(DARKEST); 
    print('Darkest')
  } else if(val == 'LIGHTEST'){
   	blendMode(LIGHTEST);
    print('Lightest')
  } else if(val == 'DIFFERENCE'){
   	blendMode(DIFFERENCE); 
    print('Difference')
  } else if(val == 'DIFFERENCE'){
   	blendMode(EXCLUSION); 
    print('Exclusion')
  } else if(val == 'MULTIPLY'){
   	blendMode(MULTIPLY); 
    print('Multiply')
  } else if(val == 'SCREEN'){
   	blendMode(SCREEN); 
    print('Screen')
  } else if(val == 'REPLACE'){
   	blendMode(REPLACE); 
    print('Replace')
  } else if(val == 'REMOVE'){
   	blendMode(REMOVE); 
    print('Remove')
  } else if(val == 'OVERLAY'){
   	blendMode(OVERLAY); 
    print('Overlay')
  } else if(val == 'HARD_LIGHT'){
   	blendMode(HARD_LIGHT); 
    print('Hard Light')
  } else if(val == 'SOFT_LIGHT'){
   	blendMode(SOFT_LIGHT); 
    print('Soft Light')
  } else if(val == 'DODGE'){
   	blendMode(DODGE); 
    print('Dodge')
  } else if(val == 'BURN'){
   	blendMode(BURN); 
    print('Burn')
  }

}
