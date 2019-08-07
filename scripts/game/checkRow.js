import enableBlocks from "./enableAllBlocks";
import disableBlocks from "./disableAllBlocks";
import checkBlock from "./checkBlock";

export default function checkRow(e) {
  var target = e.target;
  var letterColKey = target.dataset.row;
  var allRowSquares = document.querySelectorAll(
    `input[data-row=${letterColKey}`
  );

  // returns all current values for column
  var nonFilterValues = [...allRowSquares]
    .map(function checkColumnHandler(item) {
      return item.value;
    })
    .join("");

  // use es6 set to filter all non unique values
  var uniqueValues = [...new Set(nonFilterValues)];
  var hasmark = document.querySelectorAll(".mark");
  var trueRedColumns = document.querySelectorAll(".box--wrong");

  // compare original values with unique values if
  // length is not same then there was a duplicate number so
  // all column is hightlighted red
  if (
    nonFilterValues.length !== uniqueValues.length &&
    uniqueValues.length > 1
  ) {
    allRowSquares.forEach(item => {
      item.classList.add("box--wrong");
      item.classList.add("mark");
    });

    disableBlocks(target);
  } else {
    enableBlocks();
    allRowSquares.forEach(item => {
      item.classList.remove("box--wrong");
      item.classList.remove("mark");
    });
    checkBlock(e);
  }
}
