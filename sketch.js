
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bobObject1 = new Bob(200,480);
     bobObject2 = new Bob(300,480);
     bobObject3 = new Bob(400,480);
     bobObject4 = new Bob(500,480);
     bobObject5 = new Bob(600,480);
     roof1 = new Roof(450,20,700,30);
     rope1 =new Rope(bobObject1.body,{x:200,y:20});
     rope2 =new Rope(bobObject2.body,{x:300,y:20});
     rope3 =new Rope(bobObject3.body,{x:400,y:20});
     rope4 =new Rope(bobObject4.body,{x:500,y:20});
     rope5 =new Rope(bobObject5.body,{x:600,y:20});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-10,y:10});
  }

}

