class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("sprites/mango.png");
        
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);    
      
      imageMode(CENTER);
      image(this.image, 0, 0, 60, 60);
      pop();
    }
  }