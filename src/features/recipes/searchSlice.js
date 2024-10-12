import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByQuery } from "../../services/apiRecipes";

const initialState = {
  status: "idle",
  recipes: [],
  currentRecipe: {},
  error: "",
};

export const searchSlice = createSlice({
  name: "searchedRecipe",
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

export default searchSlice.reducer;
