class Bob {
    constructor(x, y, r) {
        var options = {
            "isStatic": false,
            "restitution": 1,
            "friction": 0,
            "frictionAir":0.0,
            "slop":1,
            "density": 1,
            "inertia": Infinity
        }
        this.body = Bodies.circle(x, y, r / 2, options)
        World.add(world, this.body);
    }

    display() {
        push()
        translate(this.body.position.x, this.body.position.y);
        fill(255,0,255);
        ellipse(0, 0, this.r, this.r)
        pop()
    }
}