const sainty = require("@sanity/client");

const client = sainty({
  projectId: "ya0dfnrx",
  dataset: "production",
  apiVersion: "2022-10-19",
  useCdn: true,
});

export default client;
