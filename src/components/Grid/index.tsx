import React from "react";
import { useCentrinnoContext } from "../../context/storyContext";
import { GridSection } from "./styles";
import StoryCard from "../StoryCard";
import { IContext } from "../../types/types";

const Grid = () => {
  const { stories } = useCentrinnoContext() as IContext
  return (
    <GridSection className="">
      {stories?.length > 0 &&
        stories?.map((story: any) => (
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
