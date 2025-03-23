import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw Error('auth context error');
  }
  return ctx;
}
