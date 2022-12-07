import React from "react";
import { Link } from "react-router-dom";
import { useStoryContext } from "../../context/storyContext";
import { GridSection } from "./styles";
import StoryCard from "../StoryCard";

const Grid = () => {
  const stories = useStoryContext();
  console.log(stories);
  return (
    <GridSection className="">
      {stories?.length > 0 &&
        stories?.map((story: any) => (
          <Link
            to={`/${story.title.replaceAll(" ", "-")?.toLowerCase()}`}
            key={story.title.toLowerCase()}
          >
            {/* {story.title} */}
            <StoryCard
              image={story.heroImage}
              title={story.title}
              summary={story.summaryText}
            />
          </Link>
        ))}
    </GridSection>
  );
};

export default Grid;
