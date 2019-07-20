import "./styles/main.scss";
import "./styles/root.css";

import clearGameBoard from "./scripts/view/clearGameBoard";
import limitMaxInput from "./scripts/game/limitMaxInput";
import checkColumn from "./scripts/game/checkColumn";
import checkBlock from "./scripts/game/checkBlock";
import checkRow from "./scripts/game/checkRow";

var buttons = document.querySelectorAll("button");
var inputs = document.querySelectorAll("input[type='number']");
var bigNumInputs = document.querySelectorAll(".sodoku__box");

inputs.forEach(input => {
  input.disabled = true;
  input.style.background = "white";
  input.addEventListener("input", limitMaxInput);
});

bigNumInputs.forEach(function handlerKeyDown(input) {
  input.addEventListener("keyup", function(event) {
    var keypressed = event.target.value.charCodeAt();
    // only run functions if numbers are pressed or delete key
    if ((keypressed >= 49 && keypressed <= 57) || event.which == 8) {
      checkColumn(event);
      checkRow(event);
      checkBlock(event);
    }
  });
});

buttons.forEach(function handlerChangeBoard(btn) {
  btn.addEventListener("click", clearGameBoard);
});
