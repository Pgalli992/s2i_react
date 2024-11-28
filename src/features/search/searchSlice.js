import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipesByQuery } from "../../services/apiRecipes";

const initialState = {
  status: "idle",
  recipes: [],
  currentRecipe: {},
  totalResults: 0,
  error: "",
};

export const searchSlice = createSlice({
  name: "searchedRecipe",
  initialState,
  reducers: {
    clearRecipes: (state) => {
      state.recipes = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipesByQuery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipesByQuery.fulfilled, (state, action) => {
        state.recipes = [...state.recipes, ...action.payload.results];
        state.status = "idle";
        state.totalResults = action.payload.totalResults;
        console.log(state.totalResults);
      })
      .addCase(fetchRecipesByQuery.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { clearRecipes } = searchSlice.actions;

export default searchSlice.reducer;
