import { useNavigate } from "react-router";
import { handleImgError } from "../utils/helpers";
function RecipePreview({ recipe }) {
  const { title, image, id } = recipe;
  const navigate = useNavigate();

  function loadRecipeDetails({ id }) {
    navigate(`/search_recipes/${id}`);
  }

  return (
    <li
      className="flex w-[92%] items-center gap-4 rounded-md border-b-[1px] border-primary-200 bg-primary-100 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-primary-200 hover:shadow-md focus:bg-primary-200"
      onClick={(e) => {
        e.preventDefault();
        loadRecipeDetails({ id });
      }}
    >
      <img
        src={image}
        className="aspect-square w-24 rounded-full object-cover"
        alt={title}
        onError={handleImgError}
      />
      <h2>{title}</h2>
    </li>
  );
}

export default RecipePreview;
