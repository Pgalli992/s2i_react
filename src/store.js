import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import recipeReducer from "./features/recipes/recipeSlice";
import bookmarksReducer from "./features/bookmarks/bookmarksSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    recipe: recipeReducer,
    bookmarks: bookmarksReducer,
  },
});
