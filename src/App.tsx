import "./App.css";
import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoriesProvider } from "./context/storyContext";
import Grid from "./components/Grid";

function App() {
  return (
    <StoriesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Grid />}></Route>
          <Route path="stories/:slug" element={<Story />}></Route>
        </Routes>
      </Router>
    </StoriesProvider>
  );
}

export default App;
