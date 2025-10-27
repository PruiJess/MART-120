function setup() {
  createCanvas(400, 400);
  background(204,255,255);

  // Ears
  fill(255, 220, 180);
  circle(140, 200, 20); // left ear
  circle(260, 200, 20); // right ear
  
  // Head
  fill(255, 220, 180);
  ellipse(200, 200, 120, 150); // face

  // Eyes
  fill(255);
  ellipse(180, 190, 20, 10); // left eye
  ellipse(220, 190, 20, 10); // right eye
  fill(0);
  ellipse(180, 190, 5, 5); // left pupil
  ellipse(220, 190, 5, 5); // right pupil
  
  // Shoulders
  fill(100, 100, 200);
  rect(140, 280, 120, 60);

  // Beard
  fill(80, 50, 20);
  triangle(150, 230, 250, 230, 200, 300); // main beard
  triangle(160, 230, 200, 280, 180, 230); // left extension
  triangle(220, 230, 200, 280, 240, 230); // right extension

  // Mouth
  stroke(150, 0, 0);
  line(185, 220, 215, 220); // mouth

  // Nose
  stroke(0);
  line(200, 200, 200, 215); // nose

  // Points for texture
  stroke(0);
  point(190, 250);
  point(210, 250);
}