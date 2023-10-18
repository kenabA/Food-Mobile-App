import View from "./view.js";
class ResultsView extends View {
  _parentEl = document.querySelector("#results");

  generateMarkup() {
    console.log(this._data);
    return this._data.map(this.generateMarkupPreview).join("");
  }
  generateMarkupPreview(results) {
    return `
    <div class="results-container">
    <ul class="results-all">
      <li class="results-individual px-24 py-16">
        <a
          href="#${results.id}"
          class="results-link d-flex align-items-center"
        >
        <div class="food-figure-container">
          <div class="purple-overlay"></div>
          <img src="${results.image}" class="food-figure"></img>
        </div>
          <div class="food-details">
            <p class="food-name mb-8 font-18 text-primary">
              ${results.title}
              
            </p>
            <p class="food-publisher font-12 text-black">
              ${results.publisher}
            </p>
          </div>
        </a>
      </li>
    </ul>
    <div
      class="pagination-btn d-flex justify-content-between px-24 hidden"
    >
      <button class="btn-1-small">
        <i class="fas fa-arrow-left"></i>Previous Page
      </button>
      <button class="btn-1-small">
        Next Page<i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>`;
  }
}

export default new ResultsView();
