let titleSize = 24;
let titleStep = 0.5;
let titleDirection = 1;
let titleCount = 0;
let maxTitleChanges = 5;

let leftEarX = 140;
let rightEarX = 260;
let leftEarSpeed;
let rightEarSpeed;

let leftEyeOffset = 0;
let rightEyeOffset = 0;
let leftEyeSpeed;
let rightEyeSpeed;

let shoulderAngle = 0;
let shoulderAngleSpeed = 0.015; // 
let shoulderOffsetX = 0;
let shoulderOffsetY = 0;

function setup() {
  createCanvas(400, 400);
  leftEarSpeed = random(0.25, 1.25); // 
  rightEarSpeed = random(0.25, 1.25);
  leftEyeSpeed = random(0.15, 1);    // 
  rightEyeSpeed = random(0.15, 1);
}

function draw() {
  background(204, 255, 255);

  // Ear positions
  leftEarX -= leftEarSpeed;
  rightEarX += rightEarSpeed;
  if (leftEarX < 130 || leftEarX > 150) leftEarSpeed *= -1;
  if (rightEarX > 270 || rightEarX < 250) rightEarSpeed *= -1;

  // Eye vertical offsets
  leftEyeOffset += leftEyeSpeed;
  rightEyeOffset += rightEyeSpeed;
  if (abs(leftEyeOffset) > 10) leftEyeSpeed *= -1;
  if (abs(rightEyeOffset) > 10) rightEyeSpeed *= -1;

  // Shoulder angle and random offset
  shoulderAngle += shoulderAngleSpeed;
  shoulderOffsetX = random(-3, 3);
  shoulderOffsetY = random(-3, 3);

  // Head
  fill(255, 220, 180);
  ellipse(200, 200, 120, 150); // face

  // Eyes
  fill(255);
  ellipse(180, 190 + leftEyeOffset, 20, 10); // left eye
  ellipse(220, 190 + rightEyeOffset, 20, 10); // right eye
  fill(0);
  ellipse(180, 190 + leftEyeOffset, 5, 5); // left pupil
  ellipse(220, 190 + rightEyeOffset, 5, 5); // right pupil

  // Eyebrows
  stroke(0);
  strokeWeight(4);
  line(170, 180 + leftEyeOffset, 190, 180 + leftEyeOffset); // left eyebrow
  line(210, 180 + rightEyeOffset, 230, 180 + rightEyeOffset); // right eyebrow
  strokeWeight(1);

  // Mouth
  stroke(150, 0, 0);
  line(185, 220, 215, 220); // mouth

  // Nose
  stroke(0);
  line(200, 200, 200, 215); // nose

  // Points for texture
  point(190, 250);
  point(210, 250);

  // Shoulders
  push();
  translate(200 + shoulderOffsetX, 310 + shoulderOffsetY);
  rotate(sin(shoulderAngle) * 0.1);
  fill(100, 100, 200);
  rectMode(CENTER);
  rect(0, 0, 120, 60);
  pop();
  
  // Beard
  fill(80, 50, 20);
  triangle(150, 230, 250, 230, 200, 300); // main beard
  triangle(160, 230, 200, 280, 180, 230); // left extension
  triangle(220, 230, 200, 280, 240, 230); // right extension

  // Ears
  noStroke();
  fill(255, 220, 180);
  circle(leftEarX, 200, 20); // left ear
  circle(rightEarX, 200, 20); // right ear

// Animate title size
titleSize += titleStep * titleDirection;
if (titleSize > 36 || titleSize < 24) {
  titleDirection *= -1;
  titleCount++;
  if (titleCount >= maxTitleChanges * 2) {
    titleCount = 0;
  }
}

// Title
textAlign(CENTER, TOP);
textSize(titleSize);
fill(0);
noStroke();
text("Caffeinated Jesse", width / 2, 10);

// Signature
textAlign(RIGHT, BOTTOM);
textSize(16);
fill(0);
noStroke();
text("Jesse Pruitt", width - 10, height - 10);

}