import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEYS = "f8d2d348135f45feb07327844d99dc9c";
const API_URL = "https://api.spoonacular.com/recipes/";
const dietType = "vegan";
const numOfResults = 100;

export const fetchRecipesByQuery = createAsyncThunk(
  "recipes/fetchRecipesByQuery",
  async function (searchQuery) {
    const res = await fetch(
      `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}&query=${searchQuery}&number=${numOfResults}`,
    );

    if (!res.ok) throw new Error("Impossible to fetch data");

    const data = await res.json();
    console.log(data.results);
    return data;
  },
);

const initialState = {
  status: "idle",
  recipes: [],
  currentRecipe: {},
  error: "",
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipesByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipesByQuery.fulfilled, (state, action) => {
        state.recipes = action.payload.results;
        state.status = "idle";
      })
      .addCase(fetchRecipesByQuery.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { setSearchQuery } = recipesSlice.reducer;

export default recipesSlice.reducer;
