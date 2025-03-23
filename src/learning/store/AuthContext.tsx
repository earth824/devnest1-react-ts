import { createContext, PropsWithChildren, useState } from 'react';
import { LoginInput } from '../types/auth.type';
import axios from '../config/axios';
import { ApiSuccessResponse } from '../types/response.type';

// state = { user: { id: number, email: string } }
type User = {
  id: number;
  email: string;
};

type State = {
  user: User | null;
  login: (input: LoginInput) => void;
};

// Access Token: short lived
// Refresh Token: long lived
// sent request to protectd route ==> access token
// if access token expired ==> sent request with refresh token ==> check if expired ? login: access token
// cross site scripting(local storage): csrf (cookie)

export const AuthContext = createContext<State | null>(null);

type AuthContextProviderProps = PropsWithChildren;

export default function AuthContextProvider({
  children
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (input: LoginInput) => {
    try {
      // console.log(input);
      // const { data } = (await axios.post('/auth/login', input)) as {
      //   data: ApiSuccessResponse<{ accessToken: string }>;
      // };
      // res.data

      const { data } = await axios.post<
        ApiSuccessResponse<{ accessToken: string }>
      >('/auth/login', input);

      localStorage.setItem('accessToken', data.data.accessToken);
      const res = await axios.get('/auth/me');
      console.log(res.data);
    } catch (err) {
      console.log(err);
      window.alert('login failed');
    }
  };

  const store: State = { user, login };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}
