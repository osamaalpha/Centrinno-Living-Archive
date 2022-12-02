import "./App.css";
import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchData } from "./helpers/fetchData";
import React, { useEffect, useState } from "react";

function App() {
  const [stories, setStories] = useState([] as any);

  useEffect(() => {
    fetchData().then((res) => {
      setStories(res);
    });
  }, []);

  return (
    <div className="App">
      <Router>
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
      </Router>
      {/* <Story /> */}
    </div>
  );
}

export default App;
