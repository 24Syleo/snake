export default class Snake {
  direction = "";
  directionQueue = "";

  constructor(color) {
    this.length = 3;
    this.cellSize = 5;
    this.color = color;
    this.body = [];
    this.createSnake();
  }

  createSnake() {
    for (let i = this.length; i > 0; i--) {
      let k = i * this.cellSize;
      this.body.push({ x: k, y: 5 });
    }
    return this.body;
  }

  // changing the snake's movement
  moveSnake() {
    let x = this.body[0].x; // getting the head coordinates...hhehehe... getting head..
    // anyway... read on...
    let y = this.body[0].y;

    this.direction = this.directionQueue;

    if (this.direction == "right") {
      x += this.cellSize;
    } else if (this.direction == "left") {
      x -= this.cellSize;
    } else if (this.direction == "up") {
      y -= this.cellSize;
    } else if (this.direction == "down") {
      y += this.cellSize;
    }
    // removes the tail and makes it the new head...very delicate, don't touch this
    let tail = this.body.pop();
    tail.x = x;
    tail.y = y;
    this.body.unshift(tail);
  }

  // keyboard interactions | direction != '...' doesn't let the snake go backwards
  changeDirection(keycode) {
    if (keycode == 37 && this.direction != "right") {
      this.directionQueue = "left";
    } else if (keycode == 38 && this.direction != "down") {
      this.directionQueue = "up";
    } else if (keycode == 39 && this.direction != "left") {
      this.directionQueue = "right";
    } else if (keycode == 40 && this.direction != "top") {
      this.directionQueue = "down";
    }
  }
}
