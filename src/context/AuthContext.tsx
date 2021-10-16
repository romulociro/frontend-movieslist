import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface ISignCredentialsProps{
  username: string;
  password: string;
}

interface IAuthContextProps {
  username: string;
  signIn(credentials: ISignCredentialsProps): Promise<void>;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('sessions', {
      username,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ username: 'Teste', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
