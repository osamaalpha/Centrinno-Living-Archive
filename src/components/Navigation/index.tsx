// import { IntroSection } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../styles";
import { NavigationBox } from "./styles";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavigationBox className={`${openMenu ? "open" : "closed"}`}>
      <div className="container">
        <div className="menu-items-container">
          <Link to={`/`}>
            <Button variant="alt">Home</Button>
          </Link>
          <Link to={`/about`}>
            <Button variant="alt">About Centrinno</Button>
          </Link>
          <Link to={`/taxonomy`}>
            <Button variant="alt">Taxonomy</Button>
          </Link>
        </div>
      </div>
      <Button variant="default" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? "Close" : "Menu"}
      </Button>
    </NavigationBox>
  );
};

export default Navigation;
