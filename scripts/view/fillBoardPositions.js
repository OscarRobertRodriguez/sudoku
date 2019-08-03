import data from "../../game.json";

export default function fillBoardPositions(value) {
  var inputs = document.querySelectorAll('input[type = "number"]');

  data.boards.forEach(board => {
    console.log("====================================");
    console.log(value);
    console.log("====================================");
    if (board.id == value) {
      board.fillPositions.forEach(cordObj => {
        var inputToFill = [...inputs].findIndex(
          input => input.dataset.square == cordObj.x
        );
        inputs[inputToFill].value = cordObj.y;
        inputs[inputToFill].disabled = true;
        inputs[inputToFill].nextElementSibling.style.display = "none";
        inputs[inputToFill].classList.add("box--disabled");
      });
    }
  });
}
