import React, { useEffect, useState } from "react";
import { useCentrinnoContext } from "../../context/storyContext";
import { GridSection } from "./styles";
import StoryCard from "../StoryCard";
import { IContext, IStory } from "../../types/types";
import { useLocation } from "react-router-dom";

interface GridProps {
  relatedStories?: IStory[];
}

const Grid = ({ relatedStories }: GridProps) => {
  const [gridStories, setGridStories] = useState<IStory[]>([]);
  const { stories } = useCentrinnoContext() as IContext;
  const location = useLocation()
  const isTaxonomy = location.pathname === "/taxonomy"

  useEffect(() => {
    if (relatedStories && relatedStories.length > 0) {
      setGridStories(relatedStories);
    }
  }, [relatedStories]);

  useEffect(() => {
    if (
      stories.length > 0 &&
      relatedStories &&
      relatedStories?.length < 1 &&
      !isTaxonomy
    ) {
      setGridStories(stories);
    } else if (stories.length > 0 &&
      relatedStories &&
      relatedStories?.length >= 1 && isTaxonomy) {
        setGridStories(relatedStories);
      } else if (relatedStories && relatedStories.length < 1) {
        setGridStories([])
      }
  }, [isTaxonomy, relatedStories, stories]);

  return (
    <GridSection className="grid-section">
      {gridStories &&
        gridStories?.length > 0 &&
        gridStories?.map((story: any) => (
          <StoryCard
            image={story.heroImage}
            title={story.title}
            summary={story.summaryText}
            key={story.title.toLowerCase()}
          />
        ))}
    </GridSection>
  );
};

export default Grid;
