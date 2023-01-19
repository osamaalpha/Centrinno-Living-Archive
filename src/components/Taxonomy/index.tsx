import { Outlet, useLocation } from "react-router-dom";
import Results from "../Results";
import { TaxonomyPage } from "./styles";
import {} from "react-router-dom";
import Grid from "../Grid";
import { Search } from "../Search";
import { useEffect, useState } from "react";
import { IContext, IStory } from "../../types/types";
import { SearchStories } from "../../helpers/storySearchHelper";
import { useCentrinnoContext } from "../../context/storyContext";

const Taxonomy = () => {
  const location = useLocation();
  const { tags, stories, categories } = useCentrinnoContext() as IContext;
  const [searchResultStories, setSearchResultStories] = useState<IStory[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length >= 4) {
      setSearchResultStories(
        SearchStories(inputValue.toLocaleLowerCase(), stories)
      );
    } else {
      setSearchResultStories([]);
    }
  }, [inputValue, stories]);

  return (
    <TaxonomyPage>
      <Outlet />
      {location.pathname === "/taxonomy" && (
        <>
          <div className="default-page">
            <h2>Select a Tag or Category from the list.</h2>
          </div>
          <Search inputValue={inputValue} setInputValue={setInputValue} />
          <Results limit={40} />
          <Grid relatedStories={searchResultStories} />
        </>
      )}
    </TaxonomyPage>
  );
};

export default Taxonomy;
