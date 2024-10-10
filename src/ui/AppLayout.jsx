import { Outlet } from "react-router";
import Header from "./Header";
import MainContainer from "./MainContainer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] overflow-hidden caret-transparent">
      {/* {isLoading && <Loader />} */}

      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default AppLayout;
