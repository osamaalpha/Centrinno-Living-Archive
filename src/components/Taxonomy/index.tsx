import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { Button } from "../../styles";
import { IContext, ITag } from "../../types/types";
import Filter from "../Filter";
import { TaxonomyPage } from "./styles";

const Taxonomy = () => {
  const { tags } = useCentrinnoContext() as IContext;

  let filterResults: any = [];

  tags.forEach(
    (value: ITag, index, self) =>
      index === self.findIndex((t: ITag) => t.tag === value.tag) &&
      filterResults.push({ result: value.tag, isTag: true })
  );
  // const uniqueCats = tags.map((tag) => tag.categories);
  tags.filter(
    (value: ITag, index, self) =>
      index ===
        self.findIndex((t: ITag) => t.categories[0] === value.categories[0]) &&
      filterResults.push({ result: value.categories[0], isTag: false })
  );

  const shuffledResults = filterResults.sort(
    (a: number, b: number) => 0.5 - Math.random()
  );

  console.log(shuffledResults);
  return (
    <TaxonomyPage>
      <Outlet />
      <h2> Results</h2>

      <div className="results">
        {shuffledResults.map((item: any, index: number) => (
          <div key={index} className="filter-element">
            <Link key={index} to={`/taxonomy/${item.result}`}>
              <Button variant={`${item.isTag ? "tag" : "category"}`}>
                <p> {item.result}</p>
              </Button>
            </Link>
          </div>
        ))}
        {/* {uniqueTags?.length > 0 &&
          uniqueTags?.map((tag: any, index: number) => (
            <div key={index} className="filter-element">
              <Link to={`/taxonomy/${tag.tag}`} className="tag">
                <Button variant="tag">
                  <p>{tag.tag}</p>
                </Button>
              </Link>
            </div>
          ))}
        {categories?.length > 0 &&
          categories.map((cat: any, index: number) => (
            <div key={index} className="filter-element">
              <Link
                key={index}
                to={`/taxonomy/${cat.categories[0]}`}
                className="category"
              >
                <Button variant="category">
                  <p> {cat.categories[0]}</p>
                </Button>
              </Link>
            </div>
          ))} */}
      </div>
    </TaxonomyPage>
  );
};

export default Taxonomy;
