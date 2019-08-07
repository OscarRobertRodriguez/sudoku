import clearBoard from "../view/clearGameBoard";
import fillBoardPositions from "../view/fillBoardPositions";
import addToLocalStorage from "./addToLocalStorage";

export var startId;

export default function startGame(e) {
  var select = document.querySelector(".select-css");
  var selectValue = select.value;
  startId = selectValue;
  var modal = document.querySelector(".modal__background");

  modal.classList.add("slideOutLeft");
  addToLocalStorage(selectValue);
  clearBoard();
  fillBoardPositions(selectValue);
}
