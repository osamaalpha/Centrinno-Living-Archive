import "./App.css";
import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { fetchData } from "./helpers/fetchData";
import React, { useEffect, useState } from "react";
import { StoriesProvider } from "./context/storyContext";
import Grid from "./components/Grid";

function App() {
  // const [stories, setStories] = useState([] as any);

  // useEffect(() => {
  //   fetchData().then((res) => {
  //     setStories(res);
  //   });
  // }, []);

  return (
    <StoriesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Grid />}>
            {/* <Story stories={stories} /> */}
          </Route>
        </Routes>
      </Router>
    </StoriesProvider>
  );
}

export default App;
