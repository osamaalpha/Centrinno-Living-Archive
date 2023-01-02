import { useCentrinnoContext } from "../context/storyContext";
import { slugify } from "../helpers/slugify";
import { ICat, IContext, IStory, ITag } from "../types/types";

export const useReleatedStories = (slug: string) => {
  const { stories } = useCentrinnoContext() as IContext;

  let relatedStories: IStory[] = [];

  stories.forEach((story) =>
    story.tags.forEach(
      (tag) =>
        (slugify(tag.tag).toLowerCase() === slug ||
        slugify(tag.category.category) === slug) &&
        relatedStories.push(story)
    )
  );
  relatedStories = relatedStories.filter(
    (value: IStory, index, self) =>
      index === self.findIndex((t: IStory) => t._id === value._id)
  );
  return relatedStories;
};

export const useSelectedVariable = (slug: string) => {
  const { tags, categories } = useCentrinnoContext() as IContext;

  const selectedTag = tags.find(
    (tag: ITag) => slugify(tag.tag) === slug
  );

  const linkedTags = categories.find(
    (cat: ICat) => slugify(cat.category) === slug
  );

  return selectedTag || linkedTags;
};
