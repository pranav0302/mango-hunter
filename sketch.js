
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,670,1200,60);
	tree = new Tree(900,450,40,300);
	stone = new Stone(150,540,30);

	catapult = new SlingShot(stone.body,{x:150, y:510});

	mango1 = new Mango(900,300,40);
	mango2 = new Mango(1000,200,40);
	mango3 = new Mango(850,250,40);
	mango4 = new Mango(1100,320,40);
	mango5 = new Mango(875,140,40);
	mango6 = new Mango(750,250,40);


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(135, 203, 248);
  
 ground.display();
 tree.display();
 catapult.display();
stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();


 detectCollission(stone,mango1);
 detectCollission(stone,mango2);
 detectCollission(stone,mango3);
 detectCollission(stone,mango4);
 detectCollission(stone,mango5);
 detectCollission(stone,mango6);
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}

function detectCollission(stones,mangoes){
	mangoPosition = mangoes.body.position;
	stonePosition = stones.body.position;

	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

	if(distance <= mangoes.radius + stones.radius){
		Matter.Body.setStatic(mangoes.body,false);
	}

}

function  keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150 , y:540})
		catapult.attach(stone.body);
	}
}
