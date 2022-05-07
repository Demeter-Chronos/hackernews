import {ApolloClient,InMemoryCache} from "@apollo/client";

export const getApolloClient = () => {
    return new ApolloClient({
        uri: 'http://local',
        cache: new InMemoryCache()
      });
};