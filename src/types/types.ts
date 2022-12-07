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
  peopleInvolved: string[];
}

export interface IImage {
  asset: {
    _ref: string;
  };
}
