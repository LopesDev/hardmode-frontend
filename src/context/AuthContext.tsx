import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import {useCache, useApollo} from '../services/ApolloService';
import GET_USER, {getUsetApolloInterface} from '../services/queries/getUser';

import AuthService from '../services/AuthService';
import AuthCookieService from '../services/AuthCookieService';

import { SignUpData, SignInData } from './auth.types';

import User from '../models/User';

export interface AuthContextData {
    bearer?: string,
    expiration?: string,
    user?: User,
    signIn: ({}: SignInData) => void,
    signUp: ({}: SignUpData) => void,
    signOut: () => void,
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode,
    authData: { bearer: string, expiration: string }
}

export const AuthProvider = ({ children, authData }: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = useState<User>();
    const apolloClient = useApollo();
    const data: getUsetApolloInterface = useCache(GET_USER);

    useEffect(() => {
        if (data) {
            const { getUser } = data;
    
            if (getUser !== user) setUser(getUser);
        }

    }, [setUser, data]);

    async function signIn(signInData: SignInData) {
        try {
            const { token, expireDate } = await AuthService.signIn(signInData);
            console.log({token, expireDate});

            const expires = new Date(expireDate);
            AuthCookieService.setCookie({bearerToken: token, expires});
            router.push('/', '/', {scroll: true});
        } catch (e) {
            toast.error(e.message, {
                hideProgressBar: true,
            });
        }
    }

    async function signUp(signUpData: SignUpData) {
        try {
            const newUser = await AuthService.signUp(signUpData);

            toast.success('Usuário criado com sucesso!', {
                hideProgressBar: true,
            });
        } catch(e) {
            toast.error('Não foi possível criar o usuário, tente novamente mais tarde', {
                hideProgressBar: true,
            });
        }
    }

    function signOut() {
        AuthCookieService.clearCookie();
        apolloClient.clearStore();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                ...authData,
                user,
                signIn,
                signUp,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    return useContext(AuthContext);
}