import Badge from "./Badge";
import { HiOutlineBookmark } from "react-icons/hi2";

function Bookmarks() {
  return (
    <div className="align-end relative flex w-auto items-center justify-center gap-1 justify-self-end rounded-full bg-primary-500 px-4 py-2 duration-150 hover:bg-primary-700 hover:text-primary-200">
      <HiOutlineBookmark className="text-2xl" />
      <span>Bookmarks</span>
      <Badge />
    </div>
  );
}

export default Bookmarks;
