import { useState } from "react";
import { useNavigate } from "react-router";
import { getRecipeByQuery } from "../services/apiRecipes";
// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "" }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`search_recipes`);
    getRecipeByQuery(query);
    setQuery("");
  }

  return (
    <form
      className="group relative flex items-center justify-center gap-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="text-md w-28 rounded-full bg-primary-400 px-4 py-2 text-primary-900 caret-primary-900 shadow-sm outline-none transition-all duration-300 placeholder:text-primary-700 focus:scale-105 focus:placeholder-transparent focus:shadow-md sm:h-10 sm:w-3/4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="rounded-full bg-primary-900 px-4 py-2 text-primary-200 duration-300 group-focus-within:translate-x-1/4">
        Search...
      </button>
    </form>
  );
}

export default SearchBar;
