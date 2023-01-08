import { IStory } from "../types/types";

export const SearchStories = (input: string, stories: IStory[]) => {
  let searchStories: IStory[] = [];

  stories && stories.forEach((story) => {
    (story.title?.toLowerCase().includes(input) ||
      story.author?.toLowerCase().includes(input) ||
      story.pilot?.toLowerCase().includes(input)) &&
      searchStories.push(story);
  });

  return searchStories;
};
