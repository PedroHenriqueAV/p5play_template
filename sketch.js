var box 

function setup() {
  createCanvas(400,400);
  box = createSprite (200, 200, 30, 30);
}

function draw() 
{

drawSprites();
if (keyIsDown(DOWN_ARROW)){
  background ("blue");
  box.shapeColor = "red";
}
if (keyIsDown(UP_ARROW)){
  background ("red");
  box.shapeColor = "blue";
}

if (keyIsDown(LEFT_ARROW)){
  background ("green");
  box.shapeColor = "yellow";
}

if (keyIsDown(RIGHT_ARROW)){
  background ("yellow");
  box.shapeColor = "green";
}

}