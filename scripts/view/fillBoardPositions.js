import data from "../../game.json";

export default function fillBoardPositions(btn) {
  var inputs = document.querySelectorAll('input[type = "number"]');
  var littleInputs = document.querySelectorAll(".sodoku__track-box");
  data.boards.forEach(board => {
    if (board.id == btn.dataset.id) {
      board.fillPositions.forEach(cordObj => {
        var inputToFill = [...inputs].findIndex(
          input => input.dataset.square == cordObj.x
        );
        inputs[inputToFill].value = cordObj.y;
        inputs[inputToFill].disabled = true;
        inputs[inputToFill].nextElementSibling.style.display = "none";
        inputs[inputToFill].style.background = "grey";
      });
    }
  });
}
