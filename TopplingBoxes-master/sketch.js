const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log,box3,box4,pig2,log2,box5,log3,bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1140,550,70,70);
    box2 = new Box(900,550,70,70);
    ground = new Ground(200,height,120000,20)
    pig = new Pig(1020, 550)
    log = new Log(1020, 450, 300, PI/2)
    box3 = new Box(1140, 400, 70, 70)
    box4= new Box(900, 400, 70,70)
    pig2 = new Pig(1020, 400)
    log2 = new Log(1020, 300, 300, PI/2)
    box5= new Box(1010, 250, 70, 70)
    log3 = new Log(960, 230, 150, PI/7 )
    log4 = new Log(1090, 230, 150, -PI/7 )
    bird = new Bird(300, 300)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig.display()
    log.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()
}