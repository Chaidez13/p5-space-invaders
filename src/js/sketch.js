let bg;
let cnv;
//Objetos
let enemies = [];
let player;
let points;
var playerBullet;
let gs;
//Sonidos
let bgSound;
let kickSound;
let pointSound;
let wallSound;

let kenvectorFont;

function preload() {
  soundFormats("wav");
  bgSound = loadSound("src/assets/sounds/backgroundMusic.mp3");
  kenvectorFont = loadFont("src/assets/fonts/kenvector_future_thin.ttf");
}

function setup() {
  bg = loadImage("src/assets/sprites/space.jpg");

  //Inicialización de los objetos
  gs = new GameController(
    InterfaceFactory.coords(BOARD.width / 2, 25),
    InterfaceFactory.coords(40, BOARD.height - 15)
  );
  playerBullet = new Bullet(9, gs);
  player = new Player(
    PlayerFactory.coords(
      BOARD.width / 2 - PLAYER.width / 2,
      BOARD.height - PLAYER.height - 50
    ),
    PlayerFactory.controllSettings(39, 37, 32),
    playerBullet,
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
  es = new EnemyController(enemies, player, playerBullet, gs);

  bgSound.setVolume(0.3);
  bgSound.loop();
  cnv = createCanvas(BOARD.width, BOARD.height);
  centerCanvas();
}

function draw() {
  background(bg);
  player.draw();
  playerBullet.draw();
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
