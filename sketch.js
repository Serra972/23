const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(200,390,400,53);
  box1 = new Box(40,200,30,310);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground1 = new Ground(200,390,400,53);
  box1 = new Box(40,200,30,310);

 
  drawSprites();
}