import fillBoard from "./fillBoardPositions";

export default function clearBoard(e) {
  var inputs = document.querySelectorAll('input[type = "number"]');
  var clickedBtn = e.target;
  inputs.forEach(input => {
    input.value = "";
    input.disabled = false;
  });

  fillBoard(clickedBtn);
}
