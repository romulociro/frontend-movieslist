import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface ISignCredentialsProps{
  username: string;
  password: string;
}

interface IAuthContextProps {
  user: any;
  signIn(credentials: ISignCredentialsProps): Promise<void>;
  signOut(): void;
}

interface IAuthStateProps {
  token: string;
  user: object;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthStateProps>(() => {
    const token = localStorage.getItem('@MovieList:token');
    const user = localStorage.getItem('@MovieList:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthStateProps;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post<{token: any, user:any}>('sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@MovieList:token', token);
    localStorage.setItem('@MovieList:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MovieList:token');
    localStorage.removeItem('@MovieList:user');

    setData({} as IAuthStateProps);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
