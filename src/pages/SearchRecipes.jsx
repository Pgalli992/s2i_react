import { useState } from "react";
import RecipeBox from "../ui/RecipeBox";
import Sidebar from "../ui/Sidebar";

function SearchRecipes() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectRecipe({ id }) {
    setSelectedId(id);
  }

  return (
    <>
      <Sidebar onSelectRecipe={handleSelectRecipe} />
      <RecipeBox />
    </>
  );
}

export default SearchRecipes;
