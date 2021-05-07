
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	b1=new ball(0,10)
	b2=new ball(310,10)
	b3=new ball(620,10)
	roof1=new roof()
	
	rope1=new rope(b1.b,roof1.r1,0)
	rope2=new rope(b2.b,roof1.r1,20)
	rope3=new rope(b3.b,roof1.r1,40)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  b1.display()
  roof1.display()
  rope2.display()
  b2.display()
  rope1.display()
  rope3.display()
  b3.display()
  drawSprites();
 
}



