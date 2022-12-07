import React, { useState, useEffect, useContext, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import client from "../sanityService";
import { IStory } from "../types/types";

const StoryContext = React.createContext<IStory[] | null>(null);
export const useStoryContext = () => useContext(StoryContext);

interface IStoryProvider {
  children: ReactNode;
}

export function StoriesProvider({ children }: IStoryProvider) {
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
