class Bullet {
  constructor() {
    //Coordenadas
    this.x;
    this.y;
  }
}

const BulletFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
