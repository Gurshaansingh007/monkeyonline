 
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400)
  
 
  
  
   monkey= createSprite(50,360,20,50);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  
   //ground= createSprite(300,170,20,600);

  FoodGroup=createGroup();
  obstaclesGroup = createGroup();
  
   
  ground = createSprite(200,380,600,20);
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,390,600,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(225);
  
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 400){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  //spawn the banana
  spawnbanana();
  //spawnCactus();
  
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the banana
  if (frameCount % 120 === 0) {
    banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(80,100))
    banana.scale = 0.07;
    banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
    banana.lifetime = -1
    
    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    }
}

function spawnObstacle() {
  //write code here to spawn the banana
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,170,40,10);
      obstacle.addImage(obstacleImage)
    obstacle.scale = 2;
    obstacle.velocityX = -4;
    
    //assigning lifetime to the variable
    obstacle.lifetime = 150
    
           
 }
}