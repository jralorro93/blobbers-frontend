//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed

let stretchy;
let blobbers;
let enemies;
let score = 0;
let bg;
let timer = 30;
let gameStart = false;
// let input;
// let button;
// let greeting;


function preload() {
  bg = loadImage('assets/new-cloud.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  // input = createInput();
  // button = createButton('Submit');
  //
  //
  //



  ///////////////CREATING RANDOM BLOBS, (20 OF THEM, SAME COLOR)
  blobbers = new Group();
  for(let j=0; j<20; j++){
    let blob = createSprite(random(0, width), random(0, height), 10, 10);
    blob.shapeColor = color(237, 205, 0);
    blobbers.add(blob);
  }


///////////////CREATING RANDOM ENEMIES, (50 OF THEM, DIFFERENT COLOR)
  enemies = new Group();
  for(let j=0; j<70; j++){
    let enemy = createSprite(random(0, width), random(0, height), 10, 10);
    enemy.shapeColor = color(50, 60, 255)
    enemies.add(enemy);
  }

////////////Creates User blob
  stretchy = createSprite(700, 400, 80, 80);



  stretchy.draw = function() {

    //Color:
    fill(237, 205, 0);
    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    rotate(radians(this.getDirection()));
    ellipse(0, 0, 100+this.getSpeed(), 100-this.getSpeed());
  };
  stretchy.maxSpeed = 10;
}

function draw() {
  background(bg);

/////////////ADDED TIMER//////////////////////////
  textSize(24);
  text("Seconds Remaining: " + timer, 1100, 30)
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;

  }
////////////GAME OVER/////////////////////////////
  if (timer == 0 || stretchy.scale === -0.05000000000000007) {
    textSize(150)
    text("GAME OVER", 300, height/2);
    textSize(24);
    text("Score: " + score, 13, 25)
    blobbers.remove()
    enemies.remove()
  }

  stretchy.overlap(blobbers, collect);
  stretchy.overlap(enemies, dontCollect);

  // fallingRain(blobbers)
  fallingRain(enemies);
  drawSprites();
  textSize(24);
  text("Score: " + score, 13, 25)


}

////////////////////////Create login
// function login() {
//   if (gameStart != true) {
//     rect(340, 200, width/2, height/2);
//     input.position(width/2, height/2);
//     button.position(input.x + input.width, 65);
//     button.mousePressed(greet)
//   }
// }
//
// function greet(){
//   let name = input.value()
//   debugger
// }


///////////CREATE MORE ENEMIES, EVERYTIME YOU RUN INTO THEM
function moreEnemies(sprite) {

  for(let j=0; j<3; j++){
    let enemy = createSprite(random(0, width), random(0, height), 10, 10);
    enemy.shapeColor = color(50, 60, 255)
  }
}



//////////WHAT HAPPENS WHEN YOU COLLECT SOMETHING YOU DON'T WANT

function dontCollect(collector, collected) {
  collected.remove();
  collector.scale -= .15;

  // moreEnemies(enemies);
  // collected.add();
  score -= 1;

///////if stretchy scale becomes less than -0.05000000000000007, remove it and pop up with "GAME OVER"
}


//////////WHAT HAPPENS WHEN YOU COLLECT SOMETHING YOU WANT
function collect(collector, collected) {
  //collector is another name for stretchy
  //collected is the sprite in the group collectibles that triggered
  //the event
      collected.remove();
      score+= 3
  if (collector.scale < 1) {
    collector.scale += .15;

  }
}

//////////FALLING BLUE RAIN
function fallingRain(sprite) {
  for (var i = 0; i < sprite.length; i++) {
   sprite[i].position.y += sprite[i].width * 0.15;
   if (sprite[i].position.y > width) {
     sprite[i].position.y = 0;
   }
 }
}

//////////SETTING UP THE KEY COMMANDS: UP, DOWN, LEFT, RIGHT, SPACE FOR FULL STOP
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    stretchy.setSpeed(3, 0);
    // stretchy.velocity.x = (stretchy.position.x)/10;
  }
  else if (keyCode == DOWN_ARROW) {
    stretchy.setSpeed(3, 90);

    // stretchy.velocity.y = (stretchy.position.y)/10;
  }
  else if (keyCode == LEFT_ARROW) {
    stretchy.setSpeed(3, 180);
    // stretchy.velocity.x = (stretchy.position.x)/10;
  }
  else if (keyCode == UP_ARROW) {
    stretchy.setSpeed(3, 270);
    // stretchy.velocity.y = (stretchy.position.y)/10;
  }
  else if (key == ' ') {
    stretchy.setSpeed(0, 0);
  }
  return false;
}





















// let newEnemies;
// newEnemies = new Group();
// // enemy.addToGroup(enemies);
// newEnemies.add(enemy)
// stretchy.overlap(newEnemies, dontCollect)



// walls = new Group();
//
// for (var i = 0; i < 20; i++) {
//   var w = createSprite(
//     random(125, width-125), (height/5)*i,
//     random(10, 100), random(10, 100));
//   w.shapeColor = color(0);
//   walls.add(w);
// }
