import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from './api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('assire-user')) || null;
    } catch {
      return null;
    }
  });
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    let active = true;
    api('/auth/me')
      .then((account) => {
        if (!active) return;
        setAuthError('');
        if (account) localStorage.setItem('assire-user', JSON.stringify(account));
        else localStorage.removeItem('assire-user');
        setUser(account || null);
      })
      .catch((error) => {
        if (!active) return;
        localStorage.removeItem('assire-user');
        setUser(null);
        setAuthError(error.message);
      });
    return () => { active = false; };
  }, []);

  const value = useMemo(() => ({
    user,
    authError,
    clearAuthError() {
      setAuthError('');
    },
    signIn(account) {
      localStorage.setItem('assire-user', JSON.stringify(account));
      setAuthError('');
      setUser(account);
    },
    signOut() {
      localStorage.removeItem('assire-user');
      setUser(null);
    }
  }), [user, authError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
