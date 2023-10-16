class searchView {
  _searchViewForm = document.querySelector(".search-view-form");

  getQuery() {
    const query =
      this._searchViewForm.querySelector(".search-view-input").value;
    this.clearQuery();
    return query;
  }

  addHandlerSearch(handler) {
    this._searchViewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  clearQuery() {
    return (this._searchViewForm.querySelector(".search-view-input").value =
      "");
  }
}

export default new searchView();
