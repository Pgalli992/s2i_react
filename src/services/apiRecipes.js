import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEYS = "f8d2d348135f45feb07327844d99dc9c";
const API_URL = "https://api.spoonacular.com/recipes/";
const dietType = "vegan";
const numOfResults = 100;

const TIME_OUT = 1000;

export const fetchRecipesByQuery = createAsyncThunk(
  "recipes/fetchRecipesByQuery",
  async function (searchQuery) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), TIME_OUT),
    );

    const fetchData = fetch(
      `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}&addRecipeInformation=true&query=${searchQuery}&number=${numOfResults}`,
    );

    try {
      const res = await Promise.race([fetchData, timeout]);

      if (!res.ok) throw new Error("Impossible to fetch data");

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch recipes");
    }
  },
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async function (id) {
    const res = await fetch(`${API_URL}${id}/information?apiKey=${API_KEYS}`);
    if (!res.ok) throw Error("Failed getting recipe details");

    const data = await res.json();
    return data;
  },
);
