const API_KEYS = "f8d2d348135f45feb07327844d99dc9c";
const API_URL = "https://api.spoonacular.com/recipes/";
const dietType = "vegan";

export async function getRecipeByQuery({ query = "" }) {
  const res = await fetch(
    `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}query=${query}`,
  );
  if (!res.ok) throw Error("Failed getting recipes");

  const { data } = await res.json();
  console.log(data);
  return data;
}
