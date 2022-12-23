// import { IntroSection } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../styles";
import { NavigationBox } from "./styles";

const Navigation = () => {
  return (
    <NavigationBox>
      <Button variant="alt">
        <Link to={`/`}>Home</Link>
      </Button>
      <Button variant="alt">
        <Link to={`/about`}>About Centrinno</Link>
      </Button>
      <Button variant="alt">
        <Link to={`/taxonomy`}>Taxonomy</Link>
      </Button>
      <Button variant="default">Close</Button>
    </NavigationBox>
  );
};

export default Navigation;
