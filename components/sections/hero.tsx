"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
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

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-accent-strong/15 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        {/* Left: Introduction */}
        <div className="order-2 lg:order-1">
          {/* Availability Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-2 text-sm text-muted"
          >
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Web Developer · Indonesia
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12 }}
            className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-6xl"
          >
            Hello, I&apos;m Faris Maulana Saputra
            <span className="mt-3 block text-accent">Web Developer</span>
          </motion.h1>

          {/* Call-to-action */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore Projects
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <a
              href="/CV_Faris%20Maulana%20Saputra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
              <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.35 }}
            className="mt-9 flex items-center gap-4"
          >
            <span className="text-sm text-muted">Find me on</span>

            <span aria-hidden="true" className="h-px w-8 bg-border" />

            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${label} profile`}
                className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.95,
            y: shouldReduceMotion ? 0 : 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md"
        >
          {/* Soft blue glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-[10%] -z-10 aspect-square rounded-full bg-accent-strong/20 blur-[80px]"
          />

          {/* Portrait */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
            <Image
              src="/images/Professional.png"
              alt="Professional portrait of Faris Maulana Saputra"
              fill
              priority
              sizes="(max-width: 1023px) 85vw, 40vw"
              className="rounded-2xl object-cover object-center"
            />
          </div>

          {/* Decorative blue accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-4 -z-10 size-28 rounded-full bg-sky-400/10 blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
