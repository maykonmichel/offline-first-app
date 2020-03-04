import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {RetryLink} from 'apollo-link-retry';

export const cache = new InMemoryCache();

const httpLink = new HttpLink({uri: 'http://10.0.2.2:4000'});

const retryLink = new RetryLink();

const link = ApolloLink.from([retryLink, httpLink]);

export default new ApolloClient({
  cache,
  link,
});
