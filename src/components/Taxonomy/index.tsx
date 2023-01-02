import { Link, Outlet } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { slugify } from "../../helpers/slugify";
import { Button } from "../../styles";
import { IContext, IResult, ITag } from "../../types/types";
import { TaxonomyPage } from "./styles";

const Taxonomy = () => {
  const { tags } = useCentrinnoContext() as IContext;

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
    .splice(0, 40);

  return (
    <TaxonomyPage>
      <Outlet />
      <div className="default-page">
        <h2> The Centrinno Network Taxonomy - Select a Tag or Category from the list</h2>
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
    </TaxonomyPage>
  );
};

export default Taxonomy;
