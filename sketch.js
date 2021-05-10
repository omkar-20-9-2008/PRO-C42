const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var drops,drop;
var engine, world;
var rand;

var maxDrops=10;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    var canvas = createCanvas(400,650)
    engine = Engine.create();
    world = engine.world;


    umbrella = new Umbrella(200,500);

    //create drops
    
    drops1 = []

    if(frameCount%1===0){
        for(var i = 0; i<maxDrops; i++){
          drops1.push(new Drops(random(0,50),random(0,400)));
        }
    }
        drops2 = []

    if(frameCount%2===0){
        for(var i = 0; i<maxDrops; i++){
          drops2.push(new Drops(random(50,100),random(0,400)));
        }
    }
        drops3 = []

    if(frameCount%5===0){
        for(var i = 0; i<maxDrops; i++){
          drops3.push(new Drops(random(100,150),random(0,400)));
        }
    }
        drops4 = []

    if(frameCount%1===0){
        for(var i = 0; i<maxDrops; i++){
          drops4.push(new Drops(random(150,200),random(0,400)));
        }
    }
        drops5 = []

    if(frameCount%2===0){
        for(var i = 0; i<maxDrops; i++){
          drops5.push(new Drops(random(200,250),random(0,400)));
        }
    }
        drops6 = []

    if(frameCount%5===0){
        for(var i = 0; i<maxDrops; i++){
          drops6.push(new Drops(random(250,300),random(0,400)));
        }
    }
    drops7 = []

    if(frameCount%1===0){
        for(var i = 0; i<maxDrops; i++){
          drops7.push(new Drops(random(300,350),random(0,400)));
        }
    }
            drops8 = []

    if(frameCount%2===0){
        for(var i = 0; i<maxDrops; i++){
          drops8.push(new Drops(random(350,400),random(0,400)));
        }0
    }

    
      }

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops1[i].update();
        drops1[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops2[i].update();
        drops2[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops3[i].update();
        drops3[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops4[i].update();
        drops4[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops5[i].update();
        drops5[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops6[i].update();
        drops6[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops7[i].update();
        drops7[i].display();
    }
    for(var i = 0; i<maxDrops; i++){
        drops8[i].update();
        drops8[i].display();
    }
    


    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }



    drawSprites();
}   

