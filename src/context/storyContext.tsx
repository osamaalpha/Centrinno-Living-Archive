import React, { useState, useEffect, useContext, ReactNode } from "react";
import client from "../sanityService";
import { ICat, IContext, IStory, ITag } from "../types/types";

const CentrinnoContext = React.createContext<IContext | null>(null);
export const useCentrinnoContext = () => useContext(CentrinnoContext);

interface IStoryProvider {
  children: ReactNode;
}

export function CentrinnoProvider({ children }: IStoryProvider) {
  const [stories, setStories] = useState([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [categories, setCategories] = useState<ICat[]>([]);
  useEffect(() => {
    async function fetchStories() {
      const storyQuery = `*[_type == "story"]{
        ...,
        "tags": tags[]->{tag, definition,"category":categories->{category, definition}}
      }`;
      const categoryQuery = `*[_type=="category"]{
        category,
        definition, 
        "relatedTags": *[_type=='tag' && references(^._id)]{ 
          tag,
          definition
        }
      }`;

      const catData = await client.fetch(categoryQuery);
      const storyData = await client.fetch(storyQuery);
      const tagQuery: ITag[] = [];
      storyData.forEach((story: IStory) =>
        story.tags.forEach((tag: ITag) => tagQuery.push(tag))
      );
      setStories(storyData);
      setTags(tagQuery)
      setCategories(catData);
    }
    fetchStories();
  }, []);

  return (
    <CentrinnoContext.Provider value={{ stories, tags, categories }}>
      {children}
    </CentrinnoContext.Provider>
  );
}
