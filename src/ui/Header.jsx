import Favourites from "./Bookmarks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="fixed z-50 mx-auto grid h-24 w-full grid-cols-header items-center justify-center gap-y-2 bg-primary-300 px-2 py-2 text-center sm:px-6">
      <Logo />
      <SearchBar placeholder="Search your vegan recipe..." />
      <Favourites />
    </header>
  );
}

export default Header;
