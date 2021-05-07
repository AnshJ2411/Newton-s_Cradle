class ball{
    constructor(x,y){
        this.b=Bodies.circle(x,y,10)
        World.add(world,this.b)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.b.position.x,this.b.position.y,10)
    }
}