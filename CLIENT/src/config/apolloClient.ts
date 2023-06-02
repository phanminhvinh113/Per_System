import { ApolloClient, InMemoryCache } from "@apollo/client";

const URL_GRAPHQL_SERVER: string = import.meta.env.VITE_URL_GRAPHQL_SERVER;

const clientApollo = new ApolloClient({
  uri: URL_GRAPHQL_SERVER,
  cache: new InMemoryCache(),
});

export default clientApollo;
