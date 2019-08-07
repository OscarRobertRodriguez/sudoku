export default function disableBlocks(elem) {
  var allBlocks = document.querySelectorAll("input[data-square]");
  allBlocks.forEach(item => {
    var parent = item.parentElement;
    if (item === elem) {
      item.disabled = false;
      parent.classList.add("animated");
      parent.classList.add("heartBeat");
      parent.style.zIndex = 9000;
      item.style.background = "blue";
    } else {
      item.disabled = true;
    }
  });
}
