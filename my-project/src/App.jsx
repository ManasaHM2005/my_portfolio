import { useEffect, useState } from 'react'
import './App.css'

// ---- DATA ----
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#languages', label: 'Languages' },
]

const EDUCATION = [
  {
    emoji: '🎓',
    degree: 'Bachelor of Engineering',
    school: 'Maharaja Institute of Technology Mysore',
    year: 'Pursuing',
    score: '8.59 CGPA',
    yearType: 'current',
  },
  {
    emoji: '📗',
    degree: 'PUC (Pre-University Course)',
    school: 'Sri Ranganatha Pu College Hiriyur',
    year: '2023',
    score: '87.66%',
    yearType: 'year',
  },
  {
    emoji: '📘',
    degree: 'SSLC (Secondary School)',
    school: 'Assumption English High School Hiriyur',
    year: '2021',
    score: '92.80%',
    yearType: 'year',
  },
]

const SKILLS = [
  { icon: '💻', name: 'C' },
  { icon: '🌐', name: 'HTML and CSS' },
  { icon: '🐍', name: 'Python' },
  { icon: '☕', name: 'Java' },
  { icon: '🗄️', name: 'MySQL' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '🌶️', name: 'Flask' },
]

const PROJECTS = [
  {
    title: 'Fake Product Identification using QR Code',
    bullets: [
      'Designed a system to verify product authenticity using QR codes',
      'Stored and validated product data using a database',
      'Improved customer trust by reducing counterfeit products',
    ],
    tags: ['QR Code', 'Database', 'Python'],
  },
  {
    title: 'Loan Application and Tracking System',
    bullets: [
      'Developed using HTML, CSS, JavaScript, MySQL',
      'Supports user login, loan application, and real-time status updates',
      'Ensures secure and organized loan data management',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Internlink-internship and job portal',
    bullets: [
      'A platform connecting students with internship and job opportunities',
      'Implemented features like user admin recruiter login,job posting and application tracking',
      'Designed a responsive interface with backend database integration for efficient job management',
    ],
    tags: ['React', 'FastAPI', 'MySQL', 'Full Stack'],
  },
]

const CERTIFICATES = [
  { icon: '🏅', name: 'C' },
  { icon: '☕', name: 'Java Programing' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐼', name: 'Pandas' },
  { icon: '⚛️', name: 'Developing Front-End Apps with React' },
]

const LANGUAGES = [
  { flag: '🇬🇧', name: 'English', level: 'Fluent' },
  { flag: '🇮🇳', name: 'Kannada', level: 'Native' },
]

// ---- COMPONENTS ----

function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <span className="navbar-logo">Manasa H M</span>
      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-glow" />
      <p className="hero-greeting">👋 Hello, I'm</p>
      <h1 className="hero-name">Manasa H M</h1>
      <p className="hero-tagline">
        <span>Engineering Student</span> · Building projects with{' '}
        <span>HTML, Python, Java & MySQL</span>
      </p>
      <div className="hero-contacts">
        <a
          href="mailto:manasahm2005@gmail.com"
          className="contact-chip"
          aria-label="Email"
        >
          <span className="icon">✉️</span> manasahm2005@gmail.com
        </a>
        <a
          href="tel:+918310055626"
          className="contact-chip"
          aria-label="Phone"
        >
          <span className="icon">📞</span> 83100 55626
        </a>
        <a
          href="https://github.com/ManasaHM2005"
          target="_blank"
          rel="noreferrer"
          className="contact-chip"
          aria-label="GitHub"
        >
          <span className="icon">🐙</span> ManasaHM2005
        </a>
        <a
          href="https://www.linkedin.com/in/manasa-h-m-758885328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="contact-chip"
          aria-label="LinkedIn"
        >
          <span className="icon">💼</span> LinkedIn
        </a>
      </div>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">
          View Projects →
        </a>
        <a href="#about" className="btn-secondary">
          About Me
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <span className="section-label">About</span>
      <h2 className="section-title">Who I Am</h2>
      <div className="about-card">
        <p className="about-text">
          I am a dedicated, organised and methodical individual. I have good
          interpersonal skills, am an excellent team worker and am very willing to
          learn and develop new skills. I am reliable and dependable and often seek
          new responsibilities within a wide range of employment areas. I am
          punctual with an excellent attendance record.
        </p>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <span className="section-label">Education</span>
      <h2 className="section-title">Academic Background</h2>
      <div className="education-timeline">
        {EDUCATION.map((edu, i) => (
          <div className="education-item" key={i}>
            <div className="edu-dot">{edu.emoji}</div>
            <div className="edu-content">
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-meta">
                <span className={`edu-badge ${edu.yearType}`}>
                  📅 {edu.year}
                </span>
                {edu.score && (
                  <span className="edu-badge score">⭐ {edu.score}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">What I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-number">0{i + 1}</div>
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-bullets">
              {project.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Certificates() {
  return (
    <section id="certificates">
      <span className="section-label">Certificates</span>
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {CERTIFICATES.map((cert) => (
          <div className="cert-card" key={cert.name}>
            <span className="cert-icon">{cert.icon}</span>
            <span className="cert-name">{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Languages() {
  return (
    <section id="languages">
      <span className="section-label">Languages</span>
      <h2 className="section-title">Languages Known</h2>
      <div className="lang-grid">
        {LANGUAGES.map((lang) => (
          <div className="lang-card" key={lang.name}>
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-name">{lang.name}</span>
            <span className="lang-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="footer-name">Manasa H M</span>
        <div className="footer-links">
          <a href="mailto:manasahm2005@gmail.com">Email</a>
          <a href="https://github.com/ManasaHM2005" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/manasa-h-m-758885328?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="tel:+918310055626">Phone</a>
        </div>
        <span className="footer-copy">© 2026 Manasa H M</span>
      </div>
    </footer>
  )
}

// ---- SCROLL SPY ----
function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'certificates', 'languages']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}

// ---- APP ----
function App() {
  const activeSection = useActiveSection()

  return (
    <div className="portfolio">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Languages />
      <Footer />
    </div>
  )
}

export default App
