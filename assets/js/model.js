import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

export const loadRecipe = async function (idHash) {
  try {
    const data = await getJSON(`${API_URL}/${idHash}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    console.log(`${err} in Model.js`);
    throw err;
  }
};

export const loadSearch = async function (input) {
  try {
    state.search.query = input;
    const data = await getJSON(`${API_URL}?search=${input}`);
    state.search.results = data.data.recipes.map(function (recipes) {
      return {
        id: recipes.id,
        title: recipes.title,
        publisher: recipes.publisher,
        image: recipes.image_url,
      };
    });
  } catch (err) {
    console.log(`${err} in Model.js`);
    throw err;
  }
};
