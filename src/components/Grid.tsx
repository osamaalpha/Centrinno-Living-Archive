import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { useStoryContext } from "../context/storyContext";
import { Story } from "./Story";

const Grid = () => {
    const stories = useStoryContext();
    console.log(stories)
  return (
    
      <React.Fragment>
        <ul>
          {stories?.allStory?.length > 0 &&
            stories?.allStory?.map((story: any) => (
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
        <Routes>
          <Route path="/stories/:slug" element={<Story stories={stories} />}>
            {/* <Story stories={stories} /> */}
          </Route>
        </Routes>
      </React.Fragment>
  );
};

export default Grid;
