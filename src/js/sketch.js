let bg;
let cnv;
//Objetos
let enemies = [];
let player;
let points;
let playerBullet;
let enemyBullet;
let gs;
let es;
//Sonidos
let bgSound;
let shotS;
let hitS;
let loseS;

let kenvectorFont;

function preload() {
  soundFormats("wav");
  bgSound = loadSound("src/assets/sounds/backgroundMusic.mp3");
  shotS = loadSound("src/assets/sounds/shot");
  hitS = loadSound("src/assets/sounds/hit");
  loseS = loadSound("src/assets/sounds/lose");
  kenvectorFont = loadFont("src/assets/fonts/kenvector_future_thin.ttf");
}

function setup() {
  bg = loadImage("src/assets/sprites/space.jpg");
  frameRate(60);
  //Inicialización de los objetos
  gs = new GameController(
    InterfaceFactory.coords(BOARD.width / 2, 25),
    InterfaceFactory.coords(40, BOARD.height - 15),
    loseS
  );
  playerBullet = new Bullet(10, shotS, gs);
  enemyBullet = new Bullet(-7, shotS, gs);
  player = new Player(
    PlayerFactory.coords(
      BOARD.width / 2 - PLAYER.width / 2,
      BOARD.height - PLAYER.height - 50
    ),
    PlayerFactory.controllSettings(39, 37, 32),
    playerBullet,
    enemyBullet,
    hitS,
    gs
  );
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      enemies.push(
        new Enemy(
          EnemyFactory.coords((BOARD.width / 15) * (j + 1), i * 45 + 100)
        )
      );
    }
  }
  es = new EnemyController(
    enemies,
    player,
    playerBullet,
    enemyBullet,
    hitS,
    gs
  );

  bgSound.setVolume(0.2);
  bgSound.loop();
  cnv = createCanvas(BOARD.width, BOARD.height);
  centerCanvas();
}

function draw() {
  background(bg);
  player.draw();
  playerBullet.draw();
  enemyBullet.draw();
  gs.draw();
  es.moveEnemies();
}

function keyPressed({ key }) {
  if (key === "Enter") gs.changeGameState();
}

function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
