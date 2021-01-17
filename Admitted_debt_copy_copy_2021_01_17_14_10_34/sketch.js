var monkey, monkeyImg;
var bananaG, bananaImg;
var stoneG, stoneImg;
var backgr;
var ground,iground;

function preload(){
  monkeyImg= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png");
  
  bananaImg = loadImage("banana.png");
  stoneImg = loadImage("stone.png");
  
  backgr = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(400, 400);
  iground=createSprite(200,320,400,5);
  iground.visible=false
  ground = createSprite(0,0);
  ground.addImage(backgr);
  ground.scale=0.9;
  
  monkey = createSprite(80,300);
  monkey.addAnimation("monkey",monkeyImg);
  monkey.scale=0.1;
  
}

function draw() {
  background(255);
  
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  ground.velocityX=-2;
  
  if(ground.x<0){
    ground.x =ground.width/2
  }
 monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(iground)
  
  stone()
  banana()
  
  
  drawSprites();
}
function banana(){
  if(frameCount%80===0){
    var food=createSprite(400,random(25,200))
 food.addImage("Banana",bananaImg);
 food.velocityX=-4;
 food.scale=0.05
 
    
  }

}
function stone(){
  if(frameCount%80===0){
    var rock=createSprite(400,360)
 rock.addImage("Stone",stoneImg);
 rock.velocityX=-4;
 rock.scale=0.1
 
    
  }

}




