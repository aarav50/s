class Slingshot {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.01,
            length: 10
        }

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display() {
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        strokeWeight(10);
        line(posA.x, posA.y, posB.x, posB.y);
    }
}