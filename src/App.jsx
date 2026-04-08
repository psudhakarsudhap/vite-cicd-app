import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const coreSkills = [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux Toolkit",
    "Java + Spring Boot",
    "Microservices",
    "CI/CD",
    "Docker + Kubernetes",
    "REST APIs",
  ];

  const experienceHighlights = [
    {
      role: "Senior Software Engineer",
      company: "Evernorth Health Services (The Cigna Group)",
      duration: "Aug 2025 - Present",
    },
    {
      role: "Senior Software Engineer",
      company: "Cognizant Technology Solutions India Pvt. Ltd",
      duration: "Dec 2024 - Jul 2025",
    },
    {
      role: "Senior Software Engineer",
      company: "Paymerang India Pvt. Ltd",
      duration: "Jan 2024 - Dec 2024",
    },
    {
      role: "Technical Analyst",
      company: "Coforge Ltd",
      duration: "Jan 2022 - Dec 2023",
    },
    {
      role: "Senior Software Engineer",
      company: "TechNVision Ventures Ltd (Solix)",
      duration: "Nov 2020 - Dec 2021",
    },
    {
      role: "Software Engineer",
      company: "HCL Technologies",
      duration: "Jan 2015 - Nov 2020",
    },
  ];

  const projects = [
    {
      title: "ATK (Administrative Tool Kit)",
      org: "Evernorth Health Services",
      duration: "Aug 2025 - Present",
      stack: "React, Redux Toolkit, Java, Spring Boot, MySQL",
      description:
        "Enterprise healthcare platform for PBM and prior authorization operations, handling configuration, clinical rules, and high-volume decision workflows.",
    },
    {
      title: "New York Power Authority",
      org: "Cognizant",
      duration: "Dec 2024 - Jul 2025",
      stack: "React, Next.js, TypeScript, Spring Boot",
      description:
        "Template-driven digital experience for NYPA focused on clean energy communication and customer-facing content workflows.",
    },
    {
      title: "Paymerang Automation Platform",
      org: "Paymerang India",
      duration: "Jan 2024 - Dec 2024",
      stack: "React, Remix, TypeScript",
      description:
        "AP payment automation interface to reduce manual processing, improve workflow speed, and support enterprise finance operations.",
    },
    {
      title: "Emirates Flight Booking",
      org: "Coforge",
      duration: "Jan 2022 - Dec 2023",
      stack: "React, Redux, Material UI",
      description:
        "Feature-rich flight booking engine with search, quotation, reservation, integrations, and customer management flows.",
    },
  ];

  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Senior Software Engineer</p>
          <h1>P Sudhakar</h1>
          <p className="hero-summary">
            Full-stack engineer with 10+ years in IT, including 7+ years of
            React.js and 4+ years of Java/Spring development. I build scalable
            SPAs, cloud-native applications, and production-ready microservices.
          </p>
          <div className="contact-list">
            <span>Mob: +91-9912715735</span>
            <span>Email: sudhakarpsse@gmail.com</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImg} alt="Sudhakar profile visual" />
        </div>
      </header>

      <section className="section-block">
        <h2>Professional Snapshot</h2>
        <p>
          Expertise in frontend architecture with React.js/Next.js and backend
          systems with Java/Spring Boot. Strong in API integration, state
          management, reusable component design, performance optimization,
          CI/CD, and Agile delivery.
        </p>
      </section>

      <section className="section-block">
        <h2>Core Skills</h2>
        <div className="skill-grid">
          {coreSkills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Career Timeline</h2>
        <div className="timeline">
          {experienceHighlights.map((item) => (
            <article key={item.company} className="timeline-item">
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <small>{item.duration}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-meta">{project.org}</p>
              <p className="project-meta">{project.duration}</p>
              <p>{project.description}</p>
              <p className="project-stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block two-column">
        <article>
          <h2>Education</h2>
          <ul>
            <li>M.Tech (IT), Sathyabama University, Chennai</li>
            <li>B.Tech (CSE), Sri Venkateswara University, Tirupati</li>
          </ul>
        </article>
        <article>
          <h2>Certification</h2>
          <ul>
            <li>React Nanodegree - Udacity</li>
          </ul>
          <h2>Strengths</h2>
          <ul>
            <li>Strong problem-solving and analytical skills</li>
            <li>Excellent communication and team collaboration</li>
            <li>Fast learner for emerging technologies</li>
            <li>Proven ownership of production-grade applications</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default App;
