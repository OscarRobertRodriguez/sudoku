import hideCarousel from "../view/hideCarousel";

export default function checkLocalStorageCarousel() {
  if (localStorage.getItem("displayCarousel")) {
    let dontShow = JSON.parse(localStorage.getItem("displayCarousel")).dontShow;
    dontShow ? hideCarousel() : null;
  }
}
