import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { api } from './api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, error: '' });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setStatus({ loading: true, error: '' });
    try {
      const account = await api('/auth/login', { method: 'POST', body: JSON.stringify(form) });
      signIn(account);
      navigate('/browse');
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <span className="eyebrow">GOOD TO HAVE YOU BACK</span><h1>Welcome <em>back.</em></h1><p>Log in to keep good work moving.</p>
        <label>Email address<input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" required /></label>
        <label>Password<input type="password" autoComplete="current-password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="Your password" required /></label>
        {status.error && <p className="form-error" role="alert">{status.error}</p>}
        <button className="button auth-submit" disabled={status.loading}>{status.loading ? 'Logging in...' : 'Log in ↗'}</button>
        <p className="auth-switch">New to Assire? <Link to="/signup">Create an account</Link></p>
      </form>
    </section>
  );
}
