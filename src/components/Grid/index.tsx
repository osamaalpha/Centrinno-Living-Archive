import React from "react";
import { Link } from "react-router-dom";
import { useCentrinnoContext } from "../../context/storyContext";
import { GridSection } from "./styles";
import StoryCard from "../StoryCard";

const Grid = () => {
  const { stories } = useCentrinnoContext();
  console.log(stories);
  return (
    <GridSection className="">
      {stories?.length > 0 &&
        stories?.map((story: any) => (
          // <Link
          //   to={`/${story.title.replaceAll(" ", "-")?.toLowerCase()}`}
          //   key={story.title.toLowerCase()}
          // >
          <StoryCard
            image={story.heroImage}
            title={story.title}
            summary={story.summaryText}
            key={story.title.toLowerCase()}
          />
          // </Link>
        ))}
    </GridSection>
  );
};

export default Grid;
