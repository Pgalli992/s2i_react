import { HiBookmark, HiOutlineBookmark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { isRecipeBookmarked } from "../utils/helpers";
import {
  addBookmark,
  removeBookmark,
} from "../features/bookmarks/bookmarksSlice";

function ToggleBookmark({ bookmarks, recipe }) {
  const dispatch = useDispatch();
  const isAlreadyBookmarked = isRecipeBookmarked({ bookmarks, recipe });

  const handleToggleBookmark = () => {
    isAlreadyBookmarked
      ? dispatch(removeBookmark(recipe.id))
      : dispatch(addBookmark(recipe));
  };

  return (
    <button
      className="flex aspect-square w-10 items-center justify-center rounded-full border-[1px] border-primary-900 bg-primary-100 duration-200 hover:scale-125 hover:bg-primary-900 hover:text-primary-100 hover:shadow-sm"
      onClick={handleToggleBookmark}
    >
      {isAlreadyBookmarked ? (
        <HiBookmark className="text-2xl" />
      ) : (
        <HiOutlineBookmark className="text-2xl" />
      )}
    </button>
  );
}

export default ToggleBookmark;
