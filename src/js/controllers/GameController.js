class GameController {
  constructor(instCoords, interCoords, points = 0, lives = 2) {
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
  }

  draw() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(this.textByState(this.gameState), this.x, this.y);
    text(`Score: ${this.points}`, this.ix, this.iy);
    text("Health: ", this.ix + BOARD.width - 180, this.iy);
    pop();
    for (let i = 0; i < this.lives; i++) {
      image(
        this.lifeImg,
        this.ix + BOARD.width - 150 + i * (LIFES.size + 5),
        this.iy - LIFES.size + 5,
        LIFES.size,
        LIFES.size
      );
    }
    if(gs.lives <= 0){
      fill(255);
      textAlign(CENTER);
      textSize(50);
      text("GAME OVER",330,250)
    }
  }

  textByState(state) {
    switch (state) {
      case 0:
        return "Moverse: (Flechas) Disparar: (Espacio)";
      case 1:
        return "Continuar (Enter)";
      case 2:
        return "Pausa (Enter)";
      default:
        return "Easter Egg (?)";
    }
  }

  changeGameState() {
    if (this.gameState === 1) this.gameState = 2;
    else if (this.gameState === 2) this.gameState = 1;
  }
}

const InterfaceFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
