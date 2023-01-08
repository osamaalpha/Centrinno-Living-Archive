import { Outlet, useLocation } from "react-router-dom";
import Grid from "../Grid";
import Intro from "../Intro";
import { LayoutWrapper } from "./styles";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Intro />
      <Grid relatedStories={[]}/>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
