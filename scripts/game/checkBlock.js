import disableBlocks from "./disableAllBlocks";
import enableBlocks from "./enableAllBlocks";

export default function checkBlock(e) {
  var target = e.target;
  var letterColKey = target.dataset.square.split("")[0];
  var allColSquares = document.querySelectorAll(
    `input[data-square^=${letterColKey}`
  );

  // returns all current values for column into array
  var nonFilterValues = [...allColSquares]
    .map(function checkColumnHandler(item) {
      return item.value;
    })
    .join("");

  var uniqueValues = [...new Set(nonFilterValues)];

  // collect all columns with data-column-seleted set to true
  // this is done so that checkBlock does not overwrite checkColumn
  var hasmark = document.querySelectorAll(".mark");

  // if their are more than the same # in block turn whole block red
  // a block is defined as a group of 9 little squares
  if (
    nonFilterValues.length !== uniqueValues.length &&
    uniqueValues.length > 1
  ) {
    allColSquares.forEach(item => {
      item.classList.add("box--wrong");
    });
    target.style.background = "blue";

    disableBlocks(target);
  } else if (
    nonFilterValues.length === uniqueValues.length &&
    uniqueValues.length > 1 &&
    hasmark.length >= 1
  ) {
    [...hasmark].forEach(item => {
      item.classList.add("box--wrong");
    });

    target.style.background = "blue";
  } else {
    allColSquares.forEach(item => {
      item.classList.remove("box--wrong");
    });
    [...hasmark].forEach(item => {
      item.classList.remove("box--wrong");
    });

    target.style.background = "";
    enableBlocks();
  }
}
