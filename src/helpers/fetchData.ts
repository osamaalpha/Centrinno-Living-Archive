import { gql } from "graphql-request";
import graphApi from "../graphqlApi";

const fetchData = async () => {
  const query = gql`
    {
      allStory {
        title
        author
        mainText
        publicationDate
        heroImage {
          asset {
            url
            _id
          }
        }
        summaryText
        locations
        pilot
        imageGallery {
          asset {
            url
          }
        }
        peopleInvolved
        storyRelevance
        categories {
          category
        }
        tags
      }
    }
  `;

  const data = await graphApi(query);

  return data;
};

export default fetchData