import { ApolloProvider } from '@apollo/client';

import {useApollo} from '../services/ApolloService';

function MyApp({ Component, pageProps }) {
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
	
}

export default MyApp
