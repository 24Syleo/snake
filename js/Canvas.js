import Snake from "./Snake.js";
import Apple from "./Apple.js";

export default class Canvas {
  constructor(fileImg, colorSnake, colorApple) {
    this.canvas = document.getElementById("canvas");
    this.snake = new Snake(colorSnake);
    this.apple = new Apple(colorApple);
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.img = new Image();
    this.imgPath = fileImg;
    this.setImg();
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
    this.drawSnake();
    this.drawApple();
  }

  drawSquare(x, y, color, cellSize) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, cellSize, cellSize);
  }

  drawSnake() {
    for (let i = 0; i < this.snake.body.length; i++) {
      this.drawSquare(
        this.snake.body[i].x,
        this.snake.body[i].y,
        this.snake.color,
        this.snake.cellSize
      );
    }
  }

  drawApple() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.apple.x,
      this.apple.y,
      this.apple.radius,
      0,
      Math.PI * 2,
      true
    );
    this.ctx.closePath();
    this.ctx.fillStyle = this.apple.color;
    this.ctx.fill();
  }

  setImg() {
    this.img.onload = () => {
      console.log("Image loaded successfully");
      this.draw();
    };
    this.img.src = this.imgPath;
  }

  playGameOver() {
    this.ctx.font = "48px sans-serif";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("Game Over", 30, 75);
  }
}
