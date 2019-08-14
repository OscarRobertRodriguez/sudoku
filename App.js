import "./styles/main.scss";
import "./styles/animate.css";
import "./styles/root.css";
import "./styles/select-css.css";

import clearGameBoard from "./scripts/view/clearGameBoard";
import limitMaxInput from "./scripts/game/limitMaxInput";
import checkColumn from "./scripts/game/checkColumn";
import checkBlock from "./scripts/game/checkBlock";
import checkRow from "./scripts/game/checkRow";
import checkGameForCorrectCompletion from "./scripts/game/checkGameForCorrectCompletion";
import fillBoardPositions from "./scripts/view/fillBoardPositions";
import startGame from "./scripts/game/startGame";
import checkLocalStorageForPuzzleCompletion from "./scripts/game/checkLocalStorageForPuzzleCompletion";
import restartGame from "./scripts/game/restartGame";
import hideCarousel from "./scripts/view/hideCarousel";
import dontShowAgainAddToLocalStorage from "./scripts/game/dontShowAgainLocalStorage";
import checkLocalStorageCarousel from "./scripts/game/checkLocalStorageCarousel";

var button = document.querySelectorAll(".modal__btn");
var inputs = document.querySelectorAll("input[type='number']");
var bigNumInputs = document.querySelectorAll(".sodoku__box");
var startBtn = document.querySelector(".btn--start");
var restartBtn = document.querySelector(".restart__btn");
var closeButton = document.querySelector(".btn--close");
var btnDontShowAgain = document.querySelector(".btn--carousel");
var howToModalHasBeenClosed = false;

/// events

// run when start button is clicked
startBtn.addEventListener("click", function startGameHandler(e) {
  startGame(e);
});

// restart game on completion
restartBtn.addEventListener("click", restartGame);

// close howToModal

closeButton.addEventListener("click", function closeHowToModalHandler() {
  hideCarousel();
  var notADisabledInput = document.querySelector("input:not(.box--disabled)");
  notADisabledInput.focus();

  howToModalHasBeenClosed = true;
});

// listen for click events on document that are input only
// if not focus on an input
document.addEventListener("click", function documentEventHandler(e) {
  var clickedTarget = e.target;

  if (howToModalHasBeenClosed) {
    if (
      clickedTarget.classList.contains("sodoku__box") ||
      clickedTarget.classList.contains("sodoku__track-box") ||
      clickedTarget.classList.contains("box--disabled")
    ) {
      return;
    } else {
      var noPreFilledInput = document.querySelector(
        ".sodoku__box:not(.box--disabled)"
      );
      noPreFilledInput.focus();
    }
  }
});

// dont show modal again btn using local storage
btnDontShowAgain.addEventListener("click", function dontShowHandler() {
  hideCarousel();
  dontShowAgainAddToLocalStorage();
  howToModalHasBeenClosed = true;
});

// when page is loaded it sets all inputs to disabled
// also add a listener to limit each input to one value
window.addEventListener("load", function() {
  inputs.forEach(input => {
    input.disabled = true;
    input.addEventListener("input", limitMaxInput);
  });

  // check if any puzzles have been completed before and put
  // completed next to their names
  checkLocalStorageForPuzzleCompletion();

  checkLocalStorageCarousel();
});

// add keyup event to each big input
bigNumInputs.forEach(function handlerKeyDown(input) {
  var invalidChars = ["-", "+", "e"];
  input.addEventListener("keydown", function(e) {
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  });
  input.addEventListener("keyup", function(event) {
    var keypressed = event.target.value.charCodeAt();

    // only run functions if numbers are pressed or delete key
    if ((keypressed >= 49 && keypressed <= 57) || event.which == 8) {
      checkColumn(event);
      checkGameForCorrectCompletion();
    }

    if (event.which == 13) {
      return false;
    }
  });
});
