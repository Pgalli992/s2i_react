import NumResults from "./NumResults";
import RecipePrew from "./RecipePreview";

function Sidebar() {
  return (
    <aside className="flex h-screen flex-col gap-3 overflow-y-scroll p-3 shadow-xl">
      <RecipePrew />
      <NumResults />
    </aside>
  );
}

export default Sidebar;
