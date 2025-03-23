import { createContext, PropsWithChildren, useContext, useState } from 'react';

// state = { user: { id: number, email: string } }
type User = {
  id: number;
  email: string;
};

type State = {
  user: User | null;
};

const AuthContext = createContext<State | null>(null);

type AuthContextProviderProps = PropsWithChildren;

export default function AuthContextProvider({
  children
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const store: State = { user };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw Error('auth context error');
  }
  return ctx;
}
