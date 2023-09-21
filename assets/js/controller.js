import * as model from "./model.js";

const detailsContainer = document.querySelector("#details");

const spinner = function (ParentEl) {
  const markup = `
  <div class="spinner-container">
              <div class="spinner-border m-5 text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
  `;
  ParentEl.innerHTML = "";
  ParentEl.insertAdjacentHTML("afterbegin", markup);
};

async function showRecipe() {
  spinner(detailsContainer);
  const idHash = window.location.hash.slice(1);
  if (!idHash) return;
  await model.loadRecipe(idHash);
  const { recipe } = model.state;
  detailsContainer.innerHTML = "";
  const markup = `
            <style>
                .food-background{
                  background-image: linear-gradient( rgba(82, 48, 127, 0.4), rgba(82, 48, 127, 1)), url('${
                    recipe.image
                  }');
                }
            </style>
            <figure class="food-background d-flex">
                      <div class="details-header px-32 pb-18">
                        <h4 class="text-gamma text-white food-title">${
                          recipe.title
                        }</h4>
                      </div>
                    </figure>
                    <div
                      class="food-basic-details text-black d-flex px-32 py-24 gap-24"
                    >
                      <div class="duration d-flex align-items-center gap-8">
                        <i class="fas fa-clock text-primary font-18"></i>
                        <p class="m-0 font-16 duration-data">
                          <span class="bold-me">${
                            recipe.cookingTime
                          }</span> Minutes
                        </p>
                      </div>
                      <div class="duration d-flex align-items-center gap-8">
                        <i class="fas fa-user-group text-primary"></i>
                        <p class="m-0 font-16 serving-data">
                          <span class="bold-me">${
                            recipe.servings
                          }</span> Servings
                        </p>
                      </div>
                    </div>
                    <div class="food-ingredients px-32 py-32 bg-primary-100 text-black">
                      <h5 class="text-delta text-primary mb-24">Recipe Ingredients</h5>
                      <ul>
                      ${recipe.ingredients
                        .map(function (ingredient) {
                          return `
                        <li class="d-flex align-items-center gap-12 mb-16">
                          <i class="fas fa-check text-primary"></i>  ${ingredient.quantity} ${ingredient.unit} ${ingredient.description}
                        </li>
                        `;
                        })
                        .join(" ")}
                      </ul>
                    </div>
                    <div class="food-recipe px-32 py-32 bg-secondary">
                      <h5 class="text-delta text-primary mb-18">Cooking Methods</h5>
                      <p class="font-16 text-black mb-24">
                        This recipe was carefully designed and tested by
                        <span class="publisher-name"> ${recipe.publisher}</span>
                        Please check out directions at their website.
                      </p>
                      <button
                        class="btn btn-primary d-flex align-items-center gap-8 py-8 px-16"
                      >
                        Directions<i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                    <div class="food-conclusion px-32 py-24 bg-primary-100">
                      <p class="m-0 text-black font-12">
                        Made By Kenab Kushal K.C. Inspired from Jonas Schmedtmann
                      </p>
                    </div>
    `;
  detailsContainer.insertAdjacentHTML("afterbegin", markup);
}

["hashchange", "load"].forEach(function (ev) {
  window.addEventListener(ev, showRecipe);
});
