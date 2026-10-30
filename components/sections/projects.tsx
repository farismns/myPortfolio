"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import type { Project, ProjectImage } from "@/data/projects";
import Reveal from "@/components/animations/reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    skills: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing server-side applications and RESTful APIs.",
    skills: ["Node.js", "Express.js", "RESTful API", "JWT"],
  },
  {
    title: "Database & Development Tools",
    description: "Managing relational databases and development workflows.",
    skills: ["PostgreSQL", "MySQL", "SQL", "Git", "GitHub", "Postman"],
  },
  {
    title: "Additional",
    description:
      "Applying programming and analytical skills to work with data.",
    skills: ["Python", "Data Analysis"],
  },
];

function ProjectGallery({
  images,
  title,
  priority = false,
}: {
  images: ProjectImage[];
  title: string;
  priority?: boolean;
}) {
  const [activePhoto, setActivePhoto] = useState(0);
  const totalPhotos = images.length;

  function showNextPhoto() {
    setActivePhoto((current) => (current + 1) % totalPhotos);
  }

  function showPreviousPhoto() {
    setActivePhoto((current) => (current - 1 + totalPhotos) % totalPhotos);
  }

  if (totalPhotos === 0) {
    return (
      <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-[#0e121b] text-muted md:min-h-[420px]">
        <span className="text-sm">Project screenshots coming soon</span>
      </div>
    );
  }

  return (
    <div className="relative min-w-0">
      {/* Photo gallery */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0e121b] md:aspect-auto md:min-h-[420px]">
        {/* Horizontal image slider */}
        <div
          className="flex h-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none md:absolute md:inset-0"
          style={{
            width: `${totalPhotos * 100}%`,
            transform: `translateX(-${activePhoto * (100 / totalPhotos)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative h-full shrink-0"
              style={{ width: `${100 / totalPhotos}%` }}
              aria-hidden={activePhoto !== index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={priority && index === 0 ? "eager" : "lazy"}
                className="object-contain p-2 sm:p-4"
              />
            </div>
          ))}
        </div>

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"
        />

        {/* Project label */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {images[activePhoto].label}
        </span>

        {/* Previous photo */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={showPreviousPhoto}
            aria-label={`Show previous ${title} photo`}
            className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
        )}

        {/* Next photo */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={showNextPhoto}
            aria-label={`Show next ${title} photo`}
            className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        )}

        {/* Counter and photo indicators */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div
            className="flex items-center gap-2"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Photo ${activePhoto + 1} of ${totalPhotos}`}
          >
            <span className="font-mono text-sm font-medium text-white">
              {String(activePhoto + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-white/60">/</span>
            <span className="font-mono text-sm text-white/70">
              {String(totalPhotos).padStart(2, "0")}
            </span>
          </div>

          {totalPhotos > 1 && (
            <div className="flex items-center gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Show photo ${index + 1} of ${title}`}
                  aria-current={activePhoto === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                    activePhoto === index
                      ? "w-7 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing photo {activePhoto + 1} of {totalPhotos}.
      </p>
    </div>
  );
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-[experience-fade-in_180ms_ease-out] motion-reduce:animate-none"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl animate-[experience-scale-in_220ms_ease-out] motion-reduce:animate-none sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 rounded-lg border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Modal heading */}
        <p className="pr-12 text-sm font-medium text-accent">
          {project.category}
        </p>

        <h3
          id="project-dialog-title"
          className="mt-3 pr-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features.length > 0 && (
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="font-semibold text-foreground">Key Features</h4>

            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-7 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* My Contributions */}
        {project.contributions.length > 0 && (
          <div className="mt-8 border-t border-border pt-6">
            <h4 className="font-semibold text-foreground">My Contributions</h4>

            <ul className="mt-4 space-y-3">
              {project.contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="flex gap-3 text-sm leading-7 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-8 border-t border-border pt-6">
          <h4 className="font-semibold text-foreground">Technologies Used</h4>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border bg-background px-3 py-2 text-xs text-muted"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Project links */}
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FaGithub size={17} aria-hidden="true" />
            Source Code
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Live Demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
        >
          Close Details
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal y={20}>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">SKILLS & PROJECTS</p>

            <p className="mt-4 leading-7 text-muted">
              Technologies and tools I have used across my academic journey,
              personal projects, and development experience.
            </p>
          </div>
        </Reveal>

        {/* Technical Skills */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} y={20} delay={index * 0.1}>
              <article className="h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-2 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mt-20">
          <Reveal y={20}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                A few of Projects
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted">
                A selection of projects showcasing how I apply my technical
                skills to build practical solutions.
              </p>
            </div>
          </Reveal>

          {/* Vertical project list */}
          <div className="flex flex-col gap-10 sm:gap-12">
            {projects.map((project, index) => (
              <Reveal key={project.title} y={24} delay={index * 0.1}>
                <article className="grid overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/40 md:grid-cols-2">
                  {/* Project gallery */}
                  <ProjectGallery
                    images={project.images}
                    title={project.title}
                    priority={index === 0}
                  />

                  {/* Project summary */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-medium text-accent">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-muted"
                        >
                          {technology}
                        </span>
                      ))}

                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1.5 text-xs text-muted">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-haspopup="dialog"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        View Details
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </button>

                      <span className="text-xs text-muted">
                        {project.images.length}{" "}
                        {project.images.length === 1 ? "photo" : "photos"}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Selected project modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
