import Badge from "./Badge";

function Bookmarks() {
  return (
    <div className="align-end relative w-auto justify-self-end rounded-full bg-primary-500 px-4 py-2 duration-150 hover:bg-primary-700 hover:text-primary-200">
      <span>Bookmarks</span>
      <Badge />
    </div>
  );
}

export default Bookmarks;
