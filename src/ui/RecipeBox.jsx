import { useDispatch, useSelector } from "react-redux";

import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";
import { handleImgError } from "../utils/helpers";
import { useEffect } from "react";
import { fetchRecipeById } from "../services/apiRecipes";
import { BiSolidDish } from "react-icons/bi";
import { RxLapTimer } from "react-icons/rx";
import { ColorRing } from "react-loader-spinner";

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
      <div className="flex w-full flex-col justify-around">
        <div className="flex items-center gap-2">
          <RxLapTimer />
          <span>Cooking time: {cookingTime} min.</span>
        </div>

        <div className="flex items-center gap-2">
          <BiSolidDish />
          <span>Servings: {servings}</span>
        </div>
      </div>
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
        <div className="flex h-full flex-col items-center justify-between">
          <div className="w-full rounded-md bg-primary-200 p-6 pl-12">
            <h2 className="mb-2 text-2xl text-primary-900">Ingredients:</h2>
            <ul className="gap-x-auto text-md grid w-full list-disc grid-flow-col grid-rows-8">
              {ingredients && ingredients.length > 0 ? (
                ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))
              ) : (
                <p>No ingredients</p>
              )}
            </ul>
          </div>
          {
            <div className="flex h-min w-full items-end justify-around pb-6 text-2xl">
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
      <section className="p-4">
        <h2 className="mb-2 text-2xl text-primary-900">Description:</h2>
        <p
          className="text-pretty"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></p>
      </section>
      <p className="h-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi nihil
        facere laudantium neque illum dolor eveniet rem beatae aut ipsam
        commodi, ad voluptate aliquid sint sunt corporis. Enim eligendi
        consectetur eum repellat ea ex quasi, sunt ullam eius dicta ab quia
        totam, laudantium aliquam in perspiciatis, officia nam alias est sequi
        necessitatibus. Blanditiis cupiditate autem saepe odio harum voluptate
        dicta explicabo. Doloremque reprehenderit maiores quam cum provident!
        Corrupti reprehenderit aspernatur nam incidunt quaerat labore sunt,
        cupiditate ea ut aliquid et harum! Sed earum possimus molestias ab,
        officiis provident aperiam ipsum minus assumenda, blanditiis, natus iste
        eius tenetur iure. Eligendi.
      </p>
    </div>
  );
}

export default RecipeBox;
