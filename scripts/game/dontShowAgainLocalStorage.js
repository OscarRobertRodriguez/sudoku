export default function dontShowAgainAddToLocalStorage() {
  if (!localStorage.getItem("displayCarousel")) {
    localStorage.setItem("displayCarousel", JSON.stringify({ dontShow: true }));
  }
}
