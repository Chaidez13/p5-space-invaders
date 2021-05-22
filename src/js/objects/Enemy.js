class Enemy {
  constructor(coords, gs) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = ENEMY.width;
    this.height = ENEMY.height;
    //Imagen
    this.img = loadImage("src/assets/sprites/enemy.png");
    //Velocidad
    this.speed = 8;
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 4, this.y + 2),
      HitboxFactory.squareDims(ENEMY.hitboxWidth, ENEMY.hitboxHeight)
    );
  }

  draw(direction) {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move(direction);
    //this.hb.draw()
  }

  move(direction) {
    this.x += this.speed * direction;
    this.hb.x += this.speed * direction;
  }

  downShip(down) {
    this.y += down;
    this.hb.y = this.y + 2;
  }
}

const EnemyFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
