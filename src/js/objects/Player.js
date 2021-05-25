class Player {
  constructor(coords, controllSettings, bullet, gs) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = PLAYER.width;
    this.height = PLAYER.height;
    //Imagen
    this.img = loadImage("src/assets/sprites/ship.png");
    //Velocidades
    this.speed = 6;
    //Controles
    this.controllSettings = controllSettings;
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 2, this.y + 2),
      HitboxFactory.squareDims(PLAYER.hitboxWidth, PLAYER.hitboxHeight)
    );

    this.bullet = bullet;
    this.gs = gs;
  }

  shootBullet(){
    bullet = new Bullet(this.x+player.width/2,this.y);
    console.log("fdfd");
    bullet.show();
    //bullet.draw(this.x);
  }

  if

  moveLeft() {
    if (this.hb.x >= 10) {
      this.x -= this.speed;
      this.hb.x -= this.speed;
    }
  }

  moveRight() {
    if (this.hb.x <= BOARD.width - this.hb.width - 10) {
      this.x += this.speed;
      this.hb.x += this.speed;
    }
  }

  move() {
    if (this.gs.gameState !== 1) {
      this.controllSettings.forEach((controll) => {
        if (keyIsDown(controll.key)) {
          this.gs.gameState = 2;
          this[controll.name]();
        }
      });
    }
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
    //this.hb.draw();
  }
}

const PlayerFactory = {
  coords: (x, y) => {
    return { x, y };
  },
  controllSettings: (moveRightKey, moveLeftKey, shootKey) => {
    return [
      {
        name: "moveRight",
        key: moveRightKey,
      },
      {
        name: "moveLeft",
        key: moveLeftKey,
      },
      {
        name: "shootBullet",
        key: shootKey,
      },
    ];
  },
};
