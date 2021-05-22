let bg;
let cnv;
//Objetos
let enemies = [];
let player;
let points;
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
  gs = new GameController(InstructionsFactory.coords(BOARD.width / 2, 25));
  player = new Player(
    PlayerFactory.coords(
      BOARD.width / 2 - PLAYER.width / 2,
      BOARD.height - PLAYER.height - 10
    ),
    PlayerFactory.controllSettings(39, 37),
    gs
  );
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 10; j++) {
      enemies.push(
        new Enemy(
          EnemyFactory.coords((BOARD.width / 15) * (j + 1), i * 45 + 100),
          gs
        )
      );
    }
  }
  es = new EnemyController(enemies, gs);

  bgSound.setVolume(0.5);
  bgSound.loop();
  cnv = createCanvas(BOARD.width, BOARD.height);
  centerCanvas();
}

function draw() {
  background(bg);
  player.draw();
  gs.draw();
  es.moveEnemies()
}

function keyPressed({ key }) {
  if (key === "Enter") inst.changeGameState();
}

function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
