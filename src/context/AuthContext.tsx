import { createContext, ReactNode, useState } from 'react';
import { ApolloProvider } from '@apollo/client';

import ApolloClient, { client } from '../services/ApolloClient';

import { SignUpData } from './auth.types';

import User from '../models/User';

export interface AuthContextData {
    bearer?: string,
    expiration?: string,
    user?: User,
    signIn: () => void,
    signUp: ({}: SignUpData) => void,
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode,
    authData: { bearer: string, expiration: string }
}

export const AuthProvider = ({ children, authData }: AuthProviderProps) => {
    const [user, setUser] = useState<User>();

    function signIn() {
        // TODO: Implement this function!
    }

    async function signUp(signUpData: SignUpData) {
        try {
            const signUpResponse = await ApolloClient.signUp(signUpData);
            console.log({signUpResponse});
        } catch(e) {
            throw e;
        }
    }

    return (
        <ApolloProvider client={client}>
            <AuthContext.Provider
                value={{
                    ...authData,
                    user,
                    signIn,
                    signUp,
                }}
            >
                {children}
            </AuthContext.Provider>
        </ApolloProvider>
    )
};
