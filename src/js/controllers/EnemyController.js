class EnemyController {
  constructor(enemies, player, bullet, enemyBullet, gs) {
    this.enemies = enemies;
    this.player = player;
    this.gs = gs;
    this.bullet = bullet;
    this.enemyBullet = enemyBullet;

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
        this.gs.lose();
      }
      if (this.bullet.hasShot) this.bulletReachEnemy();
      this.enemyShot();
    }
  }

  enemyShot() {
    if (!this.enemyBullet.hasShot) {
      var i = Math.floor(Math.random() * 100) + 1;
      if (i === 35) {
        //console.log("A");
        var enemy = this.enemies[Math.floor(Math.random() * this.enemies.length)];
        this.enemyBullet.shot(
          enemy.x + ENEMY.width / 2,
          enemy.y + ENEMY.height
        );
      }
    } 
  }

  enemyReachEdge() {
    for (const enemy of this.enemies)
      if (enemy.hb.x > BOARD.width - 50 || enemy.hb.x < 10) return true;
    return false;
  }

  enemyReachPlayer() {
    for (const enemy of this.enemies)
      if (enemy.hb.squareWasHitSquare(this.player.hb)) return true;
    return false;
  }

  resetEnemies() {
    for (const enemy of this.enemies) enemy.reset();
  }

  bulletReachEnemy() {
    this.enemies.forEach((enemy, index) => {
      if (enemy.hb.squareWasHitSquare(this.bullet.hb)) {
        this.gs.points += Math.floor((BOARD.height - enemy.y) / 10);
        this.bullet.reset();
        var i = this.enemies.indexOf(enemy);
        if (i !== -1) {
          this.enemies.splice(index, 1);
        }
        if (this.enemies.length === 0) {
          gs.win();
        }
      }
    });
  }
}
