import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStoryContext } from "../../context/storyContext";
import ImgHandler from "../ImgHandler";
import { StoryPage } from "./styles";

export const Story = () => {
  const stories = useStoryContext();

  const { slug } = useParams();

  const story = stories.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  return (
    <StoryPage key={story.id}>
      <h1>{story.title}</h1>
      <div className="back-button">
        <Link to={"/"}> BACK </Link>
      </div>
      {story && story.heroImage && (
        <ImgHandler
          imgSrc={story.heroImage as string}
          altText={story.heroImage.title as string}
        />
      )}
    </StoryPage>
  );
};