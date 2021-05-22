class EnemyController {
  constructor(enemies, player, gs) {
    this.enemies = enemies;
    this.player = player;
    //Estado del juego
    this.gs = gs;

    this.direction = 1;
    this.down = 3;
  }

  moveEnemies() {
    if (this.gs.gameState !== 2) {
      for (const enemy of enemies) {
        enemy.draw(this.direction, this.down);
      }
      if (this.enemyReachEdge()) {
        this.direction *= -1;
        for (const enemy of enemies)
          enemy.downShip(this.down)
      }
      if (this.enemyReachPlayer()) {
        //Condición de perder
        console.log("Game Over");
      }
    }
  }

  enemyReachEdge() {
    for (const enemy of enemies)
      if (enemy.hb.x > BOARD.width - 50 || enemy.hb.x < 10) return true;
    return false;
  }

  enemyReachPlayer() {
    for (const enemy of enemies) {
      //console.log(enemy.hb);
      if (enemy.hb.squareWasHitSquare(this.player.hb)) return true;
      //noLoop();
    }
    return false;
  }
}
