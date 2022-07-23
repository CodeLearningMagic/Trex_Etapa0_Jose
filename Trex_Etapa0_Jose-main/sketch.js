
var trex, trex_img
var ground, ground_img;
;
function preload() {
  
  trex_img = loadImage("trex.png");
  ground_img = loadImage("goundedy.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex = createSprite(30, 155, 20, 20);
  trex.addImage(trex_img);
  trex.scale=0.8

  ground = createSprite(400, 190, 600, 10);
  ground.addImage(ground_img);
 
}

function draw(){
  background("white")

  drawSprites();
  

}
