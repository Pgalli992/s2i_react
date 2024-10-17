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

function RecipeBox({ id }) {
  const dispatch = useDispatch();
  const { currentRecipe, status } = useSelector((state) => state.recipe);

  const [numOfGuests, setNumOfGuests] = useState(1);

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
    istructions,
  } = currentRecipe;

  if (status === "loading")
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#698067"]}
      />
    );

  if (!currentRecipe) return <></>;

  return (
    <div className="relative mx-8 my-4 flex flex-col items-center gap-4 overflow-y-auto rounded-md bg-primary-300 p-8 text-primary-900">
      <a className="text-3xl" href={sourceUrl}>
        {title}
      </a>
      <div className="grid min-h-max w-full grid-cols-2 gap-6">
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
        <section className="flex flex-col justify-between gap-2">
          <div className="rounded-md bg-primary-200 p-6">
            <h2 className="mb-2 text-2xl text-primary-900">Description:</h2>
            <p
              className="text-ellipsis-multiline h-auto w-full overflow-hidden text-pretty"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></p>
          </div>
          <div className="flex flex-col items-center justify-between">
            {
              <div className="flex h-min w-full items-end justify-around pb-2 text-2xl">
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
        </section>
      </div>
      <div className="flex w-full justify-around rounded-md bg-primary-200 px-2 py-4">
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
      <div className="grid-col-2 grid w-full p-6 pl-12">
        <h2 className="mb-2 text-2xl text-primary-900">Ingredients:</h2>
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
    </div>
  );
}

export default RecipeBox;
