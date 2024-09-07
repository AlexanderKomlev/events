import "./css/style.css";
import Game from "./app";
import Score from "./score";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".container"));
  const score = new Score(document.querySelector(".score"));
  window.game = game;
  window.score = score;

  game.init();

  document.querySelector(".start").addEventListener("click", () => {
    game.start();
  });

  document.querySelector(".stop").addEventListener("click", () => {
    game.stop();
  });

  document.querySelector(".reset").addEventListener("click", () => {
    game.stop();
    score.reset();
  });

  document.querySelector(".container").addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      game.click(event.target);
      score.scoreUp(event);
    }

  });
});
