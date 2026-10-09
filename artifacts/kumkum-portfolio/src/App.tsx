import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  FileText,
  Github,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';
import { achievements, education, portfolio, projects, skillGroups, type Project } from './portfolio-data';

const navItems = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Achievements', '#achievements'],
  ['Contact', '#contact'],
];

function ProjectIllustration({ project }: { project: Project }) {
  return (
    <div className={`project-visual ${project.accent}`} aria-label={`${project.name} illustrative interface mockup`}>
      {project.mockup === 'plant' ? (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /><span className="visual-window-title">Leaf analysis · mockup</span></div>
          <div className="visual-content"><div className="visual-leaf" /><div className="visual-lines"><i /><i /><i /></div></div>
          <div className="visual-note">Illustrative heatmap</div>
        </div>
      ) : project.mockup === 'traffic' ? (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /><span className="visual-window-title">Vehicle detection · mockup</span></div>
          <div className="visual-content"><div className="visual-road"><span className="box-detect" /><span className="box-detect second" /></div></div>
          <div className="visual-note">Illustrative detections</div>
        </div>
      ) : project.mockup === 'intent' ? (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /><span className="visual-window-title">Intent-OS · concept</span></div>
          <div className="visual-content"><div className="visual-orb"><MessageCircle size={25} /></div><div className="visual-lines"><i /><i /><i /></div></div>
          <div className="visual-note">Concept preview</div>
        </div>
      ) : project.mockup === 'lifestyle' ? (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /><span className="visual-window-title">Daily rhythm · concept</span></div>
          <div className="visual-content"><div className="visual-habit"><i /><i /><i /><i /><i /><i /></div><div className="visual-lines"><i /><i /><i /></div></div>
          <div className="visual-note">Concept preview</div>
        </div>
      ) : (
        <div className="visual-window">
          <div className="visual-window-top"><i /><i /><i /><span className="visual-window-title">{project.mockup === 'stock' ? 'Forecast explorer · mockup' : 'Resume match · mockup'}</span></div>
          <div className="visual-content">
            <div className={`visual-slab ${project.mockup === 'stock' ? 'chart' : ''}`} />
            <div className="visual-lines"><i /><i /><i /></div>
          </div>
          <div className="visual-note">{project.mockup === 'stock' ? 'Illustrative data' : 'Illustrative UI'}</div>
        </div>
      )}
    </div>
  );
}

