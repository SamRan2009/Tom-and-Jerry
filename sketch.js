var backgroungImage
var cat1
var cat2
var mouse1 ,mouse2, cat ,mouse
function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png")
    mouse1 = loadAnimation("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3 = loadAnimation("images/mouse4.png")
    cat1 = loadAnimation("images/cat1.png")
    cat2 = loadAnimation("images/cat2.png","images/cat3.png")
    cat3 = loadAnimation("images/cat4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catsleeping",cat1)
    cat.addAnimation("catrunning",cat2)
    cat.addAnimation("catcollide",cat3)
    cat.scale = 0.2


    mouse =  createSprite(200,600)
    mouse.addAnimation("mousestanding",mouse1)
    mouse.addAnimation("mouseteasing",mouse2)
    mouse.addAnimation("mousecollide",mouse3)
    mouse.scale = 0.15
    mouse.debug = true
    cat.debug = true
    mouse.setCollider("rectangle",0,0,200,mouse.height)
    cat.setCollider("rectangle",0,0,300,cat.height)


}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2+mouse.width/2){
        cat.velocityX = 0
        cat.changeAnimation("catcollide",cat3)
        cat.x = 300
        mouse.changeAnimation("mousecollide",mouse3)
        cat.scale = 0.2
        mouse.scale =0.15

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     
      mouse.changeAnimation("mouseteasing",mouse2)
    
      cat.changeAnimation("catrunning",cat2)
      cat.velocityX = -5
  }


}
