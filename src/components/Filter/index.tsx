import { useParams } from "react-router-dom";
import {
  useSelectedTag,
  useReleatedStories,
} from "../../hooks/useReleatedStories";
import { ITag } from "../../types/types";

const Filter = () => {
  const { slug } = useParams();

  const releatedStories = useReleatedStories(slug as string);

  const selectedVariable = useSelectedTag(slug as string);
  const selectedCategory = selectedVariable.selectedCat;
  const selectedTag = selectedVariable.selectedTag;

  return (
    <>
      <h1>
        {selectedTag
          ? selectedTag.tag
          : selectedCategory
          ? selectedCategory.categories[0]
          : ""}
      </h1>
    </>
  );
};

export default Filter;
