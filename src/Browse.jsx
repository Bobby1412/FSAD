import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api } from './api';

export default function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('type') === 'talent' ? 'talent' : 'jobs';
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [talent, setTalent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    Promise.all([api('/jobs'), api('/freelancers')])
      .then(([jobResults, talentResults]) => {
        if (active) {
          setJobs(jobResults);
          setTalent(talentResults);
        }
      })
      .catch((cause) => active && setError(cause.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);

  const filteredJobs = useMemo(() => jobs.filter((job) =>
    `${job.title} ${job.description} ${job.category}`.toLowerCase().includes(query.toLowerCase())
  ), [jobs, query]);
  const filteredTalent = useMemo(() => talent.filter((person) =>
    `${person.name} ${person.title} ${person.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase())
  ), [talent, query]);

  function changeTab(nextTab) {
    setSearchParams(nextTab === 'talent' ? { type: 'talent' } : {});
  }

  return (
    <section className="content-page browse-page">
      <div className="page-intro">
        <span className="eyebrow">GOOD WORK, GOOD PEOPLE</span>
        <h1>Find the right <em>fit.</em></h1>
        <p>Discover your next opportunity or meet the independent talent who can make it happen.</p>
      </div>
      <div className="browse-controls">
        <div className="browse-tabs" role="tablist" aria-label="Browse category">
          <button role="tab" aria-selected={tab === 'jobs'} className={tab === 'jobs' ? 'active' : ''} onClick={() => changeTab('jobs')}>Open projects</button>
          <button role="tab" aria-selected={tab === 'talent'} className={tab === 'talent' ? 'active' : ''} onClick={() => changeTab('talent')}>Independent talent</button>
        </div>
        <input className="search-field" aria-label="Search" placeholder={tab === 'jobs' ? 'Search projects...' : 'Search skills or people...'} value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      {loading && <p className="notice">Finding good work...</p>}
      {error && <p className="notice notice-error" role="alert">{error}</p>}
      {!loading && !error && tab === 'jobs' && (
        <>
          <div className="results-count">{filteredJobs.length} {filteredJobs.length === 1 ? 'project' : 'projects'} to explore</div>
          {filteredJobs.length ? <div className="job-grid">{filteredJobs.map((job) => (
            <article className="job-card" key={job.id}>
              <div className="job-card-top"><span className="category-pill">{job.category}</span><span className="job-date">Due {job.deadline}</span></div>
              <h2>{job.title}</h2><p>{job.description}</p>
              <div className="job-card-bottom"><span><small>PROJECT BUDGET</small><strong>${Number(job.budget).toLocaleString()}</strong></span><span className="client-name">Posted by {job.clientName}</span></div>
            </article>
          ))}</div> : <div className="empty-state"><h2>No projects match just yet.</h2><p>Try another search or post the first project.</p><Link to="/post" className="button">Post a project ↗</Link></div>}
        </>
      )}
      {!loading && !error && tab === 'talent' && (
        <>
          <div className="results-count">{filteredTalent.length} independent professionals</div>
          {filteredTalent.length ? <div className="talent-grid">{filteredTalent.map((person) => (
            <article className="talent-card" key={person.id}>
              <div className="talent-avatar">{person.name.split(' ').map((part) => part[0]).join('')}</div>
              <span className="availability">{person.availability}</span><h2>{person.name}</h2><p className="talent-title">{person.title}</p>
              <div className="skill-list">{person.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <div className="talent-rate"><span>{person.location}</span><strong>${person.hourlyRate}/hr</strong></div>
            </article>
          ))}</div> : <div className="empty-state"><h2>No professionals found.</h2><p>Try a different name or skill.</p></div>}
        </>
      )}
    </section>
  );
}
