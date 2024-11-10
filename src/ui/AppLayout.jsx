import { Outlet } from "react-router";
import Header from "./Header";
import MainContainer from "./MainContainer";

function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden caret-transparent sm:grid sm:grid-rows-[auto_1fr]">
      {/* {isLoading && <Loader />} */}

      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}

export default AppLayout;
