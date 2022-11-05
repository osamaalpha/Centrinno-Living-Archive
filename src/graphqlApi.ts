import { request } from "graphql-request";

const graphApi = async (query: string) => {
  const data = await request(
    "https://ya0dfnrx.api.sanity.io/v1/graphql/production/default",
    query
  );
  return data;
};

export default graphApi;
