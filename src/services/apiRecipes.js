import { createAsyncThunk } from "@reduxjs/toolkit";
// export async function getRecipeByQuery({ searchQuery }) {
//   try {
//     const res = await axios.get(
//       `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}&query=${searchQuery}&number=${numOfResults}`,
//     );
//     const data = await res.data;
//     console.log(searchQuery);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error("Failed getting recipes", err);
//   }
// }

// export async function getRecipeDatails({ id = "" }) {
//   const res = await fetch(`${API_URL}/${id}/information?apiKey=${API_KEYS}`);
//   if (!res.ok) throw Error("Failed getting recipe details");

//   const { data } = await res.json();
//   console.log(data);
//   return data;
// }

const API_KEYS = "f8d2d348135f45feb07327844d99dc9c";
const API_URL = "https://api.spoonacular.com/recipes/";
const dietType = "vegan";
const numOfResults = 100;

export const fetchRecipesByQuery = createAsyncThunk(
  "recipes/fetchRecipesByQuery",
  async function (searchQuery) {
    const res = await fetch(
      `${API_URL}complexSearch?apiKey=${API_KEYS}&diet=${dietType}&addRecipeInformation=true&query=${searchQuery}&number=${numOfResults}`,
    );

    if (!res.ok) throw new Error("Impossible to fetch data");

    const data = await res.json();
    console.log(data.results);
    return data;
  },
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async function (id) {
    const res = await fetch(`${API_URL}${id}/information?apiKey=${API_KEYS}`);
    if (!res.ok) throw Error("Failed getting recipe details");

    const data = await res.json();
    console.log(data);
    return data;
  },
);
