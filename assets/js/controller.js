import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import SearchView from "./views/searchView.js";
import ResultsView from "./views/resultsView.js";
const detailsContainer = document.querySelector("#details");
const resultsContainer = document.querySelector("#results");

async function controlRecipe() {
  try {
    const idHash = window.location.hash.slice(1);
    if (!idHash) return;
    recipeView.renderSpinner(detailsContainer);
    await model.loadRecipe(idHash);
    recipeView.render(model.state.recipe);
  } catch (err) {
    const errorMsg = "NO RECIPES FOUND!";
    recipeView.renderError(errorMsg);
  }
}

["hashchange", "load"].forEach(function (ev) {
  window.addEventListener(ev, controlRecipe);
});

async function controlSearchResult() {
  try {
    ResultsView.renderSpinner(resultsContainer);
    const query = SearchView.getQuery();
    if (!query) return;
    await model.loadSearch(query);
    // ResultsView.render(model.state.search.results);
    ResultsView.render(model.getSearchResultsPage(1));
  } catch (err) {
    const errorMsg = "NO RECIPES FOUND!";
    ResultsView.renderError(errorMsg);
  }
}
const init = function () {
  SearchView.addHandlerSearch(controlSearchResult);
};
init();
