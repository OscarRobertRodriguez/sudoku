export default function checkColumn(e) {
  var target = e.target;
  var letterColKey = target.dataset.column;
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
      item.style.background = "red";
      item.setAttribute("data-column-selected", true);
    });
  } else {
    allColSquares.forEach(item => {
      item.style.background = "";
      item.setAttribute("data-column-selected", false);
    });
  }
}
