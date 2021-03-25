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

interface ChallengesProviderProps {
    children: ReactNode,
    authData: { bearer: string, expiration: string }
}

export const ChallengesProvider = ({ children, authData }: ChallengesProviderProps) => {
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
