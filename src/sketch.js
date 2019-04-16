// function setup() {
//   createCanvas(800,400);
//   createSprite(400, 200, 50, 50);
// }
//
// function draw() {
//   background(255,255,255);
//   drawSprites();
// }
let bg;
function preload() {
  bg = loadImage('assets/cloud-bg.png')
}

function setup() {
  createCanvas(1920,700)
}

function draw() {
  background(bg)
}
