import { useDispatch, useSelector } from "react-redux";
import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { handleImgError } from "../utils/helpers";
import { useEffect, useRef, useState } from "react";
import { fetchRecipeById } from "../services/apiRecipes";
import { BiSolidDish } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { ColorRing } from "react-loader-spinner";
import { useMoveBack } from "../hooks/useMoveBack.js";
import Ingredient from "./Ingredient.jsx";
import ToggleBookmark from "./ToggleBookmark.jsx";
import { useNavigate } from "react-router";
import Error from "../pages/Error.jsx";

function RecipeBox({ id }) {
  const [numOfGuests, setNumOfGuests] = useState(1);
  const navigate = useNavigate();

  const { currentRecipe, status } = useSelector((state) => state.recipe);
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks || []);
  const {
    extendedIngredients: ingredients = [],
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
  } = currentRecipe || {};

  const dispatch = useDispatch();
  const moveBack = useMoveBack();
  const previousIdRef = useRef();

  useEffect(() => {
    if (id && id !== previousIdRef.current) {
      // prevent duplicate API calls on first click on Sidebar or Bookmarks
      dispatch(fetchRecipeById(id));
      previousIdRef.current = id;
    }
  }, [id, dispatch]);

  // setting number of servings as recived from api
  useEffect(() => {
    if (currentRecipe?.servings) {
      setNumOfGuests(currentRecipe.servings);
    }
  }, [currentRecipe]);

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

  if (status === "error") return <Error />;

  return (
    <div className="absolute flex h-full flex-col items-center gap-6 overflow-y-scroll rounded-md bg-primary-300 p-4 text-primary-900 md:static md:mx-8 md:my-4 md:p-8">
      <div className="flex items-center gap-6">
        <button className="text-xl md:hidden" onClick={moveBack}>
          &larr;
        </button>
        <a className="text-2xl md:text-3xl" href={sourceUrl}>
          {title}
        </a>
        <ToggleBookmark bookmarks={bookmarks} recipe={currentRecipe} />
      </div>
      <div className="flex min-h-max w-full flex-col gap-6 md:grid lg:grid-cols-2">
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
        <section className="flex flex-col justify-between gap-4 md:gap-2">
          <div className="rounded-md bg-primary-200 p-6">
            <h2 className="mb-2 text-2xl">Description:</h2>
            <p
              className="text-ellipsis-multiline h-auto w-full overflow-hidden text-pretty"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></p>
          </div>
          <div className="flex flex-col items-center justify-between">
            {
              <div className="flex h-min w-full items-end justify-around pb-2 text-xl md:text-2xl">
                {vegan && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 md:h-20">
                    <LuVegan />
                    <p className="text-xs">Vegan</p>
                  </span>
                )}
                {vegetarian && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 md:h-20">
                    <PiPottedPlant />
                    <p className="text-xs">Vegetarian</p>
                  </span>
                )}
                {glutenFree && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 md:h-20">
                    <PiGrainsSlash />
                    <p className="text-xs">Gluten-free</p>
                  </span>
                )}
                {dairyFree && (
                  <span className="flex aspect-square h-16 flex-col items-center justify-center rounded-full bg-primary-100 md:h-20">
                    <LuMilkOff />
                    <p className="text-xs">Dairy-free</p>
                  </span>
                )}
              </div>
            }
          </div>
        </section>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-md bg-primary-200 px-2 py-4 md:flex-row md:justify-around">
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
      <div className="flex h-auto w-full flex-col items-center justify-center gap-6 md:grid lg:grid-cols-2">
        <div className="h-full w-full rounded-md bg-primary-200 p-4 pl-6">
          <h2 className="mb-2 text-2xl">Ingredients:</h2>
          <ul className="text-md grid w-full list-disc">
            {ingredients && ingredients.length > 0 ? (
              ingredients.map((ingredients) => (
                <Ingredient
                  key={ingredients.id}
                  ingredients={ingredients}
                  servings={servings}
                  numOfGuests={numOfGuests}
                />
              ))
            ) : (
              <p>No ingredients</p>
            )}
          </ul>
        </div>
        <div className="h-full w-full rounded-md bg-primary-200 p-4">
          <h2 className="mb-2 text-xl md:text-2xl">Instructions:</h2>
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
