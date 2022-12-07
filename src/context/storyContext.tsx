import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import client from "../sanityService";

const StoryContext = React.createContext<any>(null);
export const useStoryContext = () => useContext(StoryContext);

export function StoriesProvider({ children }: any) {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const query = '*[_type == "story"]';
      const info = await client.fetch(query);
      setStories(info);
    }
    fetchData();
  }, []);

  return (
    <StoryContext.Provider value={stories}>{children}</StoryContext.Provider>
  );
}
