import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: {},
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
    throw err;
  }
};

export const loadSearch = async function (input) {
  try {
    state.search.query = input;
    const data = await getJSON(`${API_URL}?search=${input}`);
    console.log(data);
    state.search.results = data.data.recipes.map(function (recipes) {
      return {
        id: recipes.id,
        title: recipes.title,
        publisher: recipes.publisher,
        image: recipes.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};
//DEFAULT PAGE WILL BE 1 NOW DUE TO THE 'page = state.search.page' in the parameter.
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(function (ind) {
    // new quantity = old qunt * new servings
    ind.quantity = (ind.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current as bookmarked
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }
};
