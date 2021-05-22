class EnemyController {
  constructor(enemies, gs) {
    this.enemies = enemies;
    //Estado del juego
    this.gs = gs;

    this.direction = 1;
    this.down = 1;
  }

  moveEnemies() {
    if (this.gs.gameState !== 2) {
      for (const enemy of enemies) {
        enemy.draw(this.direction, this.down);
      }
      if (this.enemyReachEdge()) {
        this.direction *= -1;
        this.down += 3;
      }
    }
  }

  enemyReachEdge() {
    for (const enemy of enemies)
      if (enemy.x > BOARD.width - 50 || enemy.x < 10) return true;
    return false;
  }
}
