import { Outlet } from "react-router-dom";
import Grid from "../Grid";

const Layout = () => {
  return (
    <main className="layout">
      <Grid />
      <Outlet />
    </main>
  );
};

export default Layout;
