import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { api } from './api';

const initialForm = { title: '', category: 'Design', description: '', budget: '', deadline: '' };
const today = new Date();
const minDeadline = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

export default function Post() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, error: '' });
  const { user } = useAuth();
  const navigate = useNavigate();

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ loading: true, error: '' });
    try {
      await api('/jobs', {
        method: 'POST',
        body: JSON.stringify({ ...form, budget: Number(form.budget) })
      });
      navigate('/browse');
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  }

  return (
    <section className="content-page post-page">
      <div className="page-intro">
        <span className="eyebrow">GREAT PROJECTS START HERE</span>
        <h1>Tell us what you’re <em>making.</em></h1>
        <p>Share a few details. The right independent talent will take it from there.</p>
      </div>
      <form className="form-card post-form" onSubmit={submit}>
        {!user && <p className="auth-required-note">You’ll need an account to publish. <Link to="/login">Log in</Link> or <Link to="/signup">create one</Link>.</p>}
        <label>Project title<input name="title" value={form.title} onChange={update} placeholder="e.g. Refresh our online store" required minLength="4" maxLength="120" /></label>
        <label>Category<select name="category" value={form.category} onChange={update}><option>Design</option><option>Development</option><option>Writing</option><option>Marketing</option><option>Strategy</option><option>Other</option></select></label>
        <label>What do you need?<textarea name="description" rows="6" value={form.description} onChange={update} placeholder="Describe the project, what success looks like, and the skills you’re looking for..." required minLength="20" maxLength="4000" /></label>
        <div className="form-row">
          <label>Budget (USD)<div className="currency-input"><span>$</span><input name="budget" type="number" value={form.budget} onChange={update} placeholder="1,500" min="1" max="10000000" step="1" required /></div></label>
          <label>Target deadline<input name="deadline" type="date" value={form.deadline} onChange={update} min={minDeadline} required /></label>
        </div>
        {status.error && <p className="form-error" role="alert">{status.error}</p>}
        <div className="form-submit-row"><p>Ready to share? Your project will appear in the open projects list.</p><button className="button" disabled={!user || status.loading}>{status.loading ? 'Publishing...' : 'Publish project ↗'}</button></div>
        <p className="form-footnote">Need help first? <Link to="/contact">Talk to our team.</Link></p>
      </form>
    </section>
  );
}
