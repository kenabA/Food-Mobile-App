const resultsContainer = document.querySelector("#results");
export default class View {
  _errorMessage = "!! NO RECIPES FOUND !!";

  render(data) {
    this._data = data;
    if (this._data.length == 0) {
      resultsContainer.style.overflow = "hidden";
      return this.renderError(this._errorMessage);
    }
    this._clear();
    const markup = this.generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup2 = `
    <div class="spinner-container">
                <div class="spinner-border m-5 text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup2);
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderError(msg) {
    const markup = `<p class="text-black font-18 fw-medium text-center h-100 d-flex align-items-top justify-content-center">${msg}</p>`;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
