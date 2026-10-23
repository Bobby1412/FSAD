import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { api } from './api';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, error: '' });
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setStatus({ loading: true, error: '' });
    try {
      const account = await api('/auth/register', { method: 'POST', body: JSON.stringify(form) });
      signIn(account);
      navigate('/browse');
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <span className="eyebrow">MAKE YOURSELF AT HOME</span><h1>Join <em>Assire.</em></h1><p>Start finding people and projects that inspire you.</p>
        <label>Your name<input autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" required minLength="2" maxLength="100" /></label>
        <label>Email address<input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" required maxLength="254" /></label>
        <label>Password<input type="password" autoComplete="new-password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="At least 8 characters" required minLength="8" /></label>
        {status.error && <p className="form-error" role="alert">{status.error}</p>}
        <button className="button auth-submit" disabled={status.loading}>{status.loading ? 'Creating account...' : 'Create your account ↗'}</button>
        <p className="auth-switch">Already part of Assire? <Link to="/login">Log in</Link></p>
      </form>
    </section>
  );
}
