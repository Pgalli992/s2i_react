import { useSelector } from "react-redux";

import noImg from "../assets/img/mockup.jpg";
import { LuMilkOff } from "react-icons/lu";
import { PiGrainsSlash } from "react-icons/pi";
import { LuVegan } from "react-icons/lu";
import { PiPottedPlant } from "react-icons/pi";

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
    <div className="relative flex h-full flex-col items-center gap-6 overflow-y-scroll p-4">
      <h1 className="text-3xl">Il caffè della peppina</h1>
      <div className="grid h-2/5 w-full grid-cols-2 py-4">
        <picture className="w-full overflow-hidden">
          <img
            src={noImg}
            className="aspect-square h-full rounded-md object-cover object-center"
          />
        </picture>
        <div className="flex flex-col justify-center">
          <div className="self-center">
            <ul className="list-disc gap-x-4 text-wrap text-lg">
              {/* {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <li key={ingredient.id}>
              {ingredient.name}
              </li>
              ))
              ) : (
                <p>No ingredients</p>
                )} */}
              <li>pane</li>
              <li>sale</li>
              <li>acqua</li>
              <li>pomodoro</li>
              <li>cipolla</li>
              <li>banana</li>
              <li>latte</li>
              <li>pepe</li>
              <li>curcuma</li>
            </ul>
          </div>
          {
            <div className="flex w-full justify-around gap-4 text-2xl text-primary-900">
              <span className="flex aspect-square flex-col items-center justify-center rounded-full">
                <LuVegan />
                <p className="text-xs">Vegan</p>
              </span>
              <span className="flex aspect-square flex-col items-center justify-center rounded-full">
                <PiPottedPlant />
                <p className="text-xs">Vegetarian</p>
              </span>
              <span className="flex aspect-square flex-col items-center justify-center rounded-full">
                <PiGrainsSlash />
                <p className="text-xs">Gluten-free</p>
              </span>
              <span className="flex aspect-square flex-col items-center justify-center rounded-full">
                <LuMilkOff />
                <p className="text-xs">Lactos-free</p>
              </span>
            </div>
          }
        </div>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          porro, beatae quaerat corrupti voluptates error ipsum reprehenderit
          possimus quas veritatis consequatur sequi voluptatum doloremque eaque
          sunt ad totam voluptatem laboriosam rem eius dolor blanditiis esse
          nesciunt! Enim excepturi aspernatur doloribus aliquid beatae libero
          minima asperiores dolorem voluptas totam vero suscipit omnis
          doloremque, culpa praesentium dicta, quia tempora pariatur debitis ad
          assumenda illum esse temporibus! Explicabo quis doloribus ratione
          placeat molestias qui earum ullam ad, quibusdam dolores iure iste
          accusamus nobis tempore. In odio provident a numquam hic blanditiis
          saepe quisquam suscipit architecto sunt laudantium autem impedit totam
          id ipsam nesciunt eum quibusdam pariatur, omnis minima facere. Nostrum
          nisi fugit eum ipsa, quo officia explicabo repellendus velit non
          consequuntur atque ex laboriosam error harum nulla earum suscipit
          aliquam officiis, eos rem debitis? Voluptates impedit consequuntur
          minima harum voluptate explicabo optio doloremque eum a repudiandae
          exercitationem labore eos, odit similique natus. Magni placeat
          accusamus nihil rerum ipsa, illum facilis debitis? Facilis earum
          corrupti expedita excepturi placeat odio nulla ad, necessitatibus unde
          perspiciatis quo voluptatum hic iure enim laudantium doloribus esse
          neque recusandae qui quia cupiditate ex repudiandae autem! Consectetur
          qui excepturi provident, deserunt non perspiciatis impedit hic
          obcaecati ducimus est nisi amet.
        </p>
      </div>
    </div>
  );
}

export default RecipeBox;
