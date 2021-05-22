class Barrier {
  constructor(coords) {
    this.x = coords.x;
    this.y = coords.y;
  }

  draw() {
      
  }
}

const BarrierFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
