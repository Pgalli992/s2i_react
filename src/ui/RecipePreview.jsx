import noImg from "../assets/no_img.jpg";
function RecipePreview(recipe) {
  const { title, image } = recipe.recipe;

  const handleImgError = function (e) {
    e.target.src = noImg;
  };

  return (
    <li className="flex items-center gap-4 rounded-md bg-primary-100 px-4 py-2 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary-200 hover:shadow-md">
      <img
        src={image}
        className="aspect-square w-24 rounded-full object-cover"
        alt={title}
        onError={handleImgError}
      />
      <h2>{title}</h2>
    </li>
  );
}

export default RecipePreview;
