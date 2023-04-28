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

