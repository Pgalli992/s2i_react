import Favourites from "./Bookmarks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="fixed z-50 mx-auto grid h-24 w-full grid-cols-2 items-center justify-center gap-2 gap-y-2 bg-primary-300 px-2 py-2 text-center md:grid-cols-header md:px-6">
      <Logo />
      <SearchBar placeholder="Search your vegan recipe..." />
      <Favourites />
    </header>
  );
}

export default Header;
