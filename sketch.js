
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob6, bob5, roof;
var rope1, rope2, rope3, rope4, rope5, rope6
function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Bob(240, 450, 40);
	bob2 = new Bob(300, 450, 40);
	bob3 = new Bob(360, 450, 40);
	bob4 = new Bob(420, 450, 40);
	bob5 = new Bob(480, 450, 40);
	
	roof = new Roof(400, 50, 800, 50);
	
	rope1 = new Rope(bob1.body, roof.body, -140, 0);
	rope2 = new Rope(bob2.body, roof.body, -80, 0);
	rope3 = new Rope(bob3.body, roof.body, -20, 0);
	rope4 = new Rope(bob4.body, roof.body, 40, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);
	
	Engine.run(engine);

}


function draw() {

	rectMode(CENTER);
	background("gray");
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	keyPressed()

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -2, y: -2 });
	}
}
