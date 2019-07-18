import "./styles/main.scss";
import "./styles/root.css";

import clearGameBoard from "./scripts/view/clearGameBoard";
import limitMaxInput from "./scripts/game/limitMaxInput";

var buttons = document.querySelectorAll("button");
var inputs = document.querySelectorAll("input[type='number']");
var bigNumInputs = document.querySelectorAll(".sodoku__box");

inputs.forEach(input => {
  input.disabled = true;
  input.style.background = "white";
  input.addEventListener("input", limitMaxInput);
});

// bigNumInputs.forEach(function handlerKeyDown(input) {
//   input.addEventListener("keyup");
// });

buttons.forEach(function handlerChangeBoard(btn) {
  btn.addEventListener("click", clearGameBoard);
});
