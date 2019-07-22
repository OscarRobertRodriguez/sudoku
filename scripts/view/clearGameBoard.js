import fillBoard from "./fillBoardPositions";

export default function clearBoard() {
  var inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.value = "";
    input.disabled = false;
  });
}
