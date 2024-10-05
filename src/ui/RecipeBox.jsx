import { useSelector } from "react-redux";

function RecipeBox() {
  const { currentRecipe, status } = useSelector((state) => state.recipe);

  const {
    author,
    extendedIngredients: ingredients,
    image,
    sourceUrl,
    title,
  } = currentRecipe;

  if (status === "loading") return <p>Loading...</p>;

  if (!currentRecipe) return <></>;

  return (
    <div className="relative flex flex-col items-center gap-6 overflow-y-scroll p-4">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex w-full items-center justify-around rounded-md bg-primary-400 py-4">
        <img
          src={image}
          className="aspect-square w-1/3 rounded-md object-cover"
        />
        <ul className="grid list-disc grid-cols-2 gap-x-8 text-2xl">
          {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                <p>{ingredient.name}</p>
              </li>
            ))
          ) : (
            <p>No ingredients</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default RecipeBox;
