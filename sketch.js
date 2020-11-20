var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, bottom, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite=createSprite(400,640,200,20)
	bottomSprite.shapeColor=color("red");

	leftSprite=createSprite(500,600,20,100)
	leftSprite.shapeColor=color("red");

	rightSprite=createSprite(300,600,20,100)
	rightSprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottom = Bodies.rectangle(150,50,{isStatic:true} );
	 World.add(world, bottom);

	 left = Bodies.rectangle(20,20, {isStatic:true} );
	 World.add(world, left);

	 right = Bodies.rectangle(20,100, {isStatic:true} );
	 World.add(world, right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);

  }
}



