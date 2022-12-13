import { useCentrinnoContext } from "../../context/storyContext";

const Taxonomy = () => {
  const { tags } = useCentrinnoContext();

  console.log("tags", tags);

  return (
    <main>
      <div className="results">
        {tags?.length > 0 &&
          tags?.map((tag: any) => (
            <>
              <button key={tag.tag}>
                <p>{tag.tag}</p>
              </button>
              {tag.categories?.length > 0 && (
                <button>
                  <p> {tag.categories[0]}</p>
                </button>
              )}
            </>
          ))}
      </div>
    </main>
  );
};

export default Taxonomy;
