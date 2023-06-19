import { FC, createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
//
export interface User {
    name: string;
    role: string[];
    isLogin: boolean;
}
//
interface AuthContextType {
    user: User | null;
    login: (data: User) => void;
    logout: () => void;
}
//
interface AuthProps {
    children: React.ReactNode;
}
//
export const AuthContext = createContext<AuthContextType | null>(null);
//
export const AuthProvider: FC<AuthProps> = ({ children }) => {
    //
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data: any) => {
        setUser(data);
        navigate('/profile');
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user],
    );
    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};

export const useAuth = (): AuthContextType | null => {
    return useContext(AuthContext);
};
