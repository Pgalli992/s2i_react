import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipeById } from "../../services/apiRecipes";

const initialState = {
  status: "idle",
  selectetId: null,
  currentRecipe: {},
  error: "",
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.currentRecipe = action.payload;
        state.status = "idle";
      })

      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export default recipeSlice.reducer;
