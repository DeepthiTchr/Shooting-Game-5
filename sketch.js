var bg1;
var Shooter,shooter;
var Gun,gun;
var Monster,monster;
var score = 0;


function preload(){
  bg1 = loadImage("bg1.png");
  Shooter = loadImage("Shooter.png");
  Gun = loadImage("Gun.png");
  Monster = loadImage("Monster.png");
  
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  shooter = createSprite(100,height/2,50,50);
  shooter.addImage(Shooter);
  
  
  gun = createSprite(width/2,height/2,50,50);
  gun.addImage(Gun);
  gun.scale = 0.1;
  
  monster = createSprite(width-100,height/2,50,50);
  monster.addImage(Monster);
  monster.scale = 0.3;
  
}

function draw(){
  background(bg1);
  
  textSize(20);
  fill("red");
  text("Score "+score, 180, 40);
  
  gun.x = shooter.x + 41
  gun.y = shooter.y + 5
  
  if (keyDown("UP_ARROW")) {
    
    shooter.velocityY = -3;
 }
  
  if (keyDown("DOWN_ARROW")) {
    
    shooter.velocityY = 3;
 }
  
  
  
  drawSprites()
  
}