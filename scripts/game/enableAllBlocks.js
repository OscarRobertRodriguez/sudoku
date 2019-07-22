export default function enableBlocks(target) {
  var allBlocks = document.querySelectorAll("input[data-square]");

  var onlyStartDisabledBlocks = [...allBlocks].filter(item => {
    return item.classList.contains("box--disabled");
  });

  allBlocks.forEach(item => {
    item.disabled = false;
  });

  onlyStartDisabledBlocks.forEach(item => {
    item.disabled = true;
  });
}
