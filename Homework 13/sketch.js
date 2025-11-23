
// Player position
var characterX = 100;
var characterY = 100;

// Movement keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Arrays for obstacles
var shapeXs = [];
var shapeYs = [];
var diameters = [];
var colors = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

// Mouse-added obstacles
var mouseShapesX = [];
var mouseShapesY = [];

// Game state
var gameOver = false;

function setup() {
    createCanvas(500, 600);
    initGame();
}

function draw() {
    background(120, 45, 78);

    if (!gameOver) {
        // Borders
        createBorders(10);

        // Exit area
        fill(0, 255, 0);
        rect(width - 50, height - 50, 50, 50);
        fill(0);
        textSize(16);
        text("EXIT", width - 40, height - 20);

        // Draw player
        drawCharacter();
        characterMovement();

        // Draw and move obstacles
        for (var i = 0; i < shapeXs.length; i++) {
            fill(colors[i]);
            circle(shapeXs[i], shapeYs[i], diameters[i]);

            shapeXs[i] += shapeXSpeeds[i];
            shapeYs[i] += shapeYSpeeds[i];

            // Wrap around
            if (shapeXs[i] > width) shapeXs[i] = 0;
            if (shapeXs[i] < 0) shapeXs[i] = width;
            if (shapeYs[i] > height) shapeYs[i] = 0;
            if (shapeYs[i] < 0) shapeYs[i] = height;
        }

        // Draw mouse-added obstacles
        fill(120, 130, 140);
        for (var j = 0; j < mouseShapesX.length; j++) {
            circle(mouseShapesX[j], mouseShapesY[j], 25);
        }

        // Check win condition
        if (characterX > width - 50 && characterY > height - 50) {
            gameOver = true;
        }
    } else {
        // Win screen
        fill(255);
        textSize(32);
        text("You Win!", width / 2 - 70, height / 2 - 50);

        // Restart button
        fill(0, 200, 255);
        rect(width / 2 - 50, height / 2, 100, 40);
        fill(255);
        textSize(18);
        text("Restart", width / 2 - 30, height / 2 + 25);
    }
}

// Player movement
function characterMovement() {
    if (keyIsDown(w)) characterY -= 5;
    if (keyIsDown(s)) characterY += 5;
    if (keyIsDown(a)) characterX -= 5;
    if (keyIsDown(d)) characterX += 5;

    if (keyIsDown(UP_ARROW)) characterY -= 5;
    if (keyIsDown(DOWN_ARROW)) characterY += 5;
    if (keyIsDown(LEFT_ARROW)) characterX -= 5;
    if (keyIsDown(RIGHT_ARROW)) characterX += 5;
}

// Draw player
function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

// Borders
function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

// Mouse click
function mouseClicked() {
    if (gameOver) {
        // Check if click is inside restart button
        if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
            mouseY > height / 2 && mouseY < height / 2 + 40) {
            initGame();
            gameOver = false;
        }
    } else {
        mouseShapesX.push(mouseX);
        mouseShapesY.push(mouseY);
    }
}

// Reset game
function initGame() {
    characterX = 100;
    characterY = 100;
    shapeXs = [];
    shapeYs = [];
    diameters = [];
    colors = [];
    shapeXSpeeds = [];
    shapeYSpeeds = [];
   X = [];
    mouseShapesY = [];

    for (var i = 0; i < 5; i++) {
        shapeXs[i] = random(width);
        shapeYs[i] = random(height);
        diameters[i] = random(20, 50);
        colors[i] = color(random(255), random(255), random(255));
        shapeXSpeeds[i] = random(1, 4);
        shapeYSpeeds[i] = random(1, 4);
    }
}
