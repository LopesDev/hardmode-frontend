import { ApolloClient as Client, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const client = new Client({
    link: createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
});

export default client;
