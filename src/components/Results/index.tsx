import { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { slugify } from "../../helpers/slugify";
import { SearchStories } from "../../helpers/storySearchHelper";
import { useReleatedStories } from "../../hooks/useReleatedStories";
import { Button } from "../../styles";
import { IContext, IResult, IStory, ITag } from "../../types/types";
import Grid from "../Grid";

interface ResultsProps {
  limit: number;
}

const Results = ({ limit }: ResultsProps) => {
  const location = useLocation();
  const { tags, stories, categories } = useCentrinnoContext() as IContext;
  const [inputValue, setInputValue] = useState("");
  const [searchResultStories, setSearchResultStories] = useState<IStory[]>([]);

  let filterResults: IResult[] = [];

  tags.forEach(
    (value: ITag, index, self) =>
      index === self.findIndex((t: ITag) => t.tag === value.tag) &&
      filterResults.push({ result: value.tag, isTag: true })
  );

  tags.filter(
    (value: ITag, index, self) =>
      index ===
        self.findIndex(
          (t: ITag) => t.category.category === value.category.category
        ) &&
      filterResults.push({ result: value.category.category, isTag: false })
  );

  const [prevResults, setPrevResults] = useState(filterResults);

  const shuffleResults = (results: IResult[]) =>
    results
      .sort((a: IResult, b: IResult) => 0.5 - Math.random())
      .slice(0, limit);

  const [shuffledResults, setShuffledResults] = useState<IResult[]>([]);

  useEffect(() => {
    if (!shuffledResults.length && prevResults !== filterResults) {
      setShuffledResults(shuffleResults(filterResults));
    }
  }, [filterResults]);

  useEffect(() => {
    if (!shuffledResults.length && prevResults !== filterResults) {
      setShuffledResults(shuffleResults(filterResults));
    }
    setSearchResultStories([]);
  }, []);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue.length >= 4) {
      setSearchResultStories(SearchStories(inputValue.toLocaleLowerCase(), stories));
    } else {
      setSearchResultStories([]);
    }
  }, [inputValue, stories]);

  const isTaxonomy = location.pathname === "/taxonomy";
  // useEffect(() => {
  //   setShuffledResults(
  //     filterResults
  //       .sort((a: IResult, b: IResult) => 0.5 - Math.random())
  //       .slice(0, limit)
  //   );
  // }, []);

  console.log(searchResultStories);

  return (
    <>
      <div className="default-page">
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Search the Centrinno Network"
          value={inputValue}
          onChange={searchHandler}
        />
        <div className="results">
          {shuffledResults.map((item: IResult, index: number) => (
            <div key={index} className="filter-element">
              <Link key={index} to={`/taxonomy/${slugify(item.result)}`}>
                <Button variant={`${item.isTag ? "tag" : "category"}`}>
                  <p> {item.result}</p>
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isTaxonomy && (
        <Grid relatedStories={searchResultStories} isTaxonomy={isTaxonomy} />
      )}
    </>
  );
};

export default Results;
