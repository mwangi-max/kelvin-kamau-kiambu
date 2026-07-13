'use client'
import { useState } from 'react'
import Image from 'next/image'
import globalStyles from './globals.css'

/* ── DATA ── */
const NAV = [['About', 'about'], ['Portfolios', 'portfolios'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact']]
const LINKEDIN = 'https://www.linkedin.com/in/kelvin-kamau-mprsk-7a318424b'
const TWITTER  = 'https://x.com/KELVINMKENYA3'
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61588521846298'
const TIKTOK   = 'https://www.tiktok.com/@kamau5735'

const PORTFOLIOS = [
  { icon: '🌟', title: 'Youth Affairs', featured: true, tag: 'Preferred Portfolio', desc: 'Championing skills development, youth employment, entrepreneurship, and leadership programmes that unlock the full potential of Kiambu\'s young population — Kenya\'s most powerful resource.' },
  { icon: '📡', title: 'Communications & Public Affairs', featured: true, tag: 'Preferred Portfolio', desc: 'Transforming government messaging into clear, credible, and engaging public narratives. Building trust between County Government institutions and the citizens they serve through strategic, evidence-based communications.' },
  { icon: '🏛️', title: 'Administration & Public Service', featured: true, tag: 'Preferred Portfolio', desc: 'Driving operational efficiency, institutional accountability, and service delivery excellence through disciplined management, stakeholder coordination, and transparent governance frameworks.' },
  { icon: '📊', title: 'Finance & Economic Planning', featured: false, tag: 'Open Portfolio', desc: 'Applying data analysis skills and evidence-based decision-making to support sound fiscal planning, budget oversight, and economic development strategy across Kiambu County.' },
  { icon: '🌾', title: 'Agriculture & Rural Development', featured: false, tag: 'Open Portfolio', desc: 'Leveraging community engagement expertise and stakeholder facilitation to connect farmers with resources, markets, and government support programmes.' },
  { icon: '💻', title: 'ICT & Digital Innovation', featured: false, tag: 'Open Portfolio', desc: 'Harnessing certified expertise in AI, web development, cybersecurity, and digital tools to lead Kiambu\'s transition into an efficient, digitally-enabled county government.' },
]

const PRO_EXP = [
  { year: '2022 – Present', role: 'Public Communication Officer', org: 'County Government of Kiambu', desc: 'Spearheading strategic government communications, managing real-time digital community engagement across Facebook and X, producing professional multimedia content, and translating complex county policy into compelling public messaging that builds citizen trust and drives participation.' },
  { year: 'Sep – Nov 2023', role: 'Ward Supervisor – Farmers Registration', org: 'National Government of Kenya', desc: 'Led and supervised a team of five agripreneurs in electronic data collection for a national farmer registration initiative. Delivered the highest project completion rate among 54 supervisors across Kiambu County — ahead of schedule.' },
  { year: '2021 – 2022', role: 'Public Communications Officer – Intern', org: 'Ministry of ICT & Digital Economy', desc: 'Authored field reports, produced DSLR photography and video content for national campaigns, monitored government media coverage, and designed digital communication graphics for official publications.' },
  { year: '2021', role: 'Electoral Clerk', org: 'IEBC', desc: 'Operated the KIEMS kit during the Kiambaa by-election, ensuring accurate voter verification and serving as the primary public contact point for a dignified, seamless electoral experience.' },
]

const VOL_EXP = [
  { year: '2014–16 · 2018–Present', role: 'Church Secretary & Treasurer', org: 'Local Church Council', desc: 'Providing administrative leadership, financial management, and congregational communications for a large faith community — including meeting minutes, agenda preparation, and financial disbursements.' },
  { year: '2024 – Present', role: 'Secretary', org: 'Community Men\'s Welfare & Support Group', desc: 'Coordinating communications and mobilisation for 500+ members, managing administrative operations, and liaising with community leaders to identify needs and deploy resources for timely interventions.' },
]

const CERT_GROUPS = [
  {
    title: 'Data Analysis',
    certs: [
      { icon: '📊', name: 'Data Analysis Certification', issuer: 'Insdev Consulting, 2026' },
      { icon: '📈', name: 'Managing Data Analysis', issuer: 'Johns Hopkins University via Coursera, 2020' },
      { icon: '📋', name: 'Excel Skills for Business: Essentials', issuer: 'Macquarie University via Coursera, 2020' },
    ],
  },
  {
    title: 'Artificial Intelligence & Emerging Technology',
    certs: [
      { icon: '🤖', name: 'AI Fundamentals', issuer: 'IBM, 2025' },
      { icon: '💡', name: 'Critical Thinking in the AI Era', issuer: 'HP Foundation, 2026' },
      { icon: '🔒', name: 'Cybersecurity & Emerging Technologies Awareness', issuer: 'ICT Authority Kenya, 2024' },
    ],
  },
  {
    title: 'Digital Marketing & Communications',
    certs: [
      { icon: '📱', name: 'Social Media Management', issuer: 'Meta via Coursera, 2021' },
      { icon: '🔍', name: 'Advanced Content & Social Tactics to Optimise SEO', issuer: 'UC Davis via Coursera, 2021' },
      { icon: '📣', name: 'Integrated Marketing Communications (IMC)', issuer: 'IE Business School via Coursera, 2021' },
    ],
  },
  {
    title: 'Technical & Web Development',
    certs: [
      { icon: '🌐', name: 'Web Development Fundamentals (HTML5, CSS3, JavaScript)', issuer: 'IBM, 2025' },
      { icon: '💻', name: 'Computer Studies', issuer: 'PrimeTech College, 2021' },
    ],
  },
  {
    title: 'Leadership & Management',
    certs: [
      { icon: '🏅', name: 'Leadership and Management', issuer: 'Kenyatta University, 2020–2021' },
      { icon: '🧠', name: 'Leadership and Emotional Intelligence', issuer: 'Indian School of Business (ISB) via Coursera, 2020' },
    ],
  },
]

const EDU = [
  { icon: '🎓', degree: 'Bachelor of Business Administration (BCom), Marketing', school: 'Kenyatta University', year: 'December 2025' },
  { icon: '📜', degree: 'Diploma in Public Relations', school: 'Kenyatta University', year: 'July 2021' },
  { icon: '🏫', degree: 'Kenya Certificate of Secondary Education (KCSE)', school: 'Karuri High School', year: 'December 2004' },
]

/* ── COMPONENT ── */
export default function Home() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]           = useState(false)
  const [sending, setSending]     = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    const link = `mailto:kelvinkam24@gmail.com?subject=${encodeURIComponent(form.subject || 'Message from your website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(link, '_blank')
    setTimeout(() => { setSending(false); setSent(true) }, 800)
  }

  return (
    <>
      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        {NAV.map(([label, id]) => (
          <a key={id} href="#" onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a>
        ))}
        <a href="#" className="m-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Get in Touch</a>
        <div className="mobile-social">
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={TWITTER}  target="_blank" rel="noreferrer">X / Twitter</a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>

      {/* NAV */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-logo">Kelvin <span>Kamau</span></div>
        <ul className="nav-links" role="list">
          {NAV.map(([label, id]) => (
            <li key={id}><a href="#" onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-social">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a href={TWITTER}  target="_blank" rel="noreferrer" aria-label="X/Twitter">𝕏</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="nav-cta">Contact</a>
        </div>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero section" id="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">CECM Candidate · Kiambu County Government</p>
          <h1 className="hero-name">
            Kelvin<br /><em>Mwangi</em><br />Kamau
          </h1>
          <p className="hero-role">BCom Marketing · MPRSK · Accredited Journalist (MCK)</p>
          <p className="hero-tagline">
            A results-driven government communications professional and lifelong learner — combining digital strategy, data analysis, AI literacy, and proven team leadership to deliver transformative public service across Kiambu County.
          </p>
          <div className="hero-btns">
            <button className="btn-gold" onClick={() => scrollTo('portfolios')}>View My Portfolios</button>
            <button className="btn-ghost" onClick={() => scrollTo('contact')}>Send a Message</button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-num">4+</div><div className="hero-stat-label">Years Gov't Service</div></div>
            <div className="hero-stat"><div className="hero-stat-num">14+</div><div className="hero-stat-label">Certifications</div></div>
            <div className="hero-stat"><div className="hero-stat-num">500+</div><div className="hero-stat-label">Community Members Led</div></div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="/photos/kelvin-graduation.jpg"
            alt="Kelvin Mwangi Kamau in graduation gown at Kenyatta University"
            className="hero-photo"
          />
          <div className="hero-photo-overlay" />
        </div>
      </section>

      {/* KENYA FLAG */}
      <div className="flag" role="presentation" aria-hidden="true">
        <div style={{ background: '#006600' }} />
        <div style={{ background: '#cc0000' }} />
        <div style={{ background: '#000000' }} />
        <div style={{ background: '#ffffff' }} />
      </div>

      {/* ── ABOUT ── */}
      <section className="about section" id="about" aria-label="About Kelvin Kamau">
        <div className="container">
          <div className="about-grid">
            <div className="about-photo-wrap">
              <img
                src="/photos/kelvin-formal.jpg"
                alt="Kelvin Mwangi Kamau – formal portrait, PRSK-certified communications professional"
                className="about-photo-main"
              />
              <div className="about-photo-grad" />
              <div className="about-badge">MPRSK · MCK Accredited</div>
            </div>
            <div className="about-body">
              <p className="section-label">About Kelvin</p>
              <h2 className="section-title">A Leader Forged in Public Service</h2>
              <div className="divider" />
              <p>
                I am <strong>Kelvin Mwangi Kamau</strong> — a PRSK-certified Public Communications Professional, BCom Marketing graduate from Kenyatta University, and Accredited Journalist with the Media Council of Kenya. My career has been built at the intersection of government, digital strategy, and community leadership, giving me a rare, cross-disciplinary perspective on what makes public service truly work.
              </p>
              <p>
                Currently serving as Public Communication Officer at the County Government of Kiambu, I have spent over four years translating complex government policy into compelling public narratives, managing community engagement across digital platforms, and producing professional multimedia content that connects citizens to their county. I understand Kiambu's needs — not from a boardroom, but from the ground.
              </p>
              <p>
                My commitment to lifelong learning has driven me to acquire 14+ professional certifications across artificial intelligence, data analysis, cybersecurity, web development, SEO, and leadership — equipping me with modern tools that can make Kiambu County's administration smarter, faster, and more accountable.
              </p>
              <p>
                As CECM, I will bring disciplined management, evidence-based decision-making, and a servant's heart to whichever portfolio I am entrusted with. I lead teams that deliver — and I hold myself to the same standard.
              </p>
              <div className="about-pills">
                {['PRSK Member', 'MCK Accredited Journalist', 'BCom Marketing – KU', 'Diploma PR – KU', 'IBM AI Certified', 'Data Analyst', 'SEO Specialist', 'Team Leader'].map(p => (
                  <span className="pill" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIOS ── */}
      <section className="portfolios section" id="portfolios" aria-label="Portfolio areas">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--brass-light)' }}>Areas of Focus</p>
          <h2 className="section-title on-dark">Portfolios I Am Prepared<br />to Lead with Excellence</h2>
          <div className="divider" />
          <div className="portfolio-grid">
            {PORTFOLIOS.map((p, i) => (
              <article className={`portfolio-card${p.featured ? ' featured' : ''}`} key={p.title}>
                <div className="portfolio-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="portfolio-icon">{p.icon}</div>
                <h3 className="portfolio-title">{p.title}</h3>
                <p className="portfolio-desc">{p.desc}</p>
                {p.tag && <span className="portfolio-tag">{p.tag}</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience section" id="experience" aria-label="Professional experience">
        <div className="container">
          <p className="section-label">Track Record</p>
          <h2 className="section-title">Experience That Speaks<br />for Itself</h2>
          <div className="divider" />

          <div className="exp-cat">💼 Professional Experience</div>
          <div className="timeline">
            {PRO_EXP.map(e => (
              <div className="tl-item" key={e.role}>
                <div className="tl-year">{e.year}</div>
                <div className="tl-dot" />
                <div className="tl-card pro">
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-org">{e.org}</div>
                  <p className="tl-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-cat">🤝 Volunteer &amp; Community Leadership</div>
          <div className="timeline">
            {VOL_EXP.map(e => (
              <div className="tl-item" key={e.role}>
                <div className="tl-year">{e.year}</div>
                <div className="tl-dot" />
                <div className="tl-card vol">
                  <div className="tl-role">{e.role}</div>
                  <div className="tl-org">{e.org}</div>
                  <p className="tl-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education section" id="education" aria-label="Education and certifications">
        <div className="container">
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education &amp; Lifelong<br />Learning</h2>
          <div className="divider" />
          <div className="edu-grid">
            {EDU.map(e => (
              <div className="edu-card" key={e.degree}>
                <div className="edu-icon">{e.icon}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-year">{e.year}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <p className="section-label">Professional Development</p>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>14+ Certifications Across<br />Five Disciplines</h3>
            <div className="divider" />
            <div className="cert-groups">
              {CERT_GROUPS.map(g => (
                <div key={g.title}>
                  <div className="cert-group-title">{g.title}</div>
                  <div className="cert-grid">
                    {g.certs.map(c => (
                      <div className="cert-card" key={c.name}>
                        <div className="cert-icon">{c.icon}</div>
                        <div>
                          <div className="cert-name">{c.name}</div>
                          <div className="cert-issuer">{c.issuer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="gallery section" id="gallery" aria-label="Photo gallery">
        <div className="container">
          <p className="section-label" style={{ color: 'var(--brass-light)' }}>Gallery</p>
          <h2 className="section-title on-dark">The Journey in Pictures</h2>
          <div className="divider" />
          <div className="gallery-grid">
            <img src="/photos/kelvin-graduation.jpg"   alt="Kelvin Mwangi Kamau graduating from Kenyatta University" className="gallery-img wide" />
            <img src="/photos/kelvin-formal.jpg"       alt="Kelvin Kamau formal professional portrait" className="gallery-img" />
            <img src="/photos/kelvin-red.jpg"          alt="Kelvin Mwangi Kamau in red shirt – thoughtful pose" className="gallery-img" />
            <img src="/photos/kelvin-outdoor.jpg"      alt="Kelvin Kamau at Nairobi City County Governor's Office" className="gallery-img" />
            <img src="/photos/kelvin-striped.jpg"      alt="Kelvin Kamau professional portrait in striped shirt" className="gallery-img" />
            <img src="/photos/kelvin-suit.jpg"         alt="Kelvin Mwangi Kamau in suit and red tie" className="gallery-img" />
            <img src="/photos/kelvin-glasses.jpg"      alt="Kelvin Kamau wearing glasses – professional headshot" className="gallery-img" />
            <img src="/photos/kelvin-kamau-holding-microphone.jpg"      alt="Kelvin Kamau adressing a gathering – professional headshot" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* ── SOCIAL STRIP ── */}
      <section className="social-strip" aria-label="Social media links">
        <div className="container">
          <div className="social-inner">
            <p className="social-label">Connect with Kelvin</p>
            <div className="social-links">
              <a className="social-btn linkedin" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">🔗 LinkedIn</a>
              <a className="social-btn twitter"  href={TWITTER}  target="_blank" rel="noreferrer" aria-label="X Twitter profile">𝕏 Twitter / X</a>
              <a className="social-btn facebook" href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook profile">📘 Facebook</a>
              <a className="social-btn tiktok"   href={TIKTOK}   target="_blank" rel="noreferrer" aria-label="TikTok profile">🎵 TikTok</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact section" id="contact" aria-label="Contact Kelvin Kamau">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="section-label" style={{ color: 'var(--brass-light)' }}>Get in Touch</p>
              <h2 className="section-title on-dark">Let's Build Kiambu's<br />Future Together</h2>
              <div className="divider" />
              <p>
                Whether you are a community leader, a fellow government professional, or a Kiambu resident with ideas and concerns — I want to hear from you. Great governance starts with great listening.
              </p>
              <div className="contact-detail">
                <div className="contact-icon">📧</div>
                <div className="contact-text"><strong>Email</strong>kelvinkam24@gmail.com</div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">📞</div>
                <div className="contact-text"><strong>Phone</strong>+254 724 557 035 · +254 756 739 953</div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">📮</div>
                <div className="contact-text"><strong>Post</strong>P.O. Box 2344-00900, Kiambu, Kenya</div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">🔗</div>
                <div className="contact-text">
                  <strong>LinkedIn</strong>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: 'var(--brass-light)' }}>linkedin.com/in/kelvin-kamau-mprsk-7a318424b</a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {sent ? (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. Kelvin will respond shortly.</p>
                </div>
              ) : (
                <>
                  <div className="form-row"><label className="form-label">Full Name</label><input className="form-input" name="name" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                  <div className="form-row"><label className="form-label">Email Address</label><input className="form-input" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
                  <div className="form-row"><label className="form-label">Subject</label><input className="form-input" name="subject" placeholder="What is this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} /></div>
                  <div className="form-row"><label className="form-label">Message</label><textarea className="form-textarea" name="message" placeholder="Share your thoughts, concerns, or ideas…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></div>
                  <button className="form-submit" onClick={handleSubmit} disabled={sending}>{sending ? 'Opening Mail…' : 'Send Message →'}</button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer role="contentinfo">
        <div className="container">
          <div className="footer-links">
            {NAV.map(([label, id]) => (
              <a key={id} href="#" onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a>
            ))}
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={TWITTER}  target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <p>© 2026 <strong>Kelvin Mwangi Kamau</strong> · CECM Candidate · County Government of Kiambu · All Rights Reserved</p>
          <p style={{ marginTop: '0.4rem' }}>kelvinkam24@gmail.com · +254 724 557 035 · Kiambu County, Kenya</p>
        </div>
      </footer>

      {/* NOSCRIPT for bots that don't execute JS */}
      <noscript>
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
          <h1>Kelvin Mwangi Kamau – CECM Candidate, County Government of Kiambu</h1>
          <p>PRSK-certified Public Communications Professional and BCom Marketing graduate seeking the County Executive Committee Member (CECM) position in Kiambu County, Kenya. Preferred portfolios: Youth Affairs, Communications, Administration.</p>
          <p>Email: kelvinkam24@gmail.com | Phone: +254 724 557 035 | LinkedIn: linkedin.com/in/kelvin-kamau-mprsk-7a318424b</p>
        </div>
      </noscript>
    </>
  )
}
