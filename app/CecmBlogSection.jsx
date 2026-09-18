'use client';

/*
  CecmBlogSection.jsx
  --------------------
  Usage in app/page.js (Next.js App Router):

      import CecmBlogSection from './CecmBlogSection';
      // ...inside your page component's JSX, wherever you want it:
      <CecmBlogSection />

  Save this file as app/CecmBlogSection.jsx (same folder as page.js),
  or adjust the import path to wherever you keep components.

  To add a new post: add one object to the POSTS array below.
  Nothing else needs to change — the grid and modal render from it.
*/

import { useState, useEffect } from 'react';

const POSTS = [
  {
    id: 'cecm-duties',
    icon: '🏛️',
    tag: 'County Governance',
    title: 'The Duties and Responsibilities of a CECM',
    excerpt:
      "A County Executive Committee Member carries far more than a title — here's what the role actually involves, day to day and at the policy table.",
    body: (
      <>
        <p>
          A County Executive Committee Member (CECM) is the county-level
          equivalent of a Cabinet Secretary — a Minister — appointed by the
          Governor and vetted by the County Assembly to run a specific
          docket, such as Finance, Youth Affairs, or Communications.
        </p>
        <h4>Policy Leadership</h4>
        <p>
          Replace this with your own detailed write-up: how a CECM sets
          departmental policy direction, aligns it with the County
          Integrated Development Plan (CIDP), and reports to the Governor
          and County Assembly.
        </p>
        <h4>Budget &amp; Resource Oversight</h4>
        <p>
          Add your explanation of the CECM's role in preparing departmental
          budgets, defending them before the Assembly, and ensuring funds
          are spent on approved priorities.
        </p>
        <h4>Public Accountability</h4>
        <p>
          Add your notes on answering to County Assembly committees, public
          participation obligations, and performance reporting.
        </p>
      </>
    ),
  },
  {
    id: 'how-county-budget-works',
    icon: '📊',
    tag: 'Public Finance',
    title: "How Kiambu's County Budget Actually Works",
    excerpt:
      "From ward-level priorities to the final appropriation — tracing the journey of public money before it reaches a project near you.",
    body: (
      <>
        <p>
          Replace this placeholder with your full write-up on the county
          budget cycle — from ward-level public participation forums,
          through the County Fiscal Strategy Paper, to the final
          Appropriation Act passed by the County Assembly.
        </p>
        <h4>Where the Money Comes From</h4>
        <p>
          Add your section on national equitable share transfers, local
          revenue, and donor/grant funding.
        </p>
        <h4>Where the Money Goes</h4>
        <p>
          Add your section on recurrent vs. development expenditure, and
          how residents can track it.
        </p>
      </>
    ),
  },
  {
    id: 'youth-employment-policy',
    icon: '🌟',
    tag: 'Youth Affairs',
    title: 'What Real Youth Employment Policy Looks Like',
    excerpt:
      'Beyond slogans: the practical levers a county government can pull to open doors for young people in Kiambu.',
    body: (
      <>
        <p>
          Replace this placeholder with your full write-up on practical
          youth employment interventions — skills programmes, access to
          county tenders, entrepreneurship support, and partnerships with
          the private sector.
        </p>
        <h4>Skills That Match the Market</h4>
        <p>Add your section here.</p>
        <h4>Capital and Market Access</h4>
        <p>Add your section here.</p>
      </>
    ),
  },
];

