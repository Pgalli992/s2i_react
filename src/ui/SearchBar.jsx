// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "" }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-2/3 sm:focus:w-3/4"
      />
    </div>
  );
}

export default SearchBar;
