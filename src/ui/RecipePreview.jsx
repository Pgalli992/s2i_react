import image from "../../public/IMG_8188-1024x683.jpg";

function RecipePreview() {
  return (
    <div className="flex items-center gap-4 rounded-md bg-primary-100 px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary-200 hover:shadow-md">
      <img src={image} className="aspect-square w-24 rounded-full" />
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat saepe
        nisi quia.
      </h2>
    </div>
  );
}

export default RecipePreview;
