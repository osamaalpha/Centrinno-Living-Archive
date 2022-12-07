import { useParams } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";
import ImgHandler from "./ImgHandler";

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
        <ImgHandler
          imgSrc={story.heroImage as string}
          title={story.heroImage.title as string}
        />
      )}
    </div>
  );
};
