import Header from "./ui/Header";
import Logo from "./ui/Logo";
import NumResults from "./ui/NumResults";
import SearchBar from "./ui/SearchBar";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <SearchBar placeholder="Search your vegan recipe..." />
        <NumResults />
      </Header>
    </div>
  );
}

export default App;
