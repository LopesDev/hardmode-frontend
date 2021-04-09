import { createContext, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

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
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    children: ReactNode,
    authData: { bearer: string, expiration: string }
}

export const AuthProvider = ({ children, authData }: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = useState<User>();

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

    return (
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
    )
};
