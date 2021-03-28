import { createContext, ReactNode, useState } from 'react';

import User from '../models/User';

export interface AuthContextData {
    bearer?: string,
    expiration?: string,
    user?: User,
    signIn: () => void,
    signUp: () => void,
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

    function signUp() {
        // TODO: Implement this function!
    }

    return (
        <AuthContext.Provider
            value={{
                ...authData,
                user,
                signIn,
                signUp
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};
