import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SearchedRecipes from "./pages/SearchedRecipes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search_recipes",
        element: <SearchedRecipes />,
      },
      { path: "/search_recipes/:recipeId", element: <SearchedRecipes /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
