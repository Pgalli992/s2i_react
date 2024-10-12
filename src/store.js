import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/recipes/searchSlice";
import recipeReducer from "./features/recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer,
  },
});
