import { ApolloClient as Client, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import User from '../models/User';

import { SignUpData, SignInData} from '../context/auth.types';

import SIGN_UP from './mutations/signUp';
import SIGN_IN from './queries/signIn';

export const client = new Client({
    link: createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
    ssrMode: true,
});

class AuthService {

    static async signUp(signUpData: SignUpData): Promise<User> {

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
            return signUp as User;
        }

    }

    static async signIn(signInData: SignInData): Promise<{token: string, expireDate?: string}> {
        const response = await client.query({
            query: SIGN_IN,
            variables: {
                email: signInData.nickName,
                password: signInData.password
            }
        });

        if (!response) throw new Error('Não foi possível receber uma resposta do servidor.');

        if (response.errors) throw response.errors;

        const { signIn } = response.data;
        return signIn;
    }
}

export default AuthService;
