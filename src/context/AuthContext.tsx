import { createContext, ReactNode, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { toast } from 'react-toastify';

import ApolloClient, { client } from '../services/ApolloClient';

import { SignUpData, SignInData } from './auth.types';

import User from '../models/User';

export interface AuthContextData {
    bearer?: string,
    expiration?: string,
    user?: User,
    signIn: ({}: SignInData) => void,
    signUp: ({}: SignUpData) => void,
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode,
    authData: { bearer: string, expiration: string }
}

export const AuthProvider = ({ children, authData }: AuthProviderProps) => {
    const [user, setUser] = useState<User>();

    function signIn(signInData: SignInData) {
        // Terminar de implementar esse método
        // const user = await ApolloClient.signIn(signInData);
    }

    async function signUp(signUpData: SignUpData) {
        try {
            const newUser = await ApolloClient.signUp(signUpData);

            toast.success('Usuário criado com sucesso!', {
                hideProgressBar: true,
            });
        } catch(e) {
            toast.error('Não foi possível criar o usuário, tente novamente mais tarde', {
                hideProgressBar: true,
            });
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
