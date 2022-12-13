// import { IntroSection } from "./styles";

import { Link } from "react-router-dom";
import { NavigationBox } from "./styles";

const Navigation = () => {
  return (
    <NavigationBox>
      <div>
        <Link to={`/about`}>About Centrinno</Link>{" "}
      </div>
      <div>
        <Link to={`/taxonomy`}>Taxonomy</Link>
      </div>
      <button>Close</button>
    </NavigationBox>
  );
};

export default Navigation;
