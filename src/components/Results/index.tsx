import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { slugify } from "../../helpers/slugify";

import { Button } from "../../styles";
import { IContext, IResult, ITag } from "../../types/types";

interface ResultsProps {
  limit: number;
}

const Results = ({ limit }: ResultsProps) => {
  const { tags, categories } = useCentrinnoContext() as IContext;
  const location = useLocation();

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

  const shuffleResults = (results: IResult[]) =>
    results
      .sort((a: IResult, b: IResult) => 0.5 - Math.random())
      .slice(0, limit);

  const [shuffledResults, setShuffledResults] = useState<IResult[]>([]);

  useEffect(() => {
    if (!shuffledResults.length) {
      setShuffledResults(shuffleResults(filterResults));
    }
  }, []);

  return (
    <>
      <div className="default-page">
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
    </>
  );
};

export default Results;
