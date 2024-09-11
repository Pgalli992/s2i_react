import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./ui/Header";
// import Logo from "./ui/Logo";
// import NumResults from "./ui/NumResults";
// import SearchBar from "./ui/SearchBar";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
