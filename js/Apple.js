export default class Apple {
  constructor(color) {
    this.color = color;
    this.radius = 2.5;
    this.generateRandomPosition(canvas.width, canvas.height);
  }

  generateRandomPosition(canvasWidth, canvasHeight) {
    this.x = Math.floor(Math.random() * (canvasWidth / 5)) * 5;
    this.y = Math.floor(Math.random() * (canvasHeight / 5)) * 5;
  }
}
