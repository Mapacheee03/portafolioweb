import { useState } from "react";
import "../styles/home.css";

import { PROFILE } from "../data/profile";
import { PROJECTS } from "../data/projects";

interface SectionProps {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
}

function Section({
  number,
  title,
  id,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">{number}.</span>

        <h3 className="eyebrow-title">
          {title}
        </h3>

        <span className="eyebrow-line" />
      </div>

      {children}
    </section>
  );
}

interface HomeProps {
  onNavigate?: (id: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="portfolio">

      {/* SIDEBAR */}

      <aside className="sidebar">
        <div>
          <h1 className="name">
            {PROFILE.name}
          </h1>

          <h2 className="role">
            {PROFILE.role}
          </h2>


          <nav>
            <ul className="nav-list">
              {PROFILE.navigation.map((item, index) => (
                <li
                  key={item.href}
                  className="nav-item"
                >
                  <a
                    href={item.href}
                    className={`nav-link ${hovered === index ? "nav-link-active" : ""
                      }`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(item.href.replace("#", ""));
                    }}
                  >
                    <span
                      className={`nav-bar ${hovered === index
                          ? "nav-bar-active"
                          : ""
                        }`}
                    />

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="social">
          {PROFILE.social.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </aside>


      {/* CONTENIDO PRINCIPAL */}

      <main className="main">

        {/* SOBRE MÍ */}

        <Section
          number="01"
          title="Sobre mí"
          id="about"
        >
          {PROFILE.about.map((paragraph, index) => (
            <p
              key={index}
              className="paragraph"
            >
              {paragraph}
            </p>
          ))}
        </Section>


        {/* EXPERIENCIA */}

        <Section
          number="02"
          title="Experiencia"
          id="experience"
        >
          {PROFILE.experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="job"
            >
              <div className="job-period">
                {job.period}
              </div>

              <div className="job-body">
                <div className="job-role">
                  {job.role} ·{" "}

                  <span className="company">
                    {job.company}
                  </span>
                </div>

                <p className="job-description">
                  {job.description}
                </p>

                <div className="stack-row">
                  {job.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Section>


        {/* PROYECTOS */}

        <Section
          number="03"
          title="Proyectos"
          id="projects"
        >
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >
              <h4 className="card-title">
                {project.title}
              </h4>

              <p className="card-description">
                {project.description}
              </p>

              <div className="stack-row">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </Section>


      </main>
    </div>
  );
}