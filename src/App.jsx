import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./ui/Header";
// import Logo from "./ui/Logo";
// import NumResults from "./ui/NumResults";
// import SearchBar from "./ui/SearchBar";
import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SearchRecipes from "./pages/SearchRecipes";

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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
