import React, { useState, useEffect, useContext, ReactNode } from "react";
import client from "../sanityService";
import { IContext, IStory, ITag } from "../types/types";

const CentrinnoContext = React.createContext<IContext | null>(null);
export const useCentrinnoContext = () => useContext(CentrinnoContext);

interface IStoryProvider {
  children: ReactNode;
}

export function CentrinnoProvider({ children }: IStoryProvider) {
  const [stories, setStories] = useState([]);
  const [tags, setTags] = useState<ITag[]>([]);
  useEffect(() => {
    async function fetchStories() {
      const storyQuery = `*[_type == "story"]{
        ...,
        "tags": tags[]->{tag, definition,"category":categories->{category, definition}}
      }`;

      const storyData = await client.fetch(storyQuery);
      const tagQuery: ITag[] = [];
      storyData.forEach((story: IStory) =>
        story.tags.forEach((tag: ITag) => tagQuery.push(tag))
      );
      setTags(tagQuery);
      setStories(storyData);
    }
    fetchStories();
  }, []);

  return (
    <CentrinnoContext.Provider value={{ stories, tags }}>
      {children}
    </CentrinnoContext.Provider>
  );
}
