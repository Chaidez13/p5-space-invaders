class Enemy {
  constructor(coords) {
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
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 4, this.y + 2),
      HitboxFactory.squareDims(ENEMY.hitboxWidth, ENEMY.hitboxHeight)
    );
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    //this.hb.draw();
  }

  move(direction, speed) {
    this.handleX(this.x + speed * direction)
  }

  downShip(down) {
    this.handleY(this.y + down)
  }

  reset() {
    this.handleX(this.xO)
    this.handleY(this.yO)
  }

  handleX(value) {
    this.x = value;
    this.hb.x = value + 4;
  }
  handleY(value) {
    this.y = value;
    this.hb.y = value + 2;
  }
}

const EnemyFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
