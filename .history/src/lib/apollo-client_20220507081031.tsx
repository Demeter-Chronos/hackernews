import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () => {
  return new ApolloClient({
    uri: 'http://graphql.kingnonso.com/',
    cache: new InMemoryCache()
  });
};