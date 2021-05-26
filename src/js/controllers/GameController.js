class GameController {
  constructor(instCoords, interCoords, enemies, player, points = 0, lives = 2) {
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
    //Enemigos
    this.enemies = enemies;
    //Jugador
    this.player = player;
  }

  draw() {
    fill(255);
    push();
    textAlign(CENTER);
    text(this.textByState(this.gameState), this.x, this.y);
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
      textSize(50);
      textAlign(CENTER);
      text("GAME OVER", BOARD.width / 2, 250);
      pop();
    }
    if (this.gameState === -2) {
      push();
      textSize(50);
      textAlign(CENTER);
      text("YOU WIN", BOARD.width / 2, 250);
      pop();
    }
    
    this.win();
    
  }

  textByState(state) {
    switch (state) {
      case -2:
        return "Reiniciar (Enter)";
      case -1:
        return "Reiniciar (Enter)";
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
    else if (this.gameState === -1) this.reset();
    else if (this.gameState === -2); this.reset();
    
  }

  win(){
    if(enemies.length==0){
      this.gameState=-2;  
    }
  }

  

  reset() {
    this.points = 0;
    this.lives = 2;
    this.gameState = 0;
    this.player.handleX(BOARD.width / 2 - PLAYER.width / 2);
    this.enemies = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        this.enemies.push(
          new Enemy(
            EnemyFactory.coords((BOARD.width / 15) * (j + 1), i * 45 + 100)
          )
        );
      }
    }
  }

  lose() {
    this.lives = 0;
    this.gameState = -1;
  }
}

const InterfaceFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
