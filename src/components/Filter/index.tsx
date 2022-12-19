import { useParams } from "react-router-dom";
import useReleatedStories from "../../hooks/useReleatedStories";
const Filter = () => {
  const { slug } = useParams();

  const releatedStories = useReleatedStories(slug as string);

  return (
    <>
      <h1>THIS IS A FILTER</h1>
    </>
  );
};

export default Filter;
