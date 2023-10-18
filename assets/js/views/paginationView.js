import View from "./view.js";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  generateMarkup() {}
}

export default new PaginationView();
