var cat, catImg, catImg2, catImg3, catImg4;
var mouse, mouseImg, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;

state = "start";

function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg4 = loadAnimation("cat4.png");
    mouseImg = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg4 = loadAnimation("mouse4.png");
    gardenImg = loadImage("garden.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,610,20,20);
    cat.addAnimation("catSitting", catImg);
    cat.scale=0.1;
    //cat.addImage(catImg);

    mouse = createSprite(300,625,20,20);
    mouse.addAnimation("eating",mouseImg);
    mouse.scale=0.07
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(state==="play"){
      touching();
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyDown("left")) {
        state = "play";
        cat.velocityX=-2;
        
        cat.addAnimation("catWalking", catImg2);
        cat.changeAnimation("catWalking");
        cat.scale=0.15;

        mouse.addAnimation("laughing",mouseImg2);
        mouse.changeAnimation("laughing");
    }
}

function touching() {

    if(cat.x-mouse.x < mouse.width/2+cat.width/2) {
      cat.velocityX=0;
      cat.addAnimation("catTouched", catImg4);
      cat.changeAnimation("catTouched");
      cat.x=350;
      cat.y = 610;
      cat.scale=0.12;
      mouse.addAnimation("touched",mouseImg4);
      mouse.changeAnimation("touched");
    }
  
  }
