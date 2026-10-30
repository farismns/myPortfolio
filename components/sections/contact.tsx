"use client";

import { ArrowUpRight, Mail, Circle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/animations/reveal";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/farismns",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farisms/",
    icon: FaLinkedin,
  },
];

const email = "faris.m.saputra@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-2 px-5 pt-24 pb-8 sm:px-8 sm:pt-24 sm:pb-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          {/* Subtle background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl"
          />

          <div className="relative max-w-2xl">
            {/* Availability Status */}
            <Reveal y={16}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-2">
                <Circle
                  size={8}
                  className="fill-accent text-accent"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-accent">
                  Open to Web Developer Opportunities
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal y={20} delay={0.05}>
              <p className="text-sm font-medium text-accent">Get in Touch</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s Build Something Meaningful
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal y={20} delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
                I&apos;m open to Web Developer opportunities, professional
                collaborations, and exciting projects. Feel free to get in
                touch.
              </p>
            </Reveal>

            {/* Contact Actions */}
            <Reveal y={20} delay={0.15}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Mail size={17} aria-hidden="true" />
                  Send Me an Email
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile (opens in a new tab)`}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Icon size={17} aria-hidden="true" />
                    {label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Email Address */}
            <Reveal y={20} delay={0.2}>
              <p className="mt-6 break-words text-sm text-muted">
                Gmail:{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                >
                  {email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Footer */}
        <Reveal y={16}>
          <footer className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© Faris Maulana Saputra - 2026.</p>

            <p>Designed and built with Next.js and Tailwind CSS.</p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
