import { useDispatch, useSelector } from "react-redux";

import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { handleImgError } from "../utils/helpers";
import { useEffect, useState } from "react";
import { fetchRecipeById } from "../services/apiRecipes";
import { BiSolidDish } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { ColorRing } from "react-loader-spinner";
import Fraction from "fraction.js";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiBookmark } from "react-icons/hi2";
import {
  addBookmark,
  removeBookmark,
} from "../features/bookmarks/bookmarksSlice.js";
import { useMoveBack } from "../hooks/useMoveBack.js";

function RecipeBox({ id }) {
  const dispatch = useDispatch();

  const moveBack = useMoveBack();

  const { currentRecipe, status } = useSelector((state) => state.recipe);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const [numOfGuests, setNumOfGuests] = useState(1);
  const isAlreadyBookmarked = bookmarks.some(
    (recipe) => recipe.id === currentRecipe.id,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (currentRecipe && currentRecipe.servings) {
      setNumOfGuests(currentRecipe.servings);
    }
  }, [currentRecipe]);

  const handleAddBookmark = () => {
    if (!isAlreadyBookmarked) {
      dispatch(addBookmark({ currentRecipe }));
    }
  };

  const {
    extendedIngredients: ingredients,
    image,
    sourceUrl,
    title,
    vegan,
    glutenFree,
    vegetarian,
    dairyFree,
    summary,
    readyInMinutes: cookingTime,
    servings,
    instructions,
  } = currentRecipe;

  if (status === "loading")
    return (
      <div className="flex h-1/2 w-full items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#698067", "#698067", "#698067", "#698067", "#698067"]}
        />
      </div>
    );

  if (!currentRecipe) return <></>;

  return (
    <div className="absolute flex h-full flex-col items-center gap-6 overflow-y-scroll rounded-md bg-primary-300 p-4 text-primary-900 sm:static sm:mx-8 sm:my-4 sm:p-8">
      <div className="flex items-center gap-6">
        <button className="text-xl sm:hidden" onClick={moveBack}>
          &larr;
        </button>
        <a className="text-2xl sm:text-3xl" href={sourceUrl}>
          {title}
        </a>
        <button
          className="flex aspect-square w-10 items-center justify-center rounded-full border-[1px] border-primary-900 bg-primary-100 duration-200 hover:scale-125 hover:bg-primary-900 hover:text-primary-100 hover:shadow-sm"
          onClick={
            isAlreadyBookmarked
              ? () => dispatch(removeBookmark(currentRecipe.id))
              : handleAddBookmark
          }
        >
          {isAlreadyBookmarked ? (
            <HiBookmark className="text-2xl" />
          ) : (
            <HiOutlineBookmark className="text-2xl" />
          )}
        </button>
      </div>
      <div className="flex min-h-max w-full flex-col gap-6 sm:grid sm:grid-cols-2">
        <div className="h-auto">
          <picture className="h-[50vh] w-full">
            <img
              src={image}
              className="min-h-full w-full rounded-md object-cover"
              alt={title}
              onError={handleImgError}
            />
          </picture>
        </div>
        <section className="flex flex-col justify-between gap-4 sm:gap-2">
          <div className="rounded-md bg-primary-200 p-6">
            <h2 className="mb-2 text-2xl">Description:</h2>
            <p
              className="text-ellipsis-multiline h-auto w-full overflow-hidden text-pretty"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></p>
          </div>
          <div className="flex flex-col items-center justify-between">
            {
              <div className="flex h-min w-full items-end justify-around pb-2 text-xl sm:text-2xl">
                {vegan && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 sm:h-20">
                    <LuVegan />
                    <p className="text-xs">Vegan</p>
                  </span>
                )}
                {vegetarian && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 sm:h-20">
                    <PiPottedPlant />
                    <p className="text-xs">Vegetarian</p>
                  </span>
                )}
                {glutenFree && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 sm:h-20">
                    <PiGrainsSlash />
                    <p className="text-xs">Gluten-free</p>
                  </span>
                )}
                {dairyFree && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 sm:h-20">
                    <LuMilkOff />
                    <p className="text-xs">Dairy-free</p>
                  </span>
                )}
              </div>
            }
          </div>
        </section>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md bg-primary-200 px-2 py-4 sm:flex-row sm:justify-around">
        <div className="flex items-center gap-2">
          <BiSolidDish />
          <div className="flex items-center justify-center gap-2">
            <span>Servings:</span>
            <button
              className="aspect-square w-6 rounded-full bg-primary-800 text-primary-100"
              onClick={() =>
                numOfGuests > 1 ? setNumOfGuests(numOfGuests - 1) : numOfGuests
              }
            >
              -
            </button>
            <input
              type="number"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              className="w-8 bg-primary-200 text-center"
            />
            <button
              className="aspect-square w-6 rounded-full bg-primary-800 text-primary-100"
              onClick={() => setNumOfGuests(+numOfGuests + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <RxLapTimer />
          <span>Cooking time: {cookingTime} min.</span>
        </div>
      </div>
      <div className="flex h-auto w-full flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-2">
        <div className="h-full w-full rounded-md bg-primary-200 p-4 pl-6">
          <h2 className="mb-2 text-2xl">Ingredients:</h2>
          <ul className="text-md grid w-full list-disc">
            {ingredients && ingredients.length > 0 ? (
              ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.amount
                    ? (() => {
                        const totalAmount =
                          (ingredient.amount / servings) * numOfGuests;
                        const integerPart = Math.trunc(totalAmount); // Parte intera
                        const decimalPart = totalAmount - integerPart; // Parte decimale

                        // Converto la parte decimale in frazione se presente
                        const fractionPart =
                          decimalPart > 0
                            ? new Fraction(decimalPart).toFraction(true)
                            : "";

                        // Combinazione di parte intera, frazionaria e unità
                        return `${integerPart > 0 ? integerPart : ""} ${fractionPart} ${
                          ingredient.unit ? `${ingredient.unit} of` : ""
                        } ${ingredient.name}`;
                      })()
                    : ingredient.name}
                </li>
              ))
            ) : (
              <p>No ingredients</p>
            )}
          </ul>
        </div>
        <div className="h-full w-full rounded-md bg-primary-200 p-4">
          <h2 className="mb-2 text-xl sm:text-2xl">Instructions:</h2>
          {instructions ? (
            <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
          ) : (
            <p>No instructions</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeBox;
