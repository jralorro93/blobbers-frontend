
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
let enemies;

function setup() {

  createCanvas(windowWidth, windowHeight);



  ///////////////CREATING RANDOM BLOBS, (20 OF THEM, SAME COLOR)
  blobbers = new Group();

  for(let j=0; j<20; j++){
    let blob = createSprite(random(0, width), random(0, height), 10, 10);
    blob.shapeColor = color(237, 205, 0);
    // blob.ellipse(10, 10, 10, 10);
    // dot.addAnimation('normal', 'assets/small_circle0001.png', 'assets/small_circle0001.png');
    blobbers.add(blob);
  }


///////////////CREATING RANDOM ENEMIES, (20 OF THEM, DIFFERENT COLOR)
  enemies = new Group();

  for(let j=0; j<20; j++){
    let enemy = createSprite(random(0, width), random(0, height), 10, 10);
    enemy.shapeColor = color(50, 60, 255)
    // dot.addAnimation('normal', 'assets/small_circle0001.png', 'assets/small_circle0001.png');
    enemies.add(enemy);
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
  stretchy.maxSpeed = 5;


}



function draw() {
  background(255, 255, 255);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  // stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  // stretchy.velocity.y = (mouseY-stretchy.position.y)/10;

  stretchy.overlap(blobbers, collect);
  stretchy.overlap(enemies, dontCollect);
  // stretchy.collide(walls);


  drawSprites();
}





//////////WHAT HAPPENS WHEN YOU COLLECT SOMETHING YOU DON'T WANT

function dontCollect(collector, collected) {
  collected.remove();
  collector.scale -= .15;
///////if stretchy scale becomes less than -0.05000000000000007, remove it and pop up with "GAME OVER"
}


//////////WHAT HAPPENS WHEN YOU COLLECT SOMETHING YOU WANT
function collect(collector, collected) {
  //collector is another name for stretchy
  //collected is the sprite in the group collectibles that triggered
  //the event
  collected.remove();
  collector.scale += .15;

}

//////////SETTING UP THE KEY COMMANDS: UP, DOWN, LEFT, RIGHT, SPACE FOR FULL STOP
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    stretchy.setSpeed(1, 0);
    // stretchy.velocity.x = (stretchy.position.x)/10;
  }
  else if (keyCode == DOWN_ARROW) {
    stretchy.setSpeed(1, 90);
    // stretchy.velocity.y = (stretchy.position.y)/10;
  }
  else if (keyCode == LEFT_ARROW) {
    stretchy.setSpeed(1, 180);
    // stretchy.velocity.x = (stretchy.position.x)/10;
  }
  else if (keyCode == UP_ARROW) {
    stretchy.setSpeed(1, 270);
    // stretchy.velocity.y = (stretchy.position.y)/10;
  }
  else if (key == ' ') {
    stretchy.setSpeed(0, 0);
  }
  return false;
}
