class roof{
    constructor(){
        var o={isStatic:true}
        this.r1=Bodies.rectangle(400,50,200,10,o)
        World.add(world,this.r1)
    }
    display(){
        rectMode(CENTER)
        rect(this.r1.position.x,this.r1.position.y,200,10)
    }
}