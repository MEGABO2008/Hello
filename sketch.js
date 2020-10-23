var car, wall;
var speed, weight;




function setup() {
  createCanvas(1600,800);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=50;

  wall=createSprite(1500,200,60,height/2);

 // speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);  
  car.collide(wall);

  wall.shapeColor = "red";
  car.shapeColor = "red";
//┏┛▌▀▐┗┓the best hello ┏┛▌▀▐┗┓
//┏┛▌▀▐┗┓
//┏┛▌▀▐┗┓
//🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️🛋️
// hello †Ħł∫ ÐŲÐξ
drawSprites();
}