import "./App.css";
import { Story } from "./components/Story";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoriesProvider } from "./context/storyContext";
import Grid from "./components/Grid";

function App() {
  return (
    <StoriesProvider>
      <Router>
        <Grid />
        <Routes>
          <Route path="/:slug" element={<Story />}></Route>
        </Routes>
      </Router>
    </StoriesProvider>
  );
}

export default App;
