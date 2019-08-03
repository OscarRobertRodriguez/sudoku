export default function setToTrue(id) {
  localStorage.setItem(id, JSON.stringify({ completed: true }));
}
