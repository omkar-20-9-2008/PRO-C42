class Drops{
    constructor(x,y){
        var options ={
            restitution: 0.01,
            friction: 0.0000000000000000001
        }
        this.drops = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(world,this.drops);
    }

    update(){
        if(this.drops.position.y >= 650){
            Matter.Body.setPosition(this.drops, {x: random(0,400), y:random(-10,0)})
        }
    }

    display(){
        var pos = this.drops.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r);

    }
}