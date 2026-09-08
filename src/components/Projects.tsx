import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

function ProjectVisual({ title, number }: { title: string; number: string }) {
  switch (title) {
    case "LearnCheck!":
      return (
        <div className="visual-learncheck">
          <div className="mockup-header">
            <span>LEARNCHECK!</span>
            <span>03 / 10</span>
          </div>

          <div className="mockup-question">
            <span className="mockup-label">QUESTION</span>
            <h4>Which statement is true?</h4>

            <div className="mockup-option selected">
              <span>●</span>
              <span>Option B</span>
            </div>

            <div className="mockup-option">
              <span>○</span>
              <span>Option C</span>
            </div>
          </div>

          <div className="mockup-progress">
            <span />
          </div>
        </div>
      );

    case "Outpatient Visit Forecasting":
      return (
        <div className="visual-forecasting">
          <div className="forecast-header">
            <span>OUTPATIENT FORECAST</span>
            <span>PROPHET</span>
          </div>

          <div className="forecast-chart">
            <div className="chart-grid" />
            <svg
              viewBox="0 0 400 180"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 135 C35 120, 45 145, 75 105 S120 125, 150 85 S195 110, 220 65 S265 90, 295 50 S345 75, 400 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />

              <path
                d="M0 150 C50 135, 80 145, 120 115 S180 125, 220 95 S280 105, 320 75 S365 80, 400 55"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7 7"
              />
            </svg>
          </div>

          <div className="forecast-legend">
            <span>
              <i className="legend-dot" />
              Actual
            </span>

            <span>
              <i className="legend-line" />
              Forecast
            </span>
          </div>
        </div>
      );

    case "OpenMusic API":
      return (
        <div className="visual-api">
          <div className="terminal-header">
            <span />
            <span />
            <span />
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-method">GET</span> /songs
            </p>

            <p>
              <span className="terminal-method">POST</span> /songs
            </p>

            <p>
              <span className="terminal-method">PUT</span> /songs/:id
            </p>

            <p>
              <span className="terminal-method">DELETE</span> /songs/:id
            </p>

            <div className="terminal-response">
              <span>200 OK</span>
              <br />
              {"{ status: 'success' }"}
            </div>
          </div>
        </div>
      );

    case "Discussion Forum App":
      return (
        <div className="visual-forum">
          <div className="forum-header">
            <span>DISCUSSION FORUM</span>
            <span>•••</span>
          </div>

          <div className="forum-topic">
            <div className="forum-avatar">01</div>

            <div>
              <h4>How to use React Hook?</h4>
              <p>12 replies · 5 min ago</p>
            </div>
          </div>

          <div className="forum-topic">
            <div className="forum-avatar">02</div>

            <div>
              <h4>Understanding REST API</h4>
              <p>8 replies · 12 min ago</p>
            </div>
          </div>

          <div className="forum-topic">
            <div className="forum-avatar">03</div>

            <div>
              <h4>Best practices in JavaScript</h4>
              <p>15 replies · 20 min ago</p>
            </div>
          </div>
        </div>
      );

    case "Laptop Price Prediction":
      return (
        <div className="visual-laptop">
          <div className="laptop-icon">
            <div className="laptop-screen">
              <span>PRICE</span>
              <strong>14.25M</strong>
            </div>

            <div className="laptop-base" />
          </div>

          <div className="prediction-info">
            <span>PREDICTED PRICE</span>
            <strong>Rp 14.250.000</strong>
          </div>
        </div>
      );

    default:
      return (
        <div className="project-visual-default">
          <span>{number}</span>
        </div>
      );
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header">
        <Reveal>
          <p className="section-label">SELECTED WORK</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading">
            Things I&apos;ve <span>built.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="section-intro">
            A selection of projects where I applied my skills to solve practical
            problems and build useful solutions.
          </p>
        </Reveal>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={0.15 + index * 0.15} y={50}>
            <article className="project-card">
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-role">Role — {project.role}</p>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-visual">
                <ProjectVisual title={project.title} number={project.number} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
