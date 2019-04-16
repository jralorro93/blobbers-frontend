
// let bg;
// function preload() {
//   bg = loadImage('assets/new-cloud.jpg')
// }
//
// function setup() {
//   createCanvas(1280,720)
// }
//
// function draw() {
//   background(bg)
//
// }




//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed

let stretchy;
let blobbers;

function setup() {

  createCanvas(windowWidth, windowHeight);



  ///////////////CREATING RANDOM BLOBS, (20 OF THEM)
  blobbers = new Group();

  for(let j=0; j<20; j++){
    let blob = createSprite(random(0, width), random(0, height), 10, 10);
    blob.shapeColor = color(50, 60, 255)
    // dot.addAnimation('normal', 'assets/small_circle0001.png', 'assets/small_circle0001.png');
    blobbers.add(blob);
  }









  // walls = new Group();
  //
  // for (var i = 0; i < 20; i++) {
  //   var w = createSprite(
  //     random(125, width-125), (height/5)*i,
  //     random(10, 100), random(10, 100));
  //   w.shapeColor = color(0);
  //   walls.add(w);
  // }

  // face = loadImage('assets/face.png');

  //Sometimes image sequences are not enough and you may want to
  //use p5's drawing function while retaining the built-in features of the
  //sprite class
  stretchy = createSprite(400, 200, 80, 80);

  stretchy.draw = function() {

    //Color:
    fill(237, 205, 0);
    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    rotate(radians(this.getDirection()));
    ellipse(0, 0, 100+this.getSpeed(), 100-this.getSpeed());
  };
  stretchy.maxSpeed = 3;

  // blobber.draw = function() {
  //   fill(50, 60, 255);
  //   ellipse(500,500,100,100)
  // }
}



function draw() {
  background(255, 255, 255);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;

  // if (stretchy.overlap(blobbers)) {
  //  blob.remove()
  // }

  stretchy.overlap(blobbers, collect);

  // stretchy.collide(walls);

  drawSprites();
}





function collect(collector, collected) {
  //collector is another name for stretchy
  //collected is the sprite in the group collectibles that triggered
  //the event
  collected.remove();
}
