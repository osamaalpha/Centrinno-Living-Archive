import { useCentrinnoContext } from "../context/storyContext";
import { IContext, IStory, ITag } from "../types/types";

export const useReleatedStories = (slug: string) => {
  const { stories } = useCentrinnoContext() as IContext;

  let relatedStories: IStory[] = [];

  stories.forEach((story) =>
    story.tags.forEach(
      (tag) =>
        (tag.tag === slug || tag.category.category === slug) &&
        relatedStories.push(story)
    )
  );
  relatedStories = relatedStories.filter(
    (value: IStory, index, self) =>
      index === self.findIndex((t: IStory) => t._id === value._id)
  );
  return relatedStories;
};

export const useSelectedTag = (slug: string) => {
  const { tags } = useCentrinnoContext() as IContext;

  const selectedTag = tags.find((tag: ITag) => tag.tag === slug);
  const selectedCat = tags.find(
    (tag: ITag) => tag.category.category === slug
  );
  return { selectedTag, selectedCat };
};
