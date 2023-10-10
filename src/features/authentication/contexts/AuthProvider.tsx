import { createContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../../../firebase';

export const AuthContext = createContext<User | null>(null);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={currentUser}>{!loading && children}</AuthContext.Provider>;
}
