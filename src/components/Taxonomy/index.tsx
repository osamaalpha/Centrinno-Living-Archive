import { Outlet, useLocation } from "react-router-dom";
import Results from "../Results";
import { TaxonomyPage } from "./styles";
import {} from "react-router-dom";

const Taxonomy = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <TaxonomyPage>
      <Outlet />
      {location.pathname === "/taxonomy" && (
        <>
          <div className="default-page">
            <h2>Select a Tag or Category from the list.</h2>
          </div>
          <Results limit={40} />
        </>
      )}
    </TaxonomyPage>
  );
};

export default Taxonomy;
