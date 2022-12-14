import { Story } from "./components/Story";
import { Route, Routes, useLocation } from "react-router-dom";
import { CentrinnoProvider } from "./context/storyContext";
import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { GlobalStyles } from "./styles";
import Layout from "./components/Layout/Layout";
import NoMatch from "./components/404/NoMatch";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Taxonomy from "./components/Taxonomy";
import Filter from "./components/Filter";

function App() {
  const location = useLocation();
  const isStoryPage = location.pathname.includes("/story/");
  const isTaxonomy = location.pathname.includes("/taxonomy/");
  const isAbout = location.pathname.includes("/about");

  useEffect(() => {
    if (isStoryPage || isTaxonomy || isAbout) {
      document.body.classList.add('blocked');
    } else {
      document.body.classList.remove('blocked');
    }
  }, [location])

  return (
    <React.Fragment>
      <ThemeProvider theme={{ variant: "default", mode: "light" }}>
        <GlobalStyles />
        <CentrinnoProvider>
          <Navigation />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/story/:slug" element={<Story />}></Route>
              <Route path="/*" element={<NoMatch />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/taxonomy" element={<Taxonomy />}>
                <Route path="/taxonomy/:slug" element={<Filter />}></Route>
              </Route>
            </Route>
          </Routes>
        </CentrinnoProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
