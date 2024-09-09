// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "" }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="focus:border-primary-700 focus:plac h-auto w-1/2 rounded-xl border-2 px-2 py-1 duration-500 focus:w-2/3 focus:placeholder-slate-300 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
