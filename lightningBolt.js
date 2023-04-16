function bolt(){
  translate(-200,-200);
  n = random(230,250);
  n2 = random(230,250);
  n3 = random(230,250);
  n4 = random(250,280);
  n6 = random(250,260);
  noStroke();
  beginShape();
    vertex(n+70, 137);
    vertex(n+50, 177);
    vertex(n2, 210);
    vertex(n+10, 232);
    vertex(n-15, 263);
    vertex(n2, 196);
    vertex(n4, 180);
    vertex(n3+40, 149);
  endShape(CLOSE);
}
