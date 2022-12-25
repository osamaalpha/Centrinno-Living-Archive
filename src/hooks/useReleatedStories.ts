import { useCentrinnoContext } from "../context/storyContext";
import { normalizeString } from "../helpers/normalizeStrings";
import { IContext, IStory, ITag } from "../types/types";

export const useReleatedStories = (slug: string) => {
  const { stories } = useCentrinnoContext() as IContext;

  let relatedStories: IStory[] = [];

  stories.forEach((story) =>
    story.tags.forEach(
      (tag) =>
        (normalizeString(tag.tag).toLowerCase() === slug ||
        normalizeString(tag.category.category)?.toLowerCase() === slug) &&
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

  const selectedTag = tags.find(
    (tag: ITag) => normalizeString(tag.tag).toLowerCase() === slug
  );
  const selectedCat = tags.find(
    (tag: ITag) =>
    normalizeString(tag.category.category).toLowerCase() === slug
  );
  return { selectedTag, selectedCat };
};

// .replaceAll(" ", "-")?