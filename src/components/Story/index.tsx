import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { IContext } from "../../types/types";
import ImgHandler from "../ImgHandler";
import { StoryPage } from "./styles";

export const Story = () => {
  const { stories } = useCentrinnoContext() as IContext;

  const { slug } = useParams();

  const story = stories.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  return (
    <StoryPage key={story?._id}>
      <h1>{story?.title}</h1>
      <div className="back-button">
        <Link to={"/"}> BACK </Link>
      </div>
      {story && story.heroImage && (
        <div className="hero-component">
          <ImgHandler
            imgSrc={story.heroImage}
            altText={story.title as string}
          />
        </div>
      )}
      {story && story.summaryText}
      <br />
      {story && story.mainText}
    </StoryPage>
  );
};
