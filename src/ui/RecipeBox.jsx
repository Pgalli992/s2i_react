import { useDispatch, useSelector } from "react-redux";

import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { handleImgError } from "../utils/helpers";
import { useEffect } from "react";
import { fetchRecipeById } from "../services/apiRecipes";

function RecipeBox({ id }) {
  const dispatch = useDispatch();
  const { currentRecipe, status } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
      console.log(id);
    }
  }, [id, dispatch]);

  const {
    author,
    extendedIngredients: ingredients,
    image,
    sourceUrl,
    title,
    vegan,
    glutenFree,
    vegetarian,
    dairyFree,
    summary,
  } = currentRecipe;

  if (status === "loading") return <p>Loading...</p>;

  if (!currentRecipe) return <></>;

  return (
    <div className="relative mx-8 my-4 flex h-max flex-col items-center gap-4 overflow-hidden rounded-md bg-primary-300 p-8 text-primary-900">
      <h1 className="text-3xl">{title}</h1>
      <div className="grid w-full grid-cols-2 gap-6 p-4">
        <picture className="h-[50vh] w-full">
          <img
            src={image}
            className="h-full w-full rounded-md object-cover"
            alt={title}
            onError={handleImgError}
          />
        </picture>
        <div className="flex h-full flex-col items-center justify-around p-4">
          <ul className="gap-x-auto text-md grid w-full list-disc grid-flow-col grid-rows-8 rounded-md bg-primary-200 p-6 pl-12">
            {ingredients && ingredients.length > 0 ? (
              ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))
            ) : (
              <p>No ingredients</p>
            )}
          </ul>
          {
            <div className="flex h-min w-full items-end justify-around text-2xl">
              {vegan && (
                <span className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-100">
                  <LuVegan />
                  <p className="text-xs">Vegan</p>
                </span>
              )}
              {vegetarian && (
                <span className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-100">
                  <PiPottedPlant />
                  <p className="text-xs">Vegetarian</p>
                </span>
              )}
              {glutenFree && (
                <span className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-100">
                  <PiGrainsSlash />
                  <p className="text-xs">Gluten-free</p>
                </span>
              )}
              {dairyFree && (
                <span className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-100">
                  <LuMilkOff />
                  <p className="text-xs">Dairy-free</p>
                </span>
              )}
            </div>
          }
        </div>
      </div>
      <div className="p-4">
        <p
          className="text-pretty"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></p>
      </div>
    </div>
  );
}

export default RecipeBox;
