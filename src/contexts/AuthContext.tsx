import React, { createContext, useState, useContext, useEffect } from 'react';
import { login } from '../services/API';
import { useNavigate } from 'react-router-dom';

interface AuthContextData {
  isAuth: boolean;
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setUser(token);
      } else {
        setUser(null);
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
  
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const isAuth = !!user;

  const loginFn = async (username: string, password: string) => {
    const response = await login(username, password);
    if (response && response.token) {
      localStorage.setItem('token', response.token);
      setUser(response.token);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/sign-in');
  };

  return (
    <AuthContext.Provider value={{isAuth, user, login: loginFn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}