import { useSelector } from "react-redux";
import NumResults from "./NumResults";
import RecipePreview from "./RecipePreview";

function Sidebar({ onSelectRecipe }) {
  const { recipes, status } = useSelector((state) => state.recipe);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <aside className="flex h-full flex-col overflow-hidden shadow-xl">
      <ul className="h-full w-full overflow-y-auto">
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipePreview
              recipe={recipe}
              key={recipe.id}
              onSelectRecipe={onSelectRecipe}
            />
          ))
        ) : (
          <p>No recipes available</p>
        )}
      </ul>
      {recipes.length > 0 && <NumResults />}
    </aside>
  );
}

export default Sidebar;