function FeaturedMockup() {
  return (
    <div className="feature-preview" role="img" aria-label="Illustrative ResuMatch dashboard mockup; not a screenshot of the live application">
      <div className="browser-top"><span className="browser-dots"><i /><i /><i /></span><span>resumatch / overview</span><span>MOCKUP</span></div>
      <div className="mock-dashboard">
        <div className="mock-header"><span>Resume match overview</span><span className="mock-badge">Illustrative preview</span></div>
        <div className="mock-body">
          <div className="upload-box"><div className="upload-symbol"><FileText size={15} /></div><strong>Resume document</strong><small>PDF analysis interface</small></div>
          <div className="score-box"><div className="score-title">MATCH SCORE · EXAMPLE UI</div><div className="score-circle">—</div></div>
        </div>
        <div className="mock-bottom">
          <div className="mock-list"><strong>Matching skills</strong><div className="mock-line" /><div className="mock-line" /><div className="mock-line" /></div>
          <div className="mock-list"><strong>Recommended next steps</strong><div className="mock-line" /><div className="mock-line" /><div className="mock-line" /></div>
        </div>
      </div>
      <p className="mock-caption">Conceptual interface only · no real score or live product screenshot</p>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" data-testid={`dialog-project-${project.id}`}>
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details" data-testid="button-close-project-details"><X size={19} /></button>
        <div className="section-kicker">{project.category}</div>
        <h2 id="dialog-title">{project.name}</h2>
        <div className="dialog-subtitle">{project.subtitle}</div>
        <span className="dialog-mock-label">Preview is an illustrative mockup, not a deployed product screenshot</span>
        <div className="dialog-body">
          <p>{project.description}</p>
          <div className="dialog-section"><h3>Problem</h3><p>{project.problem}</p></div>
          <div className="dialog-section"><h3>Approach</h3><p>{project.solution}</p></div>
          <div className="dialog-section"><h3>Implementation notes</h3><ul>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="dialog-section"><h3>Project features</h3><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="dialog-section"><h3>Technologies</h3><div className="dialog-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          <div className="dialog-section"><h3>Learning</h3><p>{project.learning}</p></div>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [formFeedback, setFormFeedback] = useState('');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const timer = window.setInterval(() => setSpecialtyIndex((index) => (index + 1) % portfolio.specialties.length), 2900);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main section[id], main header[id]').forEach((section) => observer.observe(section));
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    if (!name || !email || !subject || !message) return;
    const body = `Hello Kumkum,\n\n${message}\n\n— ${name}\nReply to: ${email}`;
    setFormFeedback('Your email app should open with this message prepared. Review it and press Send there; this website does not transmit messages.');
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const closeProject = () => setSelectedProject(null);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="topbar" aria-label="Primary navigation">
        <div className="container nav-wrap">
          <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)} data-testid="link-home-wordmark">
            <span className="mark">K</span><span>Kumkum Solanki</span>
          </a>
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>
            ))}
          </div>
        </div>
      </nav>

      <main id="main-content">
        <header className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><i /> Open to early-career opportunities</div>
              <p className="hero-eyebrow">{portfolio.title}</p>
              <h1 data-testid="text-hero-name">Kumkum <span>Solanki.</span></h1>
              <p className="hero-headline">{portfolio.heroHeadline}</p>
              <p className="hero-description">{portfolio.heroDescription}</p>
              <p className="hero-fields" aria-live="polite" data-testid="text-rotating-specialty">Exploring · {portfolio.specialties[specialtyIndex]}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects" data-testid="link-explore-projects">Explore my projects <ArrowDownRight size={16} /></a>
                <button className="button button-light" type="button" disabled={!portfolio.resumePath} aria-disabled={!portfolio.resumePath} title="Add a real resume PDF in src/portfolio-data.ts to enable this action" data-testid="button-download-resume"><FileText size={16} /> Resume unavailable</button>
                <a className="button button-quiet" href="#contact" data-testid="link-contact-me">Contact me <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-scroll"><ArrowDownRight size={14} /> Scroll to explore</div>
            </div>
            <div className="portrait-stage" aria-label="Portrait placeholder">
              <div className="orbit orbit-a">Python · ML</div>
              <div className="orbit orbit-b">build / learn / repeat</div>
              <div className="orbit orbit-c">AI + practical software</div>
              {portfolio.portraitPath ? (
                <div className="portrait-frame"><img src={portfolio.portraitPath} alt={`Portrait of ${portfolio.name}`} loading="lazy" /></div>
              ) : (
                <div className="portrait-frame" data-testid="portrait-placeholder">
                  <div className="portrait-icon"><BrainCircuit size={35} strokeWidth={1.6} /></div>
                  <div className="portrait-label">Portrait goes here</div>
                  <div className="portrait-note">Replaceable placeholder<br />No photo has been supplied</div>
                </div>
              )}
              <div className="hero-stamp">CURIOUS<br />BY DESIGN</div>
            </div>
          </div>
        </header>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div className="about-aside">
              <div className="section-kicker">A little about me</div>
              <h2 className="section-title">Curiosity, meet implementation.</h2>
              <p className="section-intro">I like working where data, intelligent systems, and useful software meet.</p>
              <div className="about-aside-card"><small>Based in</small><strong><MapPin size={16} /> {portfolio.location}</strong></div>
            </div>
            <div className="about-copy" data-testid="text-about-content">
              {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="tag-row">{portfolio.quickTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="featured" id="featured-project">
          <div className="container">
            <div className="section-kicker">Featured work · 01</div>
            <h2 className="section-title">A closer look at ResuMatch.</h2>
            <p className="section-intro">A full-stack resume analysis and enhancement project built to make job-description alignment easier to inspect.</p>
            <div className="feature-panel">
              <div className="feature-text">
                <div className="feature-subtitle">AI RESUME ANALYSIS AND ENHANCEMENT SYSTEM</div>
                <h3>ResuMatch</h3>
                <p>{projects[0].description}</p>
                <ul className="feature-points">
                  <li>Resume PDF upload and text extraction</li>
                  <li>Job description analysis</li>
                  <li>Resume-to-requirement comparison</li>
                  <li>Actionable improvement recommendations</li>
                </ul>
                <p>React frontend · FastAPI backend · Python · NLP-related text processing</p>
                <div className="feature-actions">
                  <button type="button" className="button button-primary" onClick={() => setSelectedProject(projects[0])} data-testid="button-resumatch-details">View case study <ArrowUpRight size={15} /></button>
                  <button type="button" className="button button-light" disabled aria-disabled="true" title="A real project URL has not been supplied" data-testid="button-resumatch-demo">Live demo unavailable</button>
                  <button type="button" className="button button-light" disabled aria-disabled="true" title="A real repository URL has not been supplied" data-testid="button-resumatch-github">Repository unavailable</button>
                </div>
              </div>
              <div>
                <FeaturedMockup />
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="container">
            <div className="projects-head">
              <div><div className="section-kicker">Selected technical work</div><h2 className="section-title">Projects, in progress and explored.</h2></div>
              <p className="section-intro">Every preview below is an illustrative HTML/CSS mockup, not a screenshot from a deployed application. Open a project to explore the confirmed scope.</p>
            </div>
            <div className="projects-grid">
              {projects.slice(1).map((project) => (
                <article className="project-card" key={project.id} data-testid={`card-project-${project.id}`}>
                  <ProjectIllustration project={project} />
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><span>Illustrative preview</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-bottom">
                      <button className="details-link" type="button" onClick={() => setSelectedProject(project)} data-testid={`button-project-details-${project.id}`}>View details <ArrowUpRight size={15} /></button>
                      <span className="no-links">Project links not supplied</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="container skills-layout">
            <div className="skills-intro">
              <div className="section-kicker">The toolkit</div>
              <h2 className="section-title">Skills I bring to the work.</h2>
              <p className="section-intro">A recruiter-friendly scan across programming, ML, data, software, and core CS. No invented ratings—just the technologies and concepts in my toolkit.</p>
            </div>
            <div className="skills-grid" data-testid="grid-skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-panel" key={group.title} data-testid={`card-skill-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <h3>{group.title}</h3>
                  <div className="skill-items">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="container">
            <div className="section-kicker">Education</div>
            <h2 className="section-title">Learning the foundations.</h2>
            <p className="section-intro">Formal study in computer science alongside a focused specialization in AI and machine learning.</p>
            <div className="edu-grid">
              {education.map((item, index) => (
                <article className={`edu-card ${index === 0 ? 'featured-edu' : ''}`} key={item.title} data-testid={`card-education-${index}`}>
                  <span className="timeline-dot" />
                  <div className="edu-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p><strong>{item.institution}</strong><br />{item.location}</p>
                  <span className="edu-result">{item.result}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section achievements" id="achievements">
          <div className="container">
            <div className="section-kicker">Recognition & learning</div>
            <h2 className="section-title">Milestones along the way.</h2>
            <div className="ach-grid">
              {achievements.map((achievement, index) => (
                <article className="ach-card" key={achievement.title} data-testid={`card-achievement-${index}`}>
                  <div className="ach-index">0{index + 1} / EXPERIENCE</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="ach-type">{achievement.kind}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resume" id="resume">
          <div className="container resume-card">
            <div>
              <div className="section-kicker">Resume</div>
              <h2>One page. The full picture.</h2>
              <p>{portfolio.name} · AI/ML and software development profile. For now, the resume file has not been provided; add a real PDF path to the central configuration to enable downloads.</p>
              <div className="resume-status" data-testid="status-resume-unavailable">No resume file configured — no download link is shown.</div>
            </div>
            <button type="button" className="button" disabled aria-disabled="true" title="Configure portfolio.resumePath when the actual PDF is ready" data-testid="button-resume-download"><FileText size={17} /> Resume not available</button>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-shell">
            <div className="contact-copy">
              <div className="section-kicker">Say hello</div>
              <h2>Let's build something meaningful.</h2>
              <p>I'm interested in opportunities in AI/ML engineering, data science, data analytics, and software development. I'd love to connect with teams working on meaningful technical challenges.</p>
              <div className="contact-methods">
                <a className="contact-method" href={`mailto:${portfolio.email}`} data-testid="link-contact-email"><span className="method-icon"><Mail size={17} /></span>{portfolio.email}</a>
                <a className="contact-method" href={portfolio.phoneHref} data-testid="link-contact-phone"><span className="method-icon"><Phone size={17} /></span>{portfolio.phone}</a>
                <div className="contact-method" data-testid="text-contact-location"><span className="method-icon"><MapPin size={17} /></span>{portfolio.location}</div>
              </div>
              <div className="social-row" aria-label="Professional profiles">
                {portfolio.links.linkedin ? <a className="social-chip" href={portfolio.links.linkedin} target="_blank" rel="noreferrer" data-testid="link-social-linkedin">LinkedIn <ArrowUpRight size={12} /></a> : <span className="social-chip" aria-disabled="true" title="Add a real profile URL in src/portfolio-data.ts">LinkedIn · not configured</span>}
                {portfolio.links.github ? <a className="social-chip" href={portfolio.links.github} target="_blank" rel="noreferrer" data-testid="link-social-github"><Github size={12} /> GitHub <ArrowUpRight size={12} /></a> : <span className="social-chip" aria-disabled="true" title="Add a real profile URL in src/portfolio-data.ts">GitHub · not configured</span>}
                {portfolio.links.leetcode ? <a className="social-chip" href={portfolio.links.leetcode} target="_blank" rel="noreferrer" data-testid="link-social-leetcode">LeetCode <ArrowUpRight size={12} /></a> : <span className="social-chip" aria-disabled="true" title="Add a real profile URL in src/portfolio-data.ts">LeetCode · not configured</span>}
              </div>
            </div>
            <form className="contact-form" onSubmit={onContactSubmit} noValidate data-testid="form-contact">
              <h3 className="form-heading">Send a note</h3>
              <p className="form-note">Fields are validated in your browser. Submit opens your email app with a draft; nothing is sent by this site.</p>
              <div className="form-row">
                <div className="field"><label htmlFor="contact-name">Full name</label><input id="contact-name" name="name" type="text" autoComplete="name" required minLength={2} placeholder="Your name" data-testid="input-contact-name" /></div>
                <div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" data-testid="input-contact-email" /></div>
              </div>
              <div className="field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" required minLength={3} placeholder="What would you like to discuss?" data-testid="input-contact-subject" /></div>
              <div className="field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" required minLength={10} placeholder="A little context helps..." data-testid="input-contact-message" /></div>
              <button className="button button-primary form-submit" type="submit" data-testid="button-contact-submit">Prepare email draft <ArrowUpRight size={16} /></button>
              {formFeedback && <p className="form-feedback" role="status" data-testid="status-contact-feedback"><Check size={15} /> {formFeedback}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><div className="footer-name">{portfolio.name}</div><small>AI/ML · Software · Data Science</small></div>
          <div className="footer-links">
            <a href={`mailto:${portfolio.email}`} data-testid="link-footer-email">{portfolio.email}</a>
            <a href="#home" data-testid="link-footer-back-to-top">Back to top</a>
          </div>
          <small>© {new Date().getFullYear()} Kumkum Solanki</small>
        </div>
      </footer>
      {showTop && <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })} aria-label="Back to top" data-testid="button-back-to-top"><ArrowUp size={18} /></button>}
      {selectedProject && <ProjectDialog project={selectedProject} onClose={closeProject} />}
    </div>
  );
}

export default App;
