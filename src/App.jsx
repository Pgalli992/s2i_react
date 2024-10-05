import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SearchRecipes from "./pages/SearchRecipes";
import { Provider } from "react-redux";
import { store } from "./store";

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
        element: <SearchRecipes />,
      },
      { path: "/search_recipes/:recipeId", element: <SearchRecipes /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