export default function CecmBlogSection() {
  const [openId, setOpenId] = useState(null);
  const activePost = POSTS.find((p) => p.id === openId) || null;

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpenId(null);
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = openId ? 'hidden' : '';
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openId]);

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <span className="insights-kicker">Notes from the Field</span>
          <h2 className="insights-title">
            Understanding County <em>Government</em> Up Close
          </h2>
          <p className="insights-intro">
            Plain-language explainers on how Kiambu County works — the
            roles, the responsibilities, and the decisions behind the
            headlines.
          </p>
        </div>

        <div className="post-grid">
          {POSTS.map((post) => (
            <article className="post-card" key={post.id}>
              <span className="post-icon" aria-hidden="true">
                {post.icon}
              </span>
              <span className="post-tag">{post.tag}</span>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <button className="post-btn" onClick={() => setOpenId(post.id)}>
                Read the full article
              </button>
            </article>
          ))}
        </div>
      </div>

      {activePost && (
        <div
          className="post-overlay is-open"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenId(null);
          }}
        >
          <div
            className="post-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="postModalTitle"
          >
            <button
              className="post-close"
              onClick={() => setOpenId(null)}
              aria-label="Close article"
            >
              ×
            </button>
            <span className="post-tag">{activePost.tag}</span>
            <h2 id="postModalTitle">{activePost.title}</h2>
            {activePost.body}
          </div>
        </div>
      )}

      <style jsx>{`
        .insights-section {
          --ink-deep: #0d2b1a;
          --ink-deeper: #08190f;
          --gold: #c9a227;
          --gold-soft: #e4c65e;
          --paper: #f6f4ee;
          --muted: #b9c9bd;
          --radius: 14px;
          background: linear-gradient(180deg, var(--ink-deep) 0%, var(--ink-deeper) 100%);
          color: var(--paper);
          padding: 5rem 1.5rem;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .insights-container {
          max-width: 1080px;
          margin: 0 auto;
        }
        .insights-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 3rem;
        }
        .insights-kicker {
          display: inline-block;
          color: var(--gold-soft);
          font-family: Arial, sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          margin-bottom: 0.75rem;
        }
        .insights-title {
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          line-height: 1.25;
          margin: 0 0 1rem;
          font-weight: 500;
        }
        .insights-title em {
          font-style: italic;
          color: var(--gold-soft);
        }
        .insights-intro {
          font-family: Arial, sans-serif;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }
        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .post-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(201, 162, 39, 0.25);
          border-radius: var(--radius);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .post-card:hover {
          border-color: var(--gold);
          transform: translateY(-3px);
        }
        .post-icon {
          font-size: 1.6rem;
          margin-bottom: 0.9rem;
        }
        .post-tag {
          font-family: Arial, sans-serif;
          font-size: 0.75rem;
          color: var(--gold-soft);
          letter-spacing: 0.03em;
          margin-bottom: 0.6rem;
          display: inline-block;
        }
        .post-title {
          font-size: 1.2rem;
          line-height: 1.4;
          margin: 0 0 0.75rem;
          font-weight: 500;
        }
        .post-excerpt {
          font-family: Arial, sans-serif;
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 1.5rem;
          flex-grow: 1;
        }
        .post-btn {
          font-family: Arial, sans-serif;
          background: transparent;
          color: var(--gold-soft);
          border: 1px solid var(--gold);
          border-radius: 999px;
          padding: 0.55rem 1.3rem;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .post-btn:hover {
          background: var(--gold);
          color: var(--ink-deeper);
        }
        .post-btn:focus-visible,
        .post-close:focus-visible {
          outline: 2px solid var(--gold-soft);
          outline-offset: 2px;
        }
        .post-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 15, 9, 0.72);
          z-index: 999;
          padding: 5vh 1.25rem;
          overflow-y: auto;
        }
        .post-modal {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
          background: var(--ink-deep);
          border: 1px solid rgba(201, 162, 39, 0.35);
          border-radius: var(--radius);
          padding: 2.75rem 2.25rem;
          color: var(--paper);
        }
        .post-close {
          position: absolute;
          top: 1rem;
          right: 1.1rem;
          background: none;
          border: none;
          color: var(--muted);
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
        }
        .post-close:hover {
          color: var(--gold-soft);
        }
        .post-modal :global(h2) {
          font-size: 1.6rem;
          margin: 0.6rem 0 1.25rem;
          font-weight: 500;
        }
        .post-modal :global(h4) {
          font-family: Arial, sans-serif;
          color: var(--gold-soft);
          font-size: 0.95rem;
          margin: 1.5rem 0 0.5rem;
        }
        .post-modal :global(p) {
          font-family: Arial, sans-serif;
          font-size: 0.98rem;
          line-height: 1.7;
          color: var(--paper);
          margin: 0 0 0.5rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .post-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
