// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://arweave.net/graphql", // Adjust the URI to point to the correct GraphQL endpoint
});

export default apolloClient;
