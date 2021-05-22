class GameController {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Estado del juego
    this.gameState = 0;
    this.img = loadImage("src/assets/sprites/ship.png")
  }

  draw() {
    push();
    fill(255)
    textAlign(CENTER)
    textSize(20);
    text(this.textByState(this.gameState), this.x, this.y);
    pop();
    fill(255)
    textSize(20);
    text("Score: ",20,780);
    fill(255)
    textSize(20);
    text("Lives: ",420,780);
    
    image(this.img, 480, 760, 30, 30);
    image(this.img, 520, 760, 30, 30);

  }

  textByState(state) {
    switch (state) {
      case 0:
        return "Moverse: (Flechas) Disparar: (Espacio)";
      case 1:
        return "Pausa (Enter)";
      case 2:
        return "Continuar (Enter)";
      default:
        return "Easter Egg (?)";
    }
  }


  changeGameState() {
      if (this.gameState === 1) this.gameState = 2;
      else if (this.gameState === 2) this.gameState = 1;
  }
}

const InstructionsFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
