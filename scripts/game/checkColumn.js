export default function checkColumn(e) {
  var target = e.target;
  var value = target.value;
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

  var uniqueValues = [...new Set(nonFilterValues)];

  // ir their are more than the same # in column run code
  if (
    nonFilterValues.length !== uniqueValues.length &&
    uniqueValues.length > 1
  ) {
    allColSquares.forEach(item => {
      item.style.background = "red";
    });
  } else {
    allColSquares.forEach(item => (item.style.background = ""));
  }
}
