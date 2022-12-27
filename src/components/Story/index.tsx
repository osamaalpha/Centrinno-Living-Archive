import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { Button } from "../../styles";
import { IContext } from "../../types/types";
import ImgHandler from "../ImgHandler";
import { StoryPage } from "./styles";

export const Story = () => {
  const { stories } = useCentrinnoContext() as IContext;

  const { slug } = useParams();

  const story = stories.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  const navigate = useNavigate();
  
  return (
    <StoryPage key={story?._id}>
      <h1>{story?.title}</h1>
      <Button
        className="back-button"
        variant="default"
        onClick={() => navigate(-1)}
      />
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
