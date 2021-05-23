class Bullet {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
  }
}

const BulletFactory = {
    coords: (x, y) => {
      return { x, y };
    },
  };