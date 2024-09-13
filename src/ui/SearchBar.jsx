// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "" }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="text-md w-28 rounded-full bg-primary-400 px-4 py-2 text-primary-900 caret-primary-900 shadow-sm outline-none transition-all duration-300 placeholder:text-primary-700 focus:scale-105 focus:placeholder-transparent focus:shadow-md sm:h-10 sm:w-3/4"
      />
    </div>
  );
}

export default SearchBar;
