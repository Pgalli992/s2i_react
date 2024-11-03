import { useState } from "react";
import Badge from "./Badge";
import { HiOutlineBookmark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import RecipePreview from "./RecipePreview";
import { removeBookmark } from "../features/bookmarks/bookmarksSlice";

function Bookmarks() {
  const [isOpen, setIsOpen] = useState(false);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const dispatch = useDispatch();

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <button
        className="align-end relative flex w-auto items-center justify-center gap-1 justify-self-end rounded-full bg-primary-500 px-4 py-2 duration-150 hover:bg-primary-700 hover:text-primary-200"
        onClick={() => handleClick()}
      >
        <HiOutlineBookmark className="text-2xl" />
        <span>Bookmarks</span>
        <Badge numOfFavorites={bookmarks.length} />
      </button>
      {isOpen && (
        <div className="min-1/3 absolute right-6 top-20 flex max-h-[70vh] w-1/4 items-center overflow-y-auto overflow-x-hidden rounded-3xl border-2 border-primary-700 bg-primary-100 py-4 pr-2 text-start shadow-2xl">
          <ul className="flex w-full flex-col items-center">
            {bookmarks && bookmarks.length > 0 ? (
              bookmarks.map((recipe) => (
                <RecipePreview
                  recipe={recipe}
                  key={`preview-${recipe.id}`}
                  showDeleteButton={true}
                  callbackFunction={() => {
                    dispatch(removeBookmark(recipe.id));
                  }}
                />
              ))
            ) : (
              <p>No recipes available</p>
            )}
          </ul>
          {/* onClick={() => )} */}
        </div>
      )}
    </>
  );
}

export default Bookmarks;
