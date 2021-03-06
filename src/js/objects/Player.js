class Player {
  constructor(coords, controllSettings, playerBullet, enemyBullet, sound, gs) {
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

    this.bullet = playerBullet;
    this.enemyBullet = enemyBullet;
    this.sound = sound;
    this.gs = gs;
  }

  shootBullet() {
    this.bullet.shot(this.x + PLAYER.width / 2, this.y);
  }

  moveLeft() {
    if (this.hb.x >= 10) {
      this.handleX(this.x - this.speed);
    }
  }

  moveRight() {
    if (this.hb.x <= BOARD.width - this.hb.width - 10) {
      this.handleX(this.x + this.speed);
    }
  }

  move() {
    if (this.gs.gameState >= 0) {
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
    if (this.enemyBullet.hasShot) this.bulletCollision();
    //this.hb.draw();
  }

  bulletCollision() {
    if (this.hb.squareWasHitSquare(this.enemyBullet.hb)) {
      this.enemyBullet.reset();
      if (this.gs.lives > 0) {
        this.sound.play();
        this.gs.lives--;
      } else {
        this.gs.lose();
      }
    }
  }

  handleX(value) {
    this.x = value;
    this.hb.x = value + 2;
  }
  handleY(value) {
    this.y = value;
    this.hb.y = value + 2;
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
