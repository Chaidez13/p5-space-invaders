class EnemyController {
  constructor(enemies, player, gs) {
    this.enemies = enemies;
    this.player = player;
    //Estado del juego
    this.gs = gs;

    this.direction = 1;
    this.down = 5;
  }

  moveEnemies() {
    for (const enemy of enemies) enemy.draw();
    if (this.gs.gameState > 1) {
      for (const enemy of enemies) enemy.move(this.direction);
      if (this.enemyReachEdge()) {
        this.direction *= -1;
        for (const enemy of enemies) enemy.downShip(this.down);
      }
      if (this.enemyReachPlayer()) {
        if (this.gs.lives == 0) {
          //GameOver
        } else {
          this.gs.lives--;
          this.resetEnemies();
        }
      }
    }
  }

  enemyReachEdge() {
    for (const enemy of enemies)
      if (enemy.hb.x > BOARD.width - 50 || enemy.hb.x < 10) return true;
    return false;
  }

  enemyReachPlayer() {
    for (const enemy of enemies)
      if (enemy.hb.squareWasHitSquare(this.player.hb)) return true;
    return false;
  }

  resetEnemies() {
    for (const enemy of enemies) enemy.reset();
  }
}
