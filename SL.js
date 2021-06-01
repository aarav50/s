class Sl {
    constructor(bodyA,bodyB){
        var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:100,
length:10
        }

        this.S=Constraint.create(options)
        World.add(world,this.S)

    }
    display(){
        var posA=this.S.bodyA.position
        var posB=this.S.bodyB.position
        strokeWeight(100)
line(posA.x,posA.y,posB.x,posB.y)
    }
}