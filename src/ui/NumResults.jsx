import { useSelector } from "react-redux";

function NumResults() {
  const { recipes, totalResults } = useSelector((state) => state.search);

  return (
    <span className="fixed left-full top-[92%] w-max -translate-x-[120%] rounded-full bg-primary-300 px-4 py-2 md:left-1/4">
      Recipes: {recipes.length}/ {totalResults}
    </span>
  );
}

export default NumResults;
