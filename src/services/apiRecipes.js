import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEYS = "f8d2d348135f45feb07327844d99dc9c";
// const API_KEYS = "9359ad664d9947bdb4d83783fc50a5f2";
const API_URL = "https://api.spoonacular.com/recipes/";
const dietType = "vegan";
const numOfResults = 10;
const sortDirection = "desc";

const TIME_OUT = 1000;

async function fetchWithTimeout(url) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), TIME_OUT),
  );

  const fetchData = fetch(url);

  const res = await Promise.race([fetchData, timeout]);

  if (!res.ok) throw new Error("Impossible to fetch data");

  const data = await res.json();
  return data;
}

export const fetchRecipesByQuery = createAsyncThunk(
  "recipes/fetchRecipesByQuery",
  async function ({ searchQuery, resultsAlreadyFetched = 0 }) {
    const url = `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}&addRecipeInformation=true&query=${searchQuery}&number=${numOfResults}&offset=${resultsAlreadyFetched}&sortdirection={sortDirection}`;

    try {
      return await fetchWithTimeout(url);
    } catch (error) {
      throw new Error(error.message || "Failed to fetch recipes");
    }
  },
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async function (id) {
    const url = `${API_URL}${id}/information?apiKey=${API_KEYS}`;
    try {
      return await fetchWithTimeout(url);
    } catch (error) {
      throw new Error(error.message || "Failed getting recipe details");
    }
  },
);
