const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var boy;
var boy_jumping;
var snows=[];


function preload(){

  backgroundImg = loadImage("snow2.jpg");
  boy_jumping=loadAnimation("boy-removebg-preview.png","boy3-removebg-preview.png")
}


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  boy=createSprite(850,450,50,50)
  boy.addAnimation("jumping",boy_jumping)
  boy.scale=1

}

function draw() {
  background(backgroundImg);
  drawSprites();
  Engine.update(engine);

  boy.display();

  if(frameCount %40 === 0){
    snows.push(new snow(random(30,1100),50,50))
    
  }
  for (var h=0;h<snows.length;h++){
   snows[h].display();
  
 } 
}