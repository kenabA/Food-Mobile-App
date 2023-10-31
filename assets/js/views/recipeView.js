import View from "./view.js";

class RecipeVeiw extends View {
  _parentEl = document.querySelector("#details");

  addHandlerServings(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-2-small");
      if (!btn) return;
      const updateTo = +btn.dataset.updateTo;
      if (updateTo > 0) handler(updateTo);
    });
  }

  generateMarkup() {
    return `
            <style>
                .food-background{
                  background-image: linear-gradient( rgba(82, 48, 127, 0.4), rgba(82, 48, 127, 1)), url('${
                    this._data.image
                  }');
                }
            </style>
            <figure class="food-background d-flex">
                      <div class="details-header px-32 pb-18">
                        <h4 class="text-gamma text-white food-title">${
                          this._data.title
                        }</h4>
                      </div>
                    </figure>



                    <div class="d-flex justify-content-between px-32 py-24">
                    <div class="food-basic-details text-black d-flex gap-24">
                      <div class="duration d-flex align-items-center gap-8">
                        <i class="fas fa-clock text-primary font-18"></i>
                        <p class="m-0 font-16 duration-data">
                          <span class="bold-me">${
                            this._data.cookingTime
                          }</span> Minutes
                        </p>
                      </div>
                      <div class="duration d-flex align-items-center gap-12">
                        <div class="d-flex align-items-center gap-8">
                          <i class="fas fa-user-group text-primary"></i>
                          <p class="m-0 font-16 serving-data">
                            <span class="bold-me">${
                              this._data.servings
                            }</span> Servings
                          </p>
                        </div>
                        <div class="duration d-flex align-items-center gap-4 py-2 ">
                          <button class="btn-2-small" data-update-to="${
                            this._data.servings + 1
                          }">
                            <i class="fas fa-plus"></i>
                          </button>
                          <button class="btn-2-small" data-update-to="${
                            this._data.servings - 1
                          }">
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        class="btn d-flex align-items-center justify-content-center"
                      >
                        <i class="far fa-bookmark text-primary font-18"></i>
                      </button>
                    </div>
                  </div>




                    <div class="food-ingredients px-32 py-32 bg-primary-100 text-black">
                      <h5 class="text-delta text-primary mb-24">Recipe Ingredients</h5>
                      <ul>
                      ${this._data.ingredients
                        .map(this._generateMarkupIngredient)
                        .join(" ")}
                      </ul>
                    </div>
                    <div class="food-recipe px-32 py-32 bg-secondary">
                      <h5 class="text-delta text-primary mb-18">Cooking Methods</h5>
                      <p class="font-16 text-black mb-24">
                        This recipe was carefully designed and tested by
                        <span class="publisher-name"> ${
                          this._data.publisher
                        }</span>
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
  }
  _generateMarkupIngredient(ingredient) {
    return `
  <li class="d-flex align-items-center gap-12 mb-16">
    <i class="fas fa-check text-primary"></i>  ${
      ingredient.quantity ? ingredient.quantity : ""
    }
     ${ingredient.unit} ${ingredient.description}
  </li>
  `;
  }
}

export default new RecipeVeiw();
