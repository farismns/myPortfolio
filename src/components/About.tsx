import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-header">
        <Reveal>
          <p className="section-label">ABOUT ME</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading">
            A little bit <span>about me.</span>
          </h2>
        </Reveal>
      </div>

      <div className="about-content">
        <div className="about-description">
          <Reveal delay={0.15}>
            <p className="about-intro">
              I&apos;m Faris Maulana Saputra, an Information Systems graduate with
              hands-on experience in front-end development, back-end
              development, data analysis, and machine learning.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p>
              I enjoy learning how technology can be used to solve practical
              problems and building data-driven, user-focused applications. My
              technical interests include web development, data analytics,
              machine learning, and time-series forecasting.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p>
              Through academic projects, structured learning programs, and
              hands-on development experience, I&apos;ve developed an analytical
              and adaptable approach to building practical digital solutions.
            </p>
          </Reveal>
        </div>

        <div className="about-info">
          <Reveal delay={0.2}>
            <div className="info-card">
              <span className="info-number">01</span>

              <div>
                <h3>Education</h3>
                <p>
                  Bachelor of Information Systems · GPA 3.84/4.00
                  <br />
                  Gunadarma University · 2022 — 2026
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="info-card">
              <span className="info-number">02</span>

              <div>
                <h3>Focus</h3>
                <p>
                  Front-End & Back-End Development
                  <br />
                  Data Analytics & Machine Learning
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="info-card">
              <span className="info-number">03</span>

              <div>
                <h3>Approach</h3>
                <p>
                  Learn
                  <br />
                  Build
                  <br />
                  Improve
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="info-card">
              <span className="info-number">04</span>

              <div>
                <h3>Languages</h3>
                <p>
                  Indonesian (Native)
                  <br />
                  English (Intermediate)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
