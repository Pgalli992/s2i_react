import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] caret-transparent">
      {/* {isLoading && <Loader />} */}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {/* <CartOverview /> */}
    </div>
  );
}

export default AppLayout;
