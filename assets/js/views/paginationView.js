import View from "./view.js";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / 10);
    console.log(numPages);

    // page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return `<button class="btn-1-small">
      Next<i class="fas fa-arrow-right"></i>
    </button>`;
    }

    // last page
    if (this._data.page === numPages && numPages > 1) {
      console.log("last page");
      return `<button class="btn-1-small">
      <i class="fas fa-arrow-left"></i>Previous
    </button>
    `;
    }
    // other page
    if (this._data.page < numPages) {
      console.log("Other Pages");
      return `<button class="btn-1-small">
      <i class="fas fa-arrow-left"></i>Previous
    </button>
    <button class="btn-1-small">
      Next<i class="fas fa-arrow-right"></i>
    </button> `;
    }
  }
}

export default new PaginationView();
