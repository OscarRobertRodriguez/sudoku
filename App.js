import "./styles/main.scss";
import "./styles/root.css";

import clearGameBoard from "./scripts/view/clearGameBoard";
import limitMaxInput from "./scripts/game/limitMaxInput";
import checkColumn from "./scripts/game/checkColumn";
import checkBlock from "./scripts/game/checkBlock";
import checkRow from "./scripts/game/checkRow";
import checkGameForCorrectCompletion from "./scripts/game/checkGameForCorrectCompletion";
import fillBoardPositions from "./scripts/view/fillBoardPositions";

var buttons = document.querySelectorAll("button");
var inputs = document.querySelectorAll("input[type='number']");
var bigNumInputs = document.querySelectorAll(".sodoku__box");

/// events
// add events to button to change and start gameBoard
buttons.forEach(function handlerChangeBoard(btn) {
  btn.addEventListener("click", function(e) {
    clearGameBoard();
    fillBoardPositions(e);
  });
});

// when page is loaded it sets all inputs to disabled
// also add a listener to limit each input to one value
window.addEventListener("load", function() {
  inputs.forEach(input => {
    input.disabled = true;
    input.addEventListener("input", limitMaxInput);
  });
});

// add keyup event to each big input
bigNumInputs.forEach(function handlerKeyDown(input) {
  input.addEventListener("keyup", function(event) {
    var keypressed = event.target.value.charCodeAt();
    // only run functions if numbers are pressed or delete key
    if ((keypressed >= 49 && keypressed <= 57) || event.which == 8) {
      checkColumn(event);
      checkRow(event);
      checkBlock(event);
      checkGameForCorrectCompletion();
    }
  });
});
