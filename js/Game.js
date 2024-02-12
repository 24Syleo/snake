import Canvas from "./Canvas.js";

export default class Game {
  gameInterval;

  constructor(files, colorSnake, colorApple) {
    this.elScore = document.getElementById("score");
    this.canvas = new Canvas(files, colorSnake, colorApple);
    this.snake = this.canvas.snake;
    this.apple = this.canvas.apple;
    this.start = document.getElementById("start");
    this.stop = document.getElementById("stop");
    this.clear = document.getElementById("clear");
    this.score = 0;
    this.fps = 100;
  }

  init() {
    this.schowScore();
    this.snake.moveSnake();
    this.canvas.draw();
    const head = this.snake.body[0];
    // checking for wall collisions
    if (
      head.x < 0 ||
      head.x > this.canvas.width - this.snake.cellSize ||
      head.y < 0 ||
      head.y > this.canvas.height - this.snake.cellSize
    ) {
      this.canvas.playGameOver();
      clearInterval(this.gameInterval);
      return;
    }

    // checking for colisions with snake's body
    for (let i = 1; i < this.snake.body.length; i++) {
      if (head.x == this.snake.body[i].x && head.y == this.snake.body[i].y) {
        this.canvas.playGameOver();
        clearInterval(this.gameInterval);
        return;
      }
    }

    if (this.checkCollision(head.x, head.y, this.apple.x, this.apple.y)) {
      this.score += 10;
      this.snake.body.push({ x: this.apple.x, y: this.apple.y });
      this.fps -= 10;
      this.apple.generateRandomPosition(this.canvas.width, this.canvas.height);
    }
  }

  startGame() {
    this.snake.direction = "right"; // initial direction
    this.snake.directionQueue = "right";
    this.gameInterval = setInterval(() => {
      this.init();
    }, this.fps);
  }

  stopGame() {
    clearInterval(this.gameInterval);
  }

  clearGame() {
    this.init();
    document.getElementById("snakeColor").selectedIndex = 0;
    document.getElementById("pics").selectedIndex = 0;
  }

  schowScore() {
    this.elScore.innerHTML = "Score : " + this.score;
  }

  checkCollision(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
      return true;
    } else {
      return false;
    }
  }
}
