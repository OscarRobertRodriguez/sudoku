import disableBlocks from "./disableAllBlocks";
import enableBlocks from "./enableAllBlocks";
import checkRow from "./checkRow";

export default function checkColumn(e) {
  var target = e.target;
  var letterColKey = target.dataset.column;
  var allBlocks = document.querySelectorAll("input[data-square]");
  var allColSquares = document.querySelectorAll(
    `input[data-column=${letterColKey}`
  );
  // returns all current values for column
  var nonFilterValues = [...allColSquares]
    .map(function checkColumnHandler(item) {
      return item.value;
    })
    .join("");

  // use es6 set to filter all non unique values
  var uniqueValues = [...new Set(nonFilterValues)];

  // compare original values with unique values if
  // length is not same then there was a duplicate number so
  // all column is hightlighted red

  if (
    nonFilterValues.length !== uniqueValues.length &&
    uniqueValues.length > 1
  ) {
    allColSquares.forEach(item => {
      item.classList.add("box--wrong");
      item.classList.add("mark");
    });
    disableBlocks(target);
  } else {
    enableBlocks();
    allColSquares.forEach(item => {
      item.classList.remove("box--wrong");
      item.classList.remove("mark");
    });
    checkRow(e);
  }
}
