import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CentrinnoProvider } from "./context/storyContext";
import { ThemeProvider } from "styled-components";
import Grid from "./components/Grid";
import React from "react";
import { GlobalStyles } from "./styles";
import Layout from "./components/Layout/Layout";
import NoMatch from "./components/404/NoMatch";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Taxonomy from "./components/Taxonomy";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={{ variant: "default", mode: "light" }}>
        <GlobalStyles/>
        <CentrinnoProvider>
          <Navigation/>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/story/:slug" element={<Story />}></Route>
              <Route path="/*" element={<NoMatch />}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/taxonomy" element={<Taxonomy />}></Route>
            </Route>
          </Routes>
        </CentrinnoProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
