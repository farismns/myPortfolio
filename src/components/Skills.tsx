import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="skills-header">
        <Reveal>
          <p className="section-label">SKILLS</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading">
            What I can <span>do.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="section-intro">
            A collection of technical skills and tools I&apos;ve developed
            through academic projects, programs, and hands-on experience.
          </p>
        </Reveal>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <Reveal key={category.number} delay={0.1 + index * 0.1} y={30}>
            <article className="skill-card">
              <div className="skill-card-header">
                <span className="skill-number">{category.number}</span>

                <span className="skill-count">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
