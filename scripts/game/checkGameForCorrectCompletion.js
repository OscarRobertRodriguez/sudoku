import clearGameBoard from "./../view/clearGameBoard";

export default function checkGameForCorrectCompletion() {
  var allBlocks = document.querySelectorAll("input[data-square]");

  var items = [...allBlocks].filter(item => {
    return item.value;
  });

  var redBlocks = [...allBlocks].some(item => {
    return item.classList.contains("box--wrong");
  });

  console.log("====================================");
  console.log(redBlocks, "test");
  console.log("====================================");

  if (items.length === allBlocks.length && redBlocks == false) {
    alert("you have completed the puzzle. want to try another one?");
    clearGameBoard();
  }
}