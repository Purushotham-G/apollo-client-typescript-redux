import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

const graphqlURI = 'hasura.avocad0.dev/v1/graphql';
const adminSecret = "z629AchrY5MGk66yt9eKa";
const headers = {
  'x-hasura-admin-secret': adminSecret
};

//  for subscriptions
const wsLink = new GraphQLWsLink(createClient({
  url: `wss://${graphqlURI}`,
  connectionParams: {
    headers
  },
}));

//  for queries and mutations
const httpLink = new HttpLink({
  uri: `https://${graphqlURI}`,
  headers
});

//  split based on operation type (subscription, query, mutation)
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: splitLink,
  cache
});