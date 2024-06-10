// AuthContext.tsx
import React, { useState, useEffect, createContext, ReactNode, useContext } from 'react';
import { UserAuthModel } from '../models/auth/UserAuth';

interface AuthContextProps {
  authInformation: UserAuthModel;
  hasPermission: () => boolean; // hasPermission fonksiyonunun role parametresine artık ihtiyacı yok
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const getInitialUser = (): UserAuthModel => {
    // Token kontrolü yapılmayacak, varsayılan kullanıcı bilgileri döndürülecek
    return {
      id: 0,
      username: '',
      password: '',
    };
  };
  const [authInformation, setAuthInformation] = useState<UserAuthModel>(getInitialUser());

  const hasPermission = (): boolean => {
    return authInformation.id !== 0; // Kullanıcı giriş yapmışsa true, yapmamışsa false döndür
  };

  const refreshUser = (): void => {
    const user = getInitialUser();
    setAuthInformation(user);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const contextValue: AuthContextProps = {
    authInformation,
    hasPermission,
    refreshUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
