import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export function useAuthUser() {
  return useContext(AuthContext);
}
