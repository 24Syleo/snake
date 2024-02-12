import Game from "./js/Game.js";

const playgroundSelect = document.getElementById("pics");
const snakeSelect = document.getElementById("snakeColor");
const appleSelect = document.getElementById("appleColor");

let game;

playgroundSelect.addEventListener("change", updateGameOptions);
snakeSelect.addEventListener("change", updateGameOptions);
appleSelect.addEventListener("change", updateGameOptions);

function updateGameOptions() {
  const selectedPlayground = playgroundSelect.value;
  const selectedSnakeColor = snakeSelect.value;
  const selectedAppleColor = appleSelect.value;
  game = new Game(selectedPlayground, selectedSnakeColor, selectedAppleColor);
  game.init();
}

updateGameOptions();

game.start.addEventListener("click", () => {
  game.startGame();
});

game.stop.addEventListener("click", () => {
  game.stopGame();
});

game.clear.addEventListener("click", game.clearGame.bind(game));

document.addEventListener("keydown", function (event) {
  game.snake.changeDirection(event.keyCode);
});
