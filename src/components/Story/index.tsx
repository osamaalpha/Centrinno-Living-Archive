import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { Button } from "../../styles";
import { IContext, ITag } from "../../types/types";
import ImgHandler from "../ImgHandler";
import StoryNetworkGraph from "../StoryNetworkGraph";
import { Sidebar, StoryBody, StoryPage } from "./styles";

export const Story = () => {
  const { stories } = useCentrinnoContext() as IContext;
  const [splitTags, setSplitTags] = useState<ITag[]>([]);

  const { slug } = useParams();

  const story = stories.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  const navigate = useNavigate();

  useEffect(() => {
    story && setSplitTags(story?.tags.slice(0, 6));
  }, [story]);

  return (
    <>
      {story && (
        <StoryPage key={story._id}>
          <Sidebar>
            <div className="cell">
              <p>
                <span>Author:</span> {story.author}
              </p>
              <Button
                className="back-button"
                variant="default"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </div>
            <div className="cell">
              <p>
                <span>Date:</span> {story.publicationDate}
              </p>
            </div>
            <div className="cell">
              <p>
                <span>Pilot:</span> {story.pilot}
              </p>
            </div>
            <div className="cell graph-cell">
              <div className="graph-container">
                <StoryNetworkGraph tags={splitTags} storyTitle={story.title} />
              </div>
            </div>
          </Sidebar>

          <StoryBody>
            <h1>{story.title}</h1>
            {story && story.heroImage && (
              <div className="hero-component">
                <ImgHandler
                  imgSrc={story.heroImage}
                  altText={story.title as string}
                />
              </div>
            )}
            <div>
              <p>{story.summaryText}</p>
              <br />
              <p>{story.mainText}</p>
            </div>
          </StoryBody>
        </StoryPage>
      )}
    </>
  );
};
