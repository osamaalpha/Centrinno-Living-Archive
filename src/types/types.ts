export interface IStory {
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

export interface IContext {
  stories: IStory[];
  tags: ITag[];
}

export interface IResult {
  result: string
  isTag: boolean
}
