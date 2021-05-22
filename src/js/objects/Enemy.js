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
    this.speed = 3;
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 4, this.y + 2),
      HitboxFactory.squareDims(ENEMY.hitboxWidth, ENEMY.hitboxHeight)
    );
  }

  draw(direction, down) {
    image(this.img, this.x, this.y + down, this.width, this.height);
    this.move(direction);
  }

  move(direction) {
    this.x += this.speed * direction;
    this.hb.x += this.speed * direction;
  }
}

const EnemyFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
