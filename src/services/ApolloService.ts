import { ApolloClient, DocumentNode, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

import AuthCookieService from './AuthCookieService';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(JWT: string) {

	const apolloLink = defaultLink(JWT);

	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: apolloLink,
		cache: new InMemoryCache(),
	});
}

function initializeApollo(initialState = null, JWT: string) {
	const _apolloClient = apolloClient ?? createApolloClient(JWT);

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
	  // Get existing cache, loaded during client side data fetching
	  const existingCache = _apolloClient.extract();
	  // Restore the cache using the data passed from getStaticProps/getServerSideProps
	  // combined with the existing cached data
	  _apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

function useApollo(initialState?: NormalizedCacheObject) {
	const JWT = AuthCookieService.getCookie();

	const apolloClient = initializeApollo(initialState, JWT);
	return apolloClient;
}

function useCache(query?: DocumentNode) {
	return useApollo(null).cache.readQuery({query: query});
}

function defaultLink(JWT: string) {
	const uploadLink = createUploadLink({
		uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
	});

	const authLink = setContext((_, { headers }) => {
		// return the headers to the context so httpLink can read them
		return {
			headers: {
				...headers,
				Authorization: JWT ?? '',
			}
		}
	});

	return authLink.concat(uploadLink);
}

export {initializeApollo as default, useApollo, useCache};
