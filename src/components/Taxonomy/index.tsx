import { Link } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { IContext } from "../../types/types";

const Taxonomy = () => {
  const { tags } = useCentrinnoContext() as IContext;

  console.log("tags", tags);

  return (
    <main>
      <div className="results">
        {tags?.length > 0 &&
          tags?.map((tag: any) => (
            <div key={tag.tag}>
              <Link to={`/taxonomy/${tag.tag}`} className="tag">
                <button>
                  <p>{tag.tag}</p>
                </button>
              </Link>
              {tag.categories?.length > 0 && (
                <Link
                  to={`/taxonomy/${tag.categories[0]}`}
                  className="category"
                >
                  <button>
                    <p> {tag.categories[0]}</p>
                  </button>
                </Link>
              )}
            </div>
          ))}
      </div>
    </main>
  );
};

export default Taxonomy;
