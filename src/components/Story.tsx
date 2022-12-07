import { useParams } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";

export const Story = () => {
  const stories = useStoryContext();

  const { slug } = useParams();

  const story = stories.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  return (
    <div key={story.id}>
      <h1>{story.title}</h1>
      {story && story.heroImage && (
        <img src={story.heroImage.asset.url} alt={story.heroImage.title} />
      )}
    </div>
  );
};
