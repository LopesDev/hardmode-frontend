import { ApolloClient as Client, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import { SignUpData } from '../context/auth.types';

import SIGN_UP from './mutations/signUp';

export const client = new Client({
    link: createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
});

class ApolloClient {

    static async signUp(signUpData: SignUpData) {

        const response = await client.mutate({
            mutation: SIGN_UP,
            variables: {
                fullName: signUpData.fullName,
                nickName: signUpData.nickName,
                email: signUpData.email,
                password: signUpData.password,
                profileImage: signUpData.userProfileFile,
                cellphone: signUpData.phoneNumber,
                steamUrl: signUpData.steamUrl,
                instagramUrl: signUpData.instagramUrl,
                facebookUrl: signUpData.facebookUrl,
                githubUrl: signUpData.gitHubUrl,
            },
        });

        if (response) {
            if (response.errors) throw response.errors;
    
            const { signUp } = response.data;
            return signUp;
        }

    }

}

export default ApolloClient;
