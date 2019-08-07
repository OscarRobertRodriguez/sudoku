import data from "../../game.json";
import checkmark from "../../assets/checkmark.svg";

export default function checkLocalStorageForPuzzleCompletion() {
  var idsArray = data.boards.map(function returnIds(item) {
    return item.id;
  });
  var selectOptions = document.querySelectorAll(".select-css > option");

  idsArray.forEach(function existInStorage(id) {
    if (localStorage.getItem(id)) {
      var completed = JSON.parse(localStorage.getItem(id)).completed;
      var optionElement = [...selectOptions].filter(item => {
        return item.value === id;
      });

      if (completed) {
        var text = document.createTextNode("--completed--");
        optionElement[0].append(text);
      }
    }
  });
}
