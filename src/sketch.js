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
  bg = loadImage('assets/new-cloud.jpg')
}

function setup() {
  createCanvas(1280,720)
}

function draw() {
  background(bg)

}
