export default function addToLocalStorage(value) {
  if (!localStorage.getItem(value)) {
    localStorage.setItem(value, JSON.stringify({ completed: false }));
  }
}
