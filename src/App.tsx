import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoriesProvider } from "./context/storyContext";
import { ThemeProvider } from "styled-components";
import Grid from "./components/Grid";
import React from "react";
import { GlobalStyles } from "./styles";
import Layout from "./components/Layout/Layout";
import NoMatch from "./components/404/NoMatch";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={{ variant: "default", mode: "light" }}>
        <GlobalStyles />
        <StoriesProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home/>}></Route>
              <Route path="/:slug" element={<Story />}></Route>
              <Route path="/*" element={<NoMatch />}></Route>
            </Route>
          </Routes>
        </StoriesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
