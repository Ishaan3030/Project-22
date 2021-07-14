const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var rope1;
var bob2;
var rope2;
var bob3;
var rope3;
var bob4;
var rope4;
var bob5;
var rope5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options={
		isStatic: true,
		restitution: 0.8
	  }

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(440,500,10,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(420,500,10,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,500,10,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(380,500,10,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(360,500,10,bob_options);
	World.add(world,bob5);

	rope1 = new rope(bob1,roof,-80,0);
	World.add(world, rope1);

	rope2 = new rope(bob2,roof,-80,0);
	World.add(world, rope2);

	rope3 = new rope(bob3,roof,-80,0);
	World.add(world, rope3);

	rope4 = new rope(bob4,roof,-80,0);
	World.add(world, rope4);

	rope5 = new rope(bob5,roof,-80,0);
	World.add(world, rope5);
  
}

function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);
  
  
  //call display() to show ropes here

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,10);
  ellipse(bob2.position.x,bob2.position,y,10);
  ellipse(bob3.position.x,bob3.position.y,10);
  ellipse(bob4.position.x,bob4.position,y,10);
  ellipse(bob5.position.x,bob5.position.y,10);

  line(bob1.position.x,roof.position.y,bob1.position.x, bob1.position.y);
  line(bob2.position.x,roof.position.y,bob2.position.x, bob2.position.y);
  line(bob3.position.x,roof.position.y,bob3.position.x, bob3.position.y);
  line(bob4.position.x,roof.position.y,bob4.position.x, bob4.position.y);
  line(bob5.position.x,roof.position.y,bob5.position.x, bob5.position.y);
 
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW){
	  Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
  }

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
