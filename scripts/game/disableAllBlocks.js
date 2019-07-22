export default function disableBlocks(elem) {
  var allBlocks = document.querySelectorAll("input[data-square]");
  allBlocks.forEach(item => {
    if (item === elem) {
      item.disabled = false;
    } else {
      item.disabled = true;
    }
  });
}
