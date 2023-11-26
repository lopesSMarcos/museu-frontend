import { createContext, useEffect, useState, useMemo } from 'react';
import { IContext, IUser } from '../../types/interfaces';
import { LoginRequest, setUserLocalStorage, getUserLocalStorage } from './utils'; // Import the logout function from the utils file


export const AuthContext = createContext<IContext>({} as IContext);


interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: IProps) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(login: string, senha: string) {
        const response = await LoginRequest(login, senha);
        const payload = { token: response.token, login, roles: response.roles };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }


    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children};
        </AuthContext.Provider>
    )
}