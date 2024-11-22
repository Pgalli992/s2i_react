import { useNavigate } from "react-router";
import { handleImgError, isRecipeBookmarked } from "../utils/helpers";
import Button from "./Button";
import ToggleBookmark from "./ToggleBookmark";
import { HiBookmark } from "react-icons/hi2";
import { useSelector } from "react-redux";
function RecipePreview({
  recipe,
  callbackFunction = null,
  showDeleteButton = false,
  showBookmarkicon = false,
}) {
  const { title, image, id } = recipe;
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks || []);
  const isAlreadyBookmarked = isRecipeBookmarked({ bookmarks, recipe });
  const navigate = useNavigate();

  function loadRecipeDetails(id) {
    navigate(`/search_recipes/${id}`);
  }

  return (
    <li
      className="flex w-[92%] items-center justify-between gap-4 rounded-xl border-b-[1px] border-primary-200 bg-primary-100 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-primary-200 hover:shadow-md focus:bg-primary-200"
      onClick={(e) => {
        e.preventDefault();
        loadRecipeDetails(id);
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          className="aspect-square w-24 rounded-full object-cover"
          alt={title}
          onError={handleImgError}
        />
        <h2>{title}</h2>
      </div>
      {showDeleteButton && (
        <div className="right-4">
          <Button
            text="&times;"
            onClick={(e) => {
              e.stopPropagation();
              if (callbackFunction) callbackFunction();
            }}
          />
        </div>
      )}
      {showBookmarkicon && isAlreadyBookmarked && (
        <HiBookmark className="text-2xl" />
      )}
    </li>
  );
}

export default RecipePreview;
