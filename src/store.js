import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import searchReducer from "./features/search/searchSlice";
import recipeReducer from "./features/recipes/recipeSlice";
import bookmarksSlice from "./features/bookmarks/bookmarksSlice";
import storage from "redux-persist/lib/storage";

const bookmarksPersistConfig = { key: "bookmarks", storage };

const rootReducer = combineReducers({
  search: searchReducer,
  recipe: recipeReducer,
  bookmarks: persistReducer(bookmarksPersistConfig, bookmarksSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
