import ApolloClient, { InMemoryCache } from 'apollo-boost';
import VueApollo from 'vue-apollo';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default new VueApollo({
  defaultClient: apolloClient,
});
