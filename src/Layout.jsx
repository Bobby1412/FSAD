import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { api } from './api';

export default function Layout() {
  const { user, signOut, authError, clearAuthError } = useAuth();
  const navigate = useNavigate();
  const [signOutError, setSignOutError] = useState('');

  async function handleSignOut() {
    try {
      await api('/auth/logout', { method: 'POST' });
    } catch (error) {
      setSignOutError(error.message);
      return;
    }
    setSignOutError('');
    signOut();
    navigate('/');
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Assire home">ASSIRE<span>.</span></Link>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/browse">Find talent</NavLink>
          <NavLink to="/post">Post a job</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="header-actions">
          {user ? (
            <>
              <span className="welcome-user">Hi, {user.name.split(' ')[0]}</span>
              <button className="button button-outline button-small" onClick={handleSignOut}>Sign out</button>
            </>
          ) : (
            <>
              <Link className="header-login" to="/login">Log in</Link>
              <Link className="button button-small" to="/signup">Join Assire</Link>
            </>
          )}
        </div>
      </header>
      {(signOutError || authError) && <p className="global-error" role="alert">{signOutError || authError} <button className="dismiss-error" onClick={() => { setSignOutError(''); clearAuthError(); }}>Dismiss</button></p>}
      <main><Outlet /></main>
      <footer className="site-footer">
        <Link className="brand brand-footer" to="/">ASSIRE<span>.</span></Link>
        <p>Good work starts with the right people.</p>
        <small>© {new Date().getFullYear()} Assire Marketplace</small>
      </footer>
    </div>
  );
}
