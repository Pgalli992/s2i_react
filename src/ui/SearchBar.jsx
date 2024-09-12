// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "" }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="text-primary-800 placeholder:text-primary-700 bg-primary-400 w-28 rounded-full px-4 py-2 text-sm shadow-sm outline-none transition-all duration-300 focus:scale-105 focus:shadow-md sm:h-10 sm:w-3/4"
      />
    </div>
  );
}

export default SearchBar;
