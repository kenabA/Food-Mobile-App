import View from "./view.js";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-1-small");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(typeof goToPage);
      handler(goToPage);
    });
  }

  generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / 10);
    console.log(numPages);

    // page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return `<button data-goto="${this._data.page + 1}" class="btn-1-small">
      Page ${this._data.page + 1}<i class="fas fa-arrow-right"></i>
    </button>`;
    }

    // last page
    if (this._data.page === numPages && numPages > 1) {
      return `<button data-goto="${this._data.page - 1}" class="btn-1-small">
      <i class="fas fa-arrow-left"></i>Page ${this._data.page - 1}
    </button>
    `;
    }
    // other page
    if (this._data.page < numPages) {
      return `<button data-goto="${this._data.page - 1}" class="btn-1-small">
      <i class="fas fa-arrow-left"></i>Page ${this._data.page - 1}
    </button>
    <button data-goto="${this._data.page + 1}" class="btn-1-small">
    Page ${this._data.page + 1}<i class="fas fa-arrow-right"></i>
    </button> `;
    }

    return " ";
  }
}

export default new PaginationView();
