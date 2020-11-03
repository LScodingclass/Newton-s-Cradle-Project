class Bob {
    constructor(x,y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.3,
      }
      this.body = Bodies.circle(x, y,radius-20/2, options);
      this.radius = radius; 
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      console.log(this.x);
      var angle =this.body.angle;
      push ();
      translate (pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };