import React from "react";
import { Link } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";
import { IStory } from "../types/types";

const Grid = () => {
  const stories = useStoryContext() as IStory[];

  return (
    <React.Fragment>
      <ul>
        {stories?.length > 0 &&
          stories?.map((story: IStory) => (
            <li key={story.title.toLowerCase()}>
              <Link to={`/${story.title.replaceAll(" ", "-")?.toLowerCase()}`}>
                {story.title}
              </Link>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Grid;
