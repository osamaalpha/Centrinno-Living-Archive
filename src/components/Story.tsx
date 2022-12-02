import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Story = ({ stories }: any) => {
  const [data, setData] = useState([] as any);

  const { slug } = useParams();

  const story = stories.allStory.find(
    (story: any) => story.title.replaceAll(" ", "-")?.toLowerCase() === slug
  );

  return (
    <div key={story.id}>
      <h1>{story.title}</h1>
      {story && story.heroImage && (
        <img src={story.heroImage.asset.url} alt={story.heroImage.title} />
      )}
    </div>
  );
};
