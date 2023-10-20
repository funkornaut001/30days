// src/apolloProvider.ts
import { createApolloProvider } from "@vue/apollo-option";
import apolloClient from "./apolloClient";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

export default apolloProvider;
