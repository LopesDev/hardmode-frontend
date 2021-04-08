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

    async function signIn(signInData: SignInData) {
        try {
            const { token, expireDate } = await ApolloClient.signIn(signInData);

            console.log({token, expireDate});
            // Terminar de implementar esse método, Preciso armazenar esses dados em algum tipo de
            // localStorage, porém como estamos trabalhando com SSR, acredito que vai ser necessário
            // armazenar em um cookie e ou session storage.
        } catch (e) {
            toast.error(e.message, {
                hideProgressBar: true,
            });
        }
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
