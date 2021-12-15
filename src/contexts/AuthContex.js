import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/UseLocalStorage';

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const loginContex = (authData) => {
        const user = {
            _id: authData._id,
            email: authData.email,
            accessToken: authData.accessToken
        }
        setUser(user);
    }

    const logoutContex = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, loginContex, logoutContex, isAuthenticated: user.email }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}