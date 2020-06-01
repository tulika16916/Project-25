var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,dustbin,groun,b1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(600,640);
	ground= new Ground(400,680,800,50)
	b1= new Paper(300,200,70)
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(165,212,144);
   
  dustbin.display();
  ground.display();
  b1.display();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(b1.body,b1.body.position,{x:85,y:-85});
	}

}



