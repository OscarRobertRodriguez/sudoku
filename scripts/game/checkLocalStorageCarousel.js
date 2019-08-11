import hideCarousel from "../view/hideCarousel";

export default function checkLocalStorageCarousel() {
  let dontShow = JSON.parse(localStorage.getItem("displayCarousel")).dontShow;
  dontShow ? hideCarousel() : null;
}
