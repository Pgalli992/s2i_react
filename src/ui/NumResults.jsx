import { useSelector } from "react-redux";

function NumResults() {
  const { recipes } = useSelector((state) => state.recipe);

  console.log(recipes);

  return (
    <div className="fixed left-1/4 top-[95%] w-auto -translate-x-[120%] rounded-full bg-primary-300 px-4 py-2">
      <span>Recipes: {recipes.length}</span>
    </div>
  );
}

export default NumResults;
