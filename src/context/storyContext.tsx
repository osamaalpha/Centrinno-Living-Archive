import React, { useState, useEffect, useContext, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import client from "../sanityService";
import { IContext, IStory } from "../types/types";

const CentrinnoContext = React.createContext<IContext | null>(null);
export const useCentrinnoContext = () => useContext(CentrinnoContext);

interface IStoryProvider {
  children: ReactNode;
}

export function CentrinnoProvider({ children }: IStoryProvider) {

  const [stories, setStories] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function fetchStories() {
      const storyQuery = `*[_type == "story"]{
        ...,
        "tags": tags[]->{tag,"categories":categories[]->category}
      }`;

      const storyData = await client.fetch(storyQuery);
      setStories(storyData);
    }
    fetchStories();

    async function fetchTags() {
      const tagsQuery = `*[_type == "tag"]{
        ...,
        "categories": categories[]->category
      }`;

      const tagData = await client.fetch(tagsQuery);
      setTags(tagData);
    }
    fetchTags();
  }, []);

  return (
    <CentrinnoContext.Provider value={{ stories, tags }}>
      {children}
    </CentrinnoContext.Provider>
  );
}
