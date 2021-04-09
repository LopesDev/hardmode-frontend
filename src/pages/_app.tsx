import { ApolloProvider } from '@apollo/client';

import {useApollo} from '../services/ApolloService';

function MyApp({ Component, pageProps }) {
	const client = useApollo(pageProps.initialApolloState);
	console.log({pageProps});

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
	
}

export default MyApp
