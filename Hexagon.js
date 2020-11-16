class Hexagon {
    constructor(x,y,radius) {
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      pop();
    }
  };