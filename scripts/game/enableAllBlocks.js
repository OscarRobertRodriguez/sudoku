export default function enableBlocks(target) {
  var allBlocks = document.querySelectorAll("input[data-square]");

  var onlyStartDisabledBlocks = [...allBlocks].filter(item => {
    return item.classList.contains("box--disabled");
  });

  allBlocks.forEach(item => {
    var parent = item.parentElement;
    item.disabled = false;
    if (parent.classList.contains("heartBeat")) {
      parent.classList.remove("heartBeat");
      parent.style.zIndex = 1;
    }
  });

  onlyStartDisabledBlocks.forEach(item => {
    item.disabled = true;
  });
}
