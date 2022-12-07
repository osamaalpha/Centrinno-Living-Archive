import React from "react";
import { Link } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";

const Grid = () => {
  const stories = useStoryContext();
  return (
    <React.Fragment>
      <ul>
        {stories?.length > 0 &&
          stories?.map((story: any) => (
            <li key={story.title.toLowerCase()}>
              <Link
                to={`/stories/${story.title
                  .replaceAll(" ", "-")
                  ?.toLowerCase()}`}
              >
                {story.title}
              </Link>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default Grid;
