const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world
var bob1
var bob1Diameter
var chain1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400, 100, 500, 50)

	bob1 = new Bob(200,700,50)
	bob2 = new Bob(300,700,50)
	bob3 = new Bob(400,700,50)
	bob4 = new Bob(500,700,50)
	bob5 = new Bob(600,700,50)

	bob1Diameter = 40;

	chain1 = new Chain(bob1.body,roof.body, -bob1Diameter*2, 0);
	chain2 = new Chain(bob2.body, {x:300, y:100});
	chain3 = new Chain(bob3.body,{x:400, y:100});
	chain4 = new Chain(bob4.body, {x:500, y:100});
	chain5 = new Chain(bob5.body, {x:600, y:100});




	Engine.run(engine);
  
}


function draw() {
  background(200);
  Engine.update(engine);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY})

}
function mouseReleased(){
    chain1.fly();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position,{x:100, y:350});
	}
}



