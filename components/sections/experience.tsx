"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "@/components/animations/reveal";

const experiencePhotos = [
  {
    src: "/images/experience/labsi-01.jpg",
    alt: "Laboratory Instructor experience, photo 1",
  },
  {
    src: "/images/experience/labsi-02.jpg",
    alt: "Laboratory Instructor experience, photo 2",
  },
  {
    src: "/images/experience/labsi-03.jpg",
    alt: "Laboratory Instructor experience, photo 3",
  },
  {
    src: "/images/experience/labsi-04.jpg",
    alt: "Laboratory Instructor experience, photo 4",
  },
];

const responsibilities = [
  "Conducted approximately 20 laboratory sessions per month for classes of 30–40 students.",
  "Prepared programming exercises, practicum materials, and evaluation activities while ensuring laboratory sessions ran effectively.",
  "Guided students through debugging, troubleshooting, and problem-solving, helping identify programming errors and develop appropriate solutions.",
];

export default function Experience() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const totalPhotos = experiencePhotos.length;

  function showNextPhoto() {
    setActivePhoto((current) => (current + 1) % totalPhotos);
  }

  function showPreviousPhoto() {
    setActivePhoto((current) => (current - 1 + totalPhotos) % totalPhotos);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modalTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 0.25,
        ease: "easeOut" as const,
      };

  return (
    <section id="experience" className="scroll-mt-2 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">Experience</p>

            <p className="mt-4 leading-7 text-muted">
              My experience supporting programming education, practical
              learning, and student problem-solving.
            </p>
          </div>
        </Reveal>

        {/* Experience card */}
        <Reveal delay={0.15}>
          <article className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-surface md:grid-cols-[1fr_1fr]">
            {/* Photo gallery */}
            <div className="relative min-w-0">
              <div
                className="relative aspect-[4/3] overflow-hidden bg-[#0e121b] md:aspect-auto md:min-h-[420px]"
                aria-label="Laboratory experience photo gallery"
              >
                {/* Horizontal slider */}
                <div
                  className="flex h-full w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none md:absolute md:inset-0"
                  style={{
                    transform: `translateX(-${activePhoto * (100 / totalPhotos)}%)`,
                    width: `${totalPhotos * 100}%`,
                  }}
                >
                  {experiencePhotos.map((photo, index) => (
                    <div
                      key={photo.src}
                      className="relative h-full shrink-0"
                      style={{ width: `${100 / totalPhotos}%` }}
                      aria-hidden={activePhoto !== index}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03] motion-reduce:transition-none"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  Laboratory Experience
                </span>

                {/* Previous photo */}
                <button
                  type="button"
                  onClick={showPreviousPhoto}
                  aria-label="Show previous photo"
                  className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>

                {/* Next photo */}
                <button
                  type="button"
                  onClick={showNextPhoto}
                  aria-label="Show next photo"
                  className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </button>

                {/* Photo counter and indicators */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <div
                    className="flex items-center gap-2"
                    aria-label={`Photo ${activePhoto + 1} of ${totalPhotos}`}
                    aria-live="polite"
                  >
                    <span className="font-mono text-sm font-medium text-white">
                      {String(activePhoto + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-white/60">/</span>

                    <span className="font-mono text-sm text-white/70">
                      {String(totalPhotos).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {experiencePhotos.map((photo, index) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setActivePhoto(index)}
                        aria-label={`Show photo ${index + 1}`}
                        aria-current={
                          activePhoto === index ? "true" : undefined
                        }
                        className={`h-2 rounded-full transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                          activePhoto === index
                            ? "w-7 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="sr-only" aria-live="polite">
                Showing photo {activePhoto + 1} of {totalPhotos}.
              </p>
            </div>

            {/* Experience summary */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-medium text-accent">
                Information Systems Laboratory
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Laboratory Instructor
              </h3>

              <p className="mt-3 text-sm text-muted">Universitas Gunadarma</p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" />
                  Depok, Indonesia
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} aria-hidden="true" />
                  Sep 2024 – Aug 2025
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">
                Conducted programming laboratory sessions, prepared practicum
                materials, and guided students through debugging and
                problem-solving.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View Details
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>

                <span className="text-xs text-muted">
                  {totalPhotos} photos · 1 experience
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      {/* Experience details modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={modalTransition}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-dialog-title"
              className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
                y: shouldReduceMotion ? 0 : 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
                y: shouldReduceMotion ? 0 : 12,
              }}
              transition={modalTransition}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close experience details"
                className="absolute right-4 top-4 rounded-lg border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <p className="pr-12 text-sm font-medium text-accent">
                Professional Experience
              </p>

              <h3
                id="experience-dialog-title"
                className="mt-3 pr-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Laboratory Instructor
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Information Systems Laboratory, Universitas Gunadarma
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-5">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" />
                  Depok, Indonesia
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} aria-hidden="true" />
                  Sep 2024 – Aug 2025
                </span>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-semibold text-foreground">
                  Responsibilities & Contributions
                </h4>

                <ul className="mt-4 space-y-4">
                  {responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-7 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-8 w-full rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
