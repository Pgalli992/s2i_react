import RecipeBox from "../ui/RecipeBox";
import Sidebar from "../ui/Sidebar";
import { useParams } from "react-router";

function SearchRecipes() {
  let { recipeId } = useParams();

  return (
    <>
      <Sidebar />
      {recipeId && <RecipeBox id={recipeId} />}
    </>
  );
}

export default SearchRecipes;
