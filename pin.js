class Box   {
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      this.image = loadImage("pin.png");
      this.Visiblity = 255;
    }
  
   display(){
     console.log(this.body.speed);
     if(this.body.speed < 3){
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    calculateScore(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };