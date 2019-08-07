import clearGameBoard from "./../view/clearGameBoard";
import { startId } from "./startGame";
import setToTrue from "./setLocalStoragePuzzleToTrue";

export default function checkGameForCorrectCompletion() {
  var allBlocks = document.querySelectorAll("input[data-square]");
  var bigSquares = document.querySelectorAll(".sodoku__square");
  var restartModal = document.querySelector(".restartModal__background");

  var items = [...allBlocks].filter(item => {
    return item.value;
  });

  var redBlocks = [...allBlocks].some(item => {
    return item.classList.contains("box--wrong");
  });

  if (items.length === allBlocks.length && redBlocks == false) {
    bigSquares.forEach(item => {
      item.classList.add("animated", "tada");
    });
    restartModal.style.right = 0;
    restartModal.style.overflow = "visable";
    restartModal.classList.add("bounceInLeft", "delay-2s");

    setToTrue(startId);
  }
}
