import { Outlet } from "react-router";
import Header from "./Header";
import MainContainer from "./MainContainer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-2 caret-transparent">
      {/* {isLoading && <Loader />} */}

      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default AppLayout;
