import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  bookmarks: [],
  currentBookmarks: {},
  currentBookmarkId: "",
  error: "",
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const recipe = action.payload;
      const isAlreadyBookmarked = state.bookmarks.some(
        (item) => item.id === recipe.id,
      );

      if (!isAlreadyBookmarked) {
        state.bookmarks.push(recipe);
      }
    },
    removeBookmark: (state, action) => {
      const selectedRecipeId = action.payload;
      state.bookmarks = state.bookmarks.filter(
        (recipe) => recipe.id !== selectedRecipeId,
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
