class rope{
    constructor(b1,b2,p){
        var r={bodyA:b1,bodyB:b2,length:125,stiffness:0.3}
        this.p=p
        this.ro=Matter.Constraint.create(r)
        World.add(world,this.ro)
    }
    display(){
        line(this.ro.bodyA.position.x,this.ro.bodyA.position.y,this.ro.bodyB.position.x+this.p,this.ro.bodyB.position.y)
    }
}