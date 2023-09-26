import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

const detailsContainer = document.querySelector("#details");

async function controlRecipe() {
  try {
    const idHash = window.location.hash.slice(1);
    if (!idHash) return;
    recipeView.renderSpinner(detailsContainer);
    await model.loadRecipe(idHash);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(err);
  }
}

["hashchange", "load"].forEach(function (ev) {
  window.addEventListener(ev, controlRecipe);
});
