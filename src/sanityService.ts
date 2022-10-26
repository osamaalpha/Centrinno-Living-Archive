const sainty = require("@sanity/client");

const client = sainty({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-10-19",
  useCdn: true,
});

export default client;
