import { useState } from "react";
import { useNavigate } from "react-router";
import { getRecipeByQuery } from "../services/apiRecipes";
import { HiMagnifyingGlass } from "react-icons/hi2";
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
        className="text-md relative w-full rounded-full bg-primary-400 px-[7%] text-primary-900 caret-primary-900 shadow-sm outline-none transition-all duration-300 placeholder:text-primary-700 focus:scale-105 focus:pl-6 focus:placeholder-transparent focus:shadow-md sm:h-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="absolute left-2 flex aspect-square h-full items-center justify-center rounded-full bg-transparent text-primary-700 transition-all duration-500 group-focus-within:left-[100%] group-focus-within:-translate-x-1/2 group-focus-within:scale-105 group-focus-within:bg-primary-900 group-focus-within:text-primary-200">
        <HiMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBar;
