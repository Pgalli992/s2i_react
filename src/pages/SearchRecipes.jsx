import { getRecipeByQuery } from "../services/apiRecipes";
import RecipeBox from "../ui/RecipeBox";
import Sidebar from "../ui/Sidebar";

function SearchRecipes() {
  return (
    <>
      <Sidebar />
      <RecipeBox />
    </>
  );
}

export async function loader() {
  const recipes = await getRecipeByQuery();
  return recipes;
}

export default SearchRecipes;
