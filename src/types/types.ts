export interface IStory {
  [x: string]: any;
  author: string;
  mainText: string;
  pilot: string;
  publicationDate: string;
  storyRelevance: string;
  summaryText: string;
  title: string;
  _id: string;
  heroImage: IImage;
  locations: string[];
  tags: ITag[];
  peopleInvolved: string[];
  relatedStories: IStory[];
}

export interface IImage {
  asset: {
    _ref: string;
  };
}

export interface ITag {
  tag: string;
  definition: string;
  category: {
    category: string;
    definition: string;
  };
}

export interface ICat {
  category: string;
  definition: string;
  relatedTags: ITag[]
  tag: string
}

export interface IContext {
  stories: IStory[];
  tags: ITag[];
  categories: ICat[];
}

export interface IResult {
  result: string;
  isTag: boolean;
}
