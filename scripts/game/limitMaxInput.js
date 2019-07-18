export default function limitMaxInput(e) {
  var input = e.target;
  if (this.value.length > this.maxLength) {
    return (this.value = this.value.slice(0, this.maxLength));
  }
}
