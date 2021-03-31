class Particle{
    constructor(x,y,r){
        var options = {
            restitution: 0.4,
            
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        colorMode(HSB);
        noStroke();
        translate(pos.x,pos.y);
       
        fill(this.color);
        ellipseMoe(RADIUS);
        ellipse(0,0,this.radius*2);
        pop();
    }
}