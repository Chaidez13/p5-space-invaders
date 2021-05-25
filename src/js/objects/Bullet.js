var seVe = new Boolean ();

class Bullet {
  constructor(x,y) {
    //Coordenadas
    this.x=x;
    this.y=y;
    this.img = loadImage("src/assets/sprites/bala.png");
    this.width = 10;
    this.height = 10;
  }

 
  
  
  show(pos){
    seVe=true;
    if(seVe==false){
      console.log('tttt');
      this.x=height/2;
      this.y=900;
    }
    if(this.y<0){
      console.log("mmm");
      seVe=false;
    }
  }

  move(){
   
  }

  draw(){
    let posX= player.x
    if(seVe){
      image(this.img,posX, this.y, this.width, this.height);
      this.y = this.y -1;
    }
    
  }

  

  
}

const BulletFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};


