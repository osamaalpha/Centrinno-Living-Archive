import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import client from "../sanityService";

const fetchStories = async () => {
  const query = '*[_type == "story"]';

  const info = await client.fetch(query);
  return info;
};

const StoryContext = React.createContext<any>(null);
export const useStoryContext = () => useContext(StoryContext);

export function StoriesProvider({ children }: any) {
  const stories = fetchStories();

  return (
    <StoryContext.Provider value={stories}>{children}</StoryContext.Provider>
  );
}
