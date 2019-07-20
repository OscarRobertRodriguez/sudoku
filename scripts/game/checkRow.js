export default function checkRow(e) {
  var target = e.target;
  var letterColKey = target.dataset.row;
  var allRowSquares = document.querySelectorAll(
    `input[data-row=${letterColKey}`
  );
  var RowDataset = allRowSquares[0].dataset.rowSelected;

  console.log("====================================");
  console.log(RowDataset, "dataset");
  console.log("====================================");

  // returns all current values for column
  var nonFilterValues = [...allRowSquares]
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
    allRowSquares.forEach(item => {
      item.style.background = "red";
      item.setAttribute("data-row-selected", true);
    });
  } else {
    allRowSquares.forEach(item => {
      item.style.background = "";
      item.setAttribute("data-row-selected", false);
    });
    console.log("====================================");
    console.log("hello for else check row");
    console.log("====================================");
  }
}
