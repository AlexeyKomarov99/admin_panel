import {createContext, useState} from 'react';
import {login} from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Процедура входа
    const handleLogin = async(credentials) => {
        try {
            const tokens = await login(credentials);
            setTokens(tokens);
            setIsAuthenticated(true);
            return true;
        } catch (error) {
            console.error("Ошибка входа: ", error);
        }
    }

    // Процедура регистрации

    // Процедура выхода

    return (
        <AuthContext.Provider value={{tokens, isAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext};