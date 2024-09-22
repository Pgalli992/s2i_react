import image from "../../public/IMG_8188-1024x683.jpg";

function RecipeBox() {
  return (
    <div className="flex flex-col items-center overflow-y-scroll p-4">
      <h1>Toasts</h1>
      <div>
        <img src={image} className="h-1/3 w-auto rounded-md" />
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeBox;
