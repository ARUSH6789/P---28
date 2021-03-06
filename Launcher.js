class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    Launch(bodyA){
        this.launcher.bodyA = bodyA ;
    }

    display(){
        if(this.launcher.bodyA!==null){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }

}

