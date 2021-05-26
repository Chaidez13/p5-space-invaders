const messageStates = {
  "-2": "Continuar (Enter)",
  "-1": "Reiniciar (Enter)",
  0: "Moverse: (Flechas) Disparar: (Espacio)",
  1: "Reanudar (Enter)",
  2: "Pausa (Enter)",
};

class GameController {
  constructor(instCoords, interCoords, loseSound, points = 0, lives = 2) {
    //Coordenadas de las instrucciones
    this.x = instCoords.x;
    this.y = instCoords.y;
    //Coordenadas de la interfaz
    this.ix = interCoords.x;
    this.iy = interCoords.y;
    //Estado del juego
    this.gameState = 0;
    //Imagen para las vidas
    this.lifeImg = loadImage("src/assets/sprites/ship.png");
    //Vidas
    this.lives = lives;
    //Puntos
    this.points = points;
    //Sonidos
    this.loseSound = loseSound;
  }

  draw() {
    fill(255);
    push();
    textAlign(CENTER);
    text(messageStates[this.gameState], this.x, this.y);
    pop();
    textSize(20);
    text(`Score: ${this.points}`, this.ix, this.iy);
    text("Health: ", this.ix + BOARD.width - 220, this.iy);
    for (let i = 0; i < this.lives; i++) {
      image(
        this.lifeImg,
        this.ix + BOARD.width - 150 + i * (LIFES.size + 5),
        this.iy - LIFES.size + 5,
        LIFES.size,
        LIFES.size
      );
    }
    if (this.gameState === -1) {
      push();
      textAlign(CENTER);
      push();
      textSize(50);
      text("GAME OVER", BOARD.width / 2, 80);
      pop();
      text(`Score: ${this.points}`, BOARD.width / 2, 120);
      pop();
    }
    if (this.gameState === -2) {
      push();
      textSize(50);
      textAlign(CENTER);
      text("YOU WIN", BOARD.width / 2, 80);
      pop();
    }
  }

  changeGameState() {
    if (this.gameState === 1) this.gameState = 2;
    else if (this.gameState === 2) this.gameState = 1;
    else if (this.gameState === -1) this.reset(true);
    else if (this.gameState === -2) this.reset(false);
  }

  win() {
    this.gameState = -2;
  }

  lose() {
    this.loseSound.play();
    player.handleY(-50);
    this.lives = 0;
    this.gameState = -1;
  }

  reset(lose) {
    this.points = lose ? 0 : this.points;
    this.lives = lose ? 2 : this.lives;
    this.gameState = 0;
    player.handleX(BOARD.width / 2 - PLAYER.width / 2);
    player.handleY(BOARD.height - PLAYER.height - 50);
    es.resetEnemies()
  }
}

const InterfaceFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
