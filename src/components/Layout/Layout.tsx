import { Outlet, useLocation } from "react-router-dom";
import Grid from "../Grid";
import Intro from "../Intro";
import { LayoutWrapper } from "./styles";

const Layout = () => {
  const location = useLocation();
  const isStoryPage = location.pathname.includes("/story/");
  console.log(isStoryPage);
  return (
    <LayoutWrapper className={`${isStoryPage && "blocked"}`}>
      <Intro />
      <Grid />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
