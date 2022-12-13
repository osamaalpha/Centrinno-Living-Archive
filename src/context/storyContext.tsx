import React, { useState, useEffect, useContext } from "react";
import client from "../sanityService";

const CentrinnoContext = React.createContext<any>(null);
export const useCentrinnoContext = () => useContext(CentrinnoContext);

export function CentrinnoProvider({ children }: any) {
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
