import { useParams } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";
import { IStory } from "../types/types";
import ImgHandler from "./ImgHandler";

export const Story = () => {
  const stories = useStoryContext() as IStory[];

  const { slug } = useParams();

  const story = stories.find(
    (story: IStory) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  ) as IStory;

  return (
    <div key={story._id}>
      <h1>{story.title}</h1>
      {story && story.heroImage && (
        <ImgHandler
          imgSrc={story.heroImage}
          title={story.heroImage.asset._ref}
        />
      )}
    </div>
  );
};
