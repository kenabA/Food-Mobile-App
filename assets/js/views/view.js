export default class View {
  render(data) {
    this._data = data;
    this._clear();
    const markup = this.generateMarkup();
    this._detailsContainer.insertAdjacentHTML("afterbegin", markup);
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
    this._detailsContainer.insertAdjacentHTML("afterbegin", markup2);
  }

  _clear() {
    this._detailsContainer.innerHTML = "";
  }

  renderError(msg) {
    const markup = `<p class="text-danger font-18 fw-medium text-center h-100 d-flex align-items-center justify-content-center">NO RECIPE FOUND!</p>`;
    this._clear();
    this._detailsContainer.insertAdjacentHTML("afterbegin", markup);
  }
}
