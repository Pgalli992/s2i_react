import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";
function Header() {
  return (
    <header className="grid grid-cols-header items-center justify-center bg-yellow-400 p-5">
      <Logo />
      <SearchBar placeholder="Search your vegan recipe..." />
      <NumResults />
    </header>
  );
}

export default Header;
