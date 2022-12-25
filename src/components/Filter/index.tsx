import { useParams } from "react-router-dom";
import {
  useSelectedTag,
  useReleatedStories,
} from "../../hooks/useReleatedStories";
import NetworkGraph from "../NetworkGraph";

const Filter = () => {
  const { slug } = useParams();

  const releatedStories = useReleatedStories(slug as string);

  const selectedVariable = useSelectedTag(slug as string);
  const selectedCategory = selectedVariable.selectedCat;
  const selectedTag = selectedVariable.selectedTag;

  console.log(selectedTag)

  return (
    <>
      <h1>
        {selectedTag ? selectedTag.tag : selectedCategory?.category.category}
      </h1>
      <p>
        {selectedTag
          ? selectedTag.definition
          : selectedCategory?.category.definition}
      </p>
      <NetworkGraph />
    </>
  );
};

export default Filter;
