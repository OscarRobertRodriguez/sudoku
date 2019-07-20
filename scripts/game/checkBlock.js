export default function checkBlock(e) {
  var target = e.target;
  var letterColKey = target.dataset.square.split("")[0];
  var allColSquares = document.querySelectorAll(
    `input[data-square^=${letterColKey}`
  );

  console.log(letterColKey, "letterColKey");
  console.log(allColSquares, "all block squares");

  // returns all current values for column into array
  var nonFilterValues = [...allColSquares]
    .map(function checkColumnHandler(item) {
      return item.value;
    })
    .join("");

  var uniqueValues = [...new Set(nonFilterValues)];

  // collect all columns with data-column-seleted set to true
  // this is done so that checkBlock does not overwrite checkColumn
  var trueRedColumns = document.querySelectorAll(
    `input[data-column-selected=true]`
  );

  var trueRedRows = document.querySelectorAll(`input[data-row-selected=true]`);

  var trueRedBlock = document.querySelectorAll(
    `input[data-block-selected=true]`
  );

  console.log("====================================");
  console.log(trueRedBlock, "true red block");
  console.log("====================================");

  // if their are more than the same # in block turn whole block red
  // a block is defined as a group of 9 little squares
  if (
    nonFilterValues.length !== uniqueValues.length &&
    uniqueValues.length > 1
  ) {
    allColSquares.forEach(item => {
      item.style.background = "red";
      item.setAttribute("data-block-selected", true);
    });
    console.log("good day sir");
  } else {
    // allColSquares.forEach(item => (item.style.background = ""));
    console.log("bad day sir");

    trueRedColumns.forEach(item => {
      item.style.background = "red";
    });
    trueRedRows.forEach(item => {
      item.style.background = "red";
    });

    trueRedBlock.forEach(item => {
      item.style.background = "";
      item.dataset.blockSelected = false;
    });
  }
}
