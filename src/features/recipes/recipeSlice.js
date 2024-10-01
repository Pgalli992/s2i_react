import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRecipeById,
  fetchRecipesByQuery,
} from "../../services/apiRecipes";

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
      })
      .addCase(fetchRecipeById.pending, (state) => (state.status = "loading"))
      .addCase(
        fetchRecipeById.fulfilled,
        (state, action) => (state.currentRecipe = action.payload.results),
      )
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { setSearchQuery } = recipesSlice.reducer;

export default recipesSlice.reducer;
