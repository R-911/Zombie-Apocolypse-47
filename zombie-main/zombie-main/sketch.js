var Gamestate = "load";
var player;
var selection = 3;
var bullet;
var tempPos = 0;
var flag1 = 0
var flag2 = 0
var flag3 =   0
var endScreen;
function preload(){   
  loadingScreen = loadImage("Images/Loading screen.png");
  lobbyScreen = loadImage("Images/Lobby screen.png");
  player1 = loadImage("Images/Blonde Girl character.png");
  player2 = loadImage("Images/big guy.png");
  player3 = loadImage("Images/oraneg tshirt.png");
  player4 = loadImage("Images/Tattoo man character.png");
  Bg = loadImage("Images/Battlefield.jpg")
  zombie1 = loadImage("Images/Zombie 1.png")
  zombie2 = loadImage("Images/Zombie 2.png")
  zombie3 = loadImage("Images/Zombie 3.png")
  bulletimg = loadImage("Images/Bullet.png")
  endScreen = loadImage("Images/End win screen.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight-145);
  bullet = createSprite(700, 300)
  bullet.addImage(bulletimg)
  bullet.scale = 0.05
  bullet.visible = false
  zombie11 = createSprite(100, 100)
  zombie22 = createSprite(100, 400)
  zombie33 = createSprite(400, 100)
  zombie11.addImage(zombie1)
  zombie22.addImage(zombie2)
  zombie33.addImage(zombie3)
  zombie11.visible = false
  zombie22.visible = false
  zombie33.visible = false
    console.log("height" + displayHeight)
    console.log("width" + displayWidth)
}

function draw() {
  
  if (Gamestate == "load"){
    background(loadingScreen);
    gsLoad();
  }else if(Gamestate == "lobby"){
    background(lobbyScreen);
    if(keyDown("1")){
      selection = 1
    }
    if(keyDown("2")){
      selection = 2
    }
    if(keyDown("3")){
      selection = 3
    }
    if(keyDown("4")){
      selection = 4
    }

    if(selection == 1){
      fill("red")
      circle(125, 415, 50)
      player = createSprite(1200, 500);
      player.addImage(player1)
      player.visible = false;
      player.rotateToDirection = true;
      player.rotation = -55
    }
    if(selection == 2){
      fill("red")
      circle(485, 415, 50)
      player = createSprite(1200, 500);
      player.addImage(player2)
      player.visible = false;
      player.rotateToDirection = true;
      player.rotation = -55
    }
    if(selection == 3){
      fill("red")
      circle(875, 415, 50)
      player = createSprite(1200, 500);
      player.addImage(player3)
      player.visible = false;
      player.rotateToDirection = true;
      player.rotation = -55
    }
    if(selection == 4){
      fill("red")
      circle(1240, 415, 50)
      player = createSprite(1200, 500);
      player.addImage(player4)
      player.visible = false;
      player.rotateToDirection = true;
      player.rotation = -55
    }
    if(keyDown("p")){
      Gamestate = "battle";
    }
  }else if(Gamestate == "battle"){
    background(Bg);
    player.visible = true
    zombie11.visible = true
    zombie22.visible = true
    zombie33.visible = true
    zombie11.rotateToDirection = true
    bulletimg.visible = false
   // tempPos = player.getDirection()
   
    zombie11.pointTo(player.x,player.y)
    
   // zombie11.rotation = player.rotation
    zombie22.rotateToDirection = true
   // zombie22.rotation = - 55
   zombie22.pointTo(player.x,player.y)
    zombie33.rotateToDirection = true
   // zombie33.rotation = -55
   zombie33.pointTo(player.x,player.y)


    if(keyDown("w")|| keyDown(UP_ARROW)){
      player.y = player.y - 5
      player.rotation = 0

      zombie11.rotation = zombie11.rotation - 90
      zombie22.rotation = zombie22.rotation - 90
      zombie33.rotation = zombie33.rotation - 90

      //zombie11.velocityX=2
      //zombie11.velocityY=2




    }
    if(keyDown("a")|| keyDown(LEFT_ARROW)){
      player.x = player.x - 5
      player.rotation = -90

      zombie11.rotation = zombie11.rotation - 90
      zombie22.rotation = zombie22.rotation - 90
      zombie33.rotation = zombie33.rotation - 90

      //zombie11.velocityX=2
      //zombie11.velocityY=2

      
    }
    if(keyDown("s")|| keyDown(DOWN_ARROW)){
      player.y = player.y + 5
      player.rotation = 180
      zombie11.rotation = zombie11.rotation - 90
      zombie22.rotation = zombie22.rotation - 90
      zombie33.rotation = zombie33.rotation - 90

      //zombie11.velocityX=2
      //zombie11.velocityY=2

    }
    if(keyDown("d")|| keyDown(RIGHT_ARROW)){
      player.x = player.x + 5
      player.rotation = 90
      
      zombie11.rotation = zombie11.rotation - 90
      zombie22.rotation = zombie22.rotation - 90
      zombie33.rotation = zombie33.rotation - 90

      //zombie11.velocityX=2
      //zombie11.velocityY=2

    }
    if(keyDown("space")){
      bullet.visible = true 
      bullet.x = player.x
      bullet.y = player .y
      bullet.velocityX = 10
      bullet.rotateToDirection = true
    bullet.rotation = player.rotation -90
    }
    if(bullet.isTouching(zombie22)){
      zombie22.x = random(50, 1300)
      zombie22.y = random(50, 650)
      bullet.x = player.x
      bullet.y = player.y
      bullet.velocityX = 0
      bullet.visible = false
      flag2++
      if(flag2 == 3){
        zombie22.destroy()
      } 
    }
    if(bullet.isTouching(zombie33)){
      zombie33.x = random(50, 1300)
      zombie33.y = random(50, 650)
      bullet.x = player.x
      bullet.y = player.y
      bullet.velocityX = 0
      bullet.visible = false
      flag3++
      if(flag3 == 3){
        zombie33.destroy()
      }
    }
    if(bullet.isTouching(zombie11)){
      zombie11.x = random(50, 1300)
      zombie11.y = random(50, 650)
      bullet.x = player.x
      bullet.y = player.y
      bullet.velocityX = 0
      bullet.visible = false
      flag1++
      if(flag1 == 3){
        zombie11.destroy()
      }
    }
    if(flag1 == 3 && flag2 == 3 && flag3 == 3){
      background(endScreen);
      player.visible= false;
    }
    
  }
  
  else{
    background(255,255,255);
  }

  
  drawSprites();
}

function gsLoad(){
  if(keyDown("s")){
    Gamestate = "lobby"
  }
  
}
