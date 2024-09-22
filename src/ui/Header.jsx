import Favourites from "./Bookmarks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <header className="fixed z-50 mx-auto grid h-24 w-full grid-cols-header items-center justify-center bg-primary-300 px-6 text-center">
      <Logo />
      <SearchBar placeholder="Search your vegan recipe..." />
      <Favourites />
    </header>
  );
}

export default Header;
