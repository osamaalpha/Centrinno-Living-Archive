import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { slugify } from "../../helpers/slugify";
import { SearchStories } from "../../helpers/storySearchHelper";
import { useReleatedStories } from "../../hooks/useReleatedStories";
import { Button } from "../../styles";
import { IContext, IResult, IStory, ITag } from "../../types/types";

interface ResultsProps {
  limit: number;
}

const Results = ({ limit }: ResultsProps) => {
  const { tags, stories, categories } = useCentrinnoContext() as IContext;
  const [inputValue, setInputValue] = useState("");
  const [searchResultStories, setSearchResultStories] = useState<IStory[]>([]);

  let filterResults: IResult[] = [];

  tags.forEach(
    (value: ITag, index, self) =>
      index === self.findIndex((t: ITag) => t.tag === value.tag) &&
      filterResults.push({ result: value.tag, isTag: true })
  );
  // const uniqueCats = tags.map((tag) => tag.categories);
  tags.filter(
    (value: ITag, index, self) =>
      index ===
        self.findIndex(
          (t: ITag) => t.category.category === value.category.category
        ) &&
      filterResults.push({ result: value.category.category, isTag: false })
  );

  const shuffledResults = filterResults
    .sort((a: IResult, b: IResult) => 0.5 - Math.random())
    .slice(0, limit);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  };

  useEffect(() => {
    setSearchResultStories(SearchStories(inputValue.toLowerCase(), stories));
  }, [inputValue]);

  console.log(searchResultStories);

  return (
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
  );
};

export default Results;
