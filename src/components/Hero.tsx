"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : -35]);
  const contentOpacity = useTransform(
    scrollY,
    [0, 600],
    [1, reduceMotion ? 1 : 0.45],
  );

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        style={{ opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Faris Maulana
          <span>Saputra.</span>
        </motion.h1>

        <motion.p className="hero-role" variants={itemVariants}>
          Front-End <span>•</span> Back-End <span>•</span> Data Analytics
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Information Systems Graduate building practical, data-driven digital
          solutions.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#projects" className="button-primary">
            View My Work
          </a>

          <a
            href="/CV_Faris Maulana Saputra.pdf"
            download="CV_Faris Maulana Saputra.pdf"
            className="button-secondary"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        style={{ y: visualY }}
        initial={{
          opacity: 0,
          x: 60,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="visual-card">
          <div className="profile-image-wrapper">
            <Image
              src="/images/profil.jpg"
              alt="Faris Maulana Saputra"
              fill
              priority
              className="profile-image"
              sizes="(max-width: 900px) 80vw, 360px"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.6,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}
