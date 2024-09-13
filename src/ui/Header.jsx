import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";
function Header() {
  return (
    <header className="fixed mx-auto grid h-24 w-full grid-cols-header items-center justify-center bg-primary-300 px-6 text-center">
      <Logo />
      <SearchBar placeholder="Search your vegan recipe..." />
      <NumResults />
    </header>
  );
}

export default Header;
