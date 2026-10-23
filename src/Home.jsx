import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> THE INDEPENDENT WORK MARKETPLACE</span>
          <h1>Find your people.<br /><em>Make great work.</em></h1>
          <p>Bring your next big idea to life with independent talent who care about getting it right.</p>
          <div className="hero-actions">
            <Link className="button" to="/browse">Explore talent <span aria-hidden="true">↗</span></Link>
            <Link className="button button-light" to="/post">I’m hiring</Link>
          </div>
          <div className="hero-note"><span className="avatar-stack"><i>J</i><i>M</i><i>A</i></span><span>Thoughtful people. Better projects.</span></div>
        </div>
        <div className="hero-art" role="img" aria-label="Creative professionals collaborating">
          <div className="hero-art-image" />
          <div className="floating-card"><span className="floating-icon">✳</span><span><strong>Made for good work</strong><small>Talent and teams, together</small></span></div>
          <div className="hero-sticker">LET’S<br />MAKE<br /><b>IT HAPPEN</b></div>
        </div>
      </section>
      <section className="trust-strip">
        <span>BUILDING BETTER, TOGETHER</span><b>Design</b><b>Development</b><b>Writing</b><b>Marketing</b><b>Strategy</b>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Work that works<br /><em>for everyone.</em></h2></div>
          <p>Whether you’re building a team or building a career, find the people and projects that move you forward.</p>
        </div>
        <div className="path-cards">
          <article className="path-card path-card-dark"><span className="card-number">01 / FOR CLIENTS</span><h3>Big idea?<br />Let’s build it.</h3><p>Find skilled freelancers who bring fresh thinking and real care to your project.</p><Link to="/post">Post a project <span>↗</span></Link></article>
          <article className="path-card path-card-orange"><span className="card-number">02 / FOR FREELANCERS</span><h3>Your talent<br />deserves a stage.</h3><p>Meet thoughtful clients, discover meaningful projects, and do work you’re proud of.</p><Link to="/browse">Find your next project <span>↗</span></Link></article>
          <article className="path-card path-card-cream"><span className="card-number">03 / MADE TOGETHER</span><h3>Better work<br />starts with trust.</h3><p>Clear expectations, real conversations, and a community that values quality.</p><Link to="/contact">Get to know us <span>↗</span></Link></article>
        </div>
      </section>
    </>
  );
}
