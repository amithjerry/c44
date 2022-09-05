var bg, bg_image;
var mario, mario_running;
var invisible_ground;
var coinsGroup, coin_img,coin;
var rocksGroup, rock1, rock2, rock3, rock4;
var shell;
var coins;
var b1,b2,b3,b4;

function preload() {
  bg_image = loadImage("background.png");
  mario_running = loadAnimation("m1.png", "m2.png", "m3.png", "m4.png", "m5.png", "m6.png", "m7.png", "m8.png");

  coin_img = loadImage("coin.png");
  rock1 = loadImage("rock1.png");
  rock2 = loadImage("rock2.png");
  rock3 = loadImage("rock3.png");
  rock4 = loadImage("rock4.png");
  shell = loadImage("shell.png");


}
function setup() {
  createCanvas(1200, 600);

  bg = createSprite(0, 0, 1200, 600);
  bg.addImage(bg_image);
  bg.velocityX = -8;

  //bg image 1800*1200

  mario = createSprite(75, 390, 15, 300);
  mario.addAnimation("running", mario_running);

  mario.scale = 0.5;
  invisible_ground = createSprite(15, 435, 2369, 2);

  invisible_ground.visible = false;

  b1 = createSprite(15,600, 2409,50);
  b2 = createSprite(600, 3, 2409 , 10);
  b3 = createSprite(5, 300 , 10 , 675);
  b4 = createSprite(1200 , 300 ,14,1463);
  rocksGroup = createGroup();
  coinsGroup = createGroup();

  coins = 0;
}
function draw() {
  


  mario.collide(invisible_ground);
  if (keyDown("SPACE")) {
    mario.velocityY = -10;
  }
  /*if (keyDown("RIGHT_ARROW")) {
    mario.velocityX = +6;
  }
  if (keyDown("LEFT_ARROW")) {
    mario.velocityX =-6;
  }*/
  if(bg.x < 0){
  bg.x = bg.width/2;

  }
  if(invisible_ground.x < 0){
invisible_ground.x = invisible_ground.width/2;

  }
  mario.velocityY = mario.velocityY + 2;

  fill("red");
  text("Coins :"+coins,300,350);

  spawnCoins();

  drawSprites();
}
function spawnCoins(){
  if (frameCount % 110 === 0) {
    coin = createSprite(600,400,40,10);
   coin.y = Math.round(random(110,180));
   coin.addImage(coin_img);
   coin.scale = 0.35;
   coin.velocityX = -3;
   
    
   coin.lifetime = 134;
   
   //adjust the depth
   coin.depth = mario.depth;
   mario.depth = mario.depth + 1;
   
   //adding cloud to the group
  coinsGroup.add(coin);
   }
}


function spawnRocks(){



}