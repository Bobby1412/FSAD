import { useState } from 'react';
import { api } from './api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setStatus({ loading: true, error: '', success: '' });
    try {
      await api('/contact', { method: 'POST', body: JSON.stringify(form) });
      setForm({ name: '', email: '', message: '' });
      setStatus({ loading: false, error: '', success: 'Thanks for reaching out. We’ll be in touch soon.' });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: '' });
    }
  }

  return (
    <section className="content-page contact-page">
      <div className="page-intro">
        <span className="eyebrow">WE’RE HERE TO HELP</span>
        <h1>Let’s talk <em>things through.</em></h1>
        <p>A question, an idea, or just want to say hello? We’d love to hear from you.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-note"><span className="contact-symbol">✳</span><h2>Real people.<br />Real conversations.</h2><p>Send us a note and the Assire team will get back to you as soon as we can.</p></div>
        <form className="form-card" onSubmit={submit}>
          <label>Your name<input name="name" value={form.name} onChange={update} placeholder="How should we call you?" required maxLength="100" /></label>
          <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required maxLength="254" /></label>
          <label>Your message<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell us what’s on your mind..." required maxLength="3000" /></label>
          {status.error && <p className="form-error" role="alert">{status.error}</p>}
          {status.success && <p className="form-success" role="status">{status.success}</p>}
          <button className="button" disabled={status.loading}>{status.loading ? 'Sending...' : 'Send your message ↗'}</button>
        </form>
      </div>
    </section>
  );
}
