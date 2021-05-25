class Bullet {
  constructor(bulletSpeed, gs) {
    //Coordenadas
    this.x = 0;
    this.y = -20;
    //Dimensiones
    this.width = BULLET.width;
    this.height = BULLET.height;
    //Imagen
    this.img = loadImage("src/assets/sprites/bala.png");
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x, this.y),
      HitboxFactory.squareDims(BULLET.width, BULLET.height)
    );
    //Auxiliares
    this.bulletSpeed = bulletSpeed;
    this.hasShot = false;
    this.gs = gs;
  }

  shot(x, y) {
    if (this.hasShot === false) {
      this.hasShot = true;
      this.handleX(x);
      this.handleY(y);
    }
  }

  draw() {
    if (this.hasShot) {
      image(this.img, this.x, this.y, this.width, this.height);
      //this.hb.draw();
      if (this.gs.gameState > 1) this.handleY(this.y - this.bulletSpeed);
      if (this.y > BOARD.height || this.y < 0) this.hasShot = false;
    }
  }

  reset() {
    this.hasShot = false;
    this.handleY(-20);
  }

  handleX(value) {
    this.x = value;
    this.hb.x = value;
  }
  handleY(value) {
    this.y = value;
    this.hb.y = value;
  }
}

const BulletFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
