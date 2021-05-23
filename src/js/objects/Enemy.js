class Enemy {
  constructor(coords, speed = 8) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    this.xO = this.x;
    this.yO = this.y;
    //Dimensiones
    this.width = ENEMY.width;
    this.height = ENEMY.height;
    //Imagen
    this.img = loadImage("src/assets/sprites/enemy.png");
    //Velocidad
    this.speed = speed;
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 4, this.y + 2),
      HitboxFactory.squareDims(ENEMY.hitboxWidth, ENEMY.hitboxHeight)
    );
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    this.x += this.speed * direction;
    this.hb.x += this.speed * direction;
  }

  downShip(down) {
    this.y += down;
    this.hb.y = this.y + 2;
  }

  reset() {
    this.x = this.xO;
    this.y = this.yO;
    this.hb.x = this.x + 4;
    this.hb.y = this.y + 2;
  }
}

const EnemyFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
