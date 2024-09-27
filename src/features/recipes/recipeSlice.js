import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchRecipesByQuery = createAsyncThunk(
  "recipes/fetchByQuery",
  async (query, thunkApi) => {
    const response = await recipeAPI.fetchByQuery(query);
    return response.data;
  },
);

const initialState = {
  recipes: [],
  isLoading: false,
  currentRecipe: {},
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    searchByQuery: (state, action) => (state.recipes = action.payload),
  },
});

export const { searchByQuery } = recipesSlice.reducer;

export default recipesSlice.reducer;
