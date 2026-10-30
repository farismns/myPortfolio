"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const pendingSection = useRef<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let animationFrame = 0;

    function updateActiveSection() {
      const pending = pendingSection.current;

      // Keep the clicked section active until smooth scrolling finishes.
      if (pending) {
        setActiveSection(pending);
        return;
      }

      // Make Contact active when the user reaches the bottom.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the last section that has reached the navbar offset.
      let current = "home";

      for (const link of navLinks) {
        const sectionId = link.href.slice(1);
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= 120) {
          current = sectionId;
        }
      }

      setActiveSection(current);
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    }

    function handleScrollEnd() {
      if (pendingSection.current) {
        pendingSection.current = null;
      }

      updateActiveSection();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    document.addEventListener("scrollend", handleScrollEnd);

    updateActiveSection();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      document.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  function handleNavigation(sectionId: string) {
    pendingSection.current = sectionId;
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  const navLinkClass = (sectionId: string, mobile = false) => {
    const isActive = activeSection === sectionId;

    return [
      "relative text-sm font-medium transition-colors duration-200",
      mobile ? "rounded-lg px-3 py-3" : "px-3 py-2",
      "after:absolute after:bottom-0 after:left-3 after:h-0.5",
      "after:bg-accent after:transition-all after:duration-200",
      !isActive
        ? "text-muted after:right-full hover:text-accent hover:after:right-3"
        : "text-accent",
    ].join(" ");
  };

  const indicatorTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 350,
        damping: 30,
      };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <Link
          href="#home"
          onClick={() => handleNavigation("home")}
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          aria-label="FM, go to Home"
        >
          Faris Maulana
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.div
                key={link.href}
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  onClick={() => handleNavigation(sectionId)}
                  aria-current={isActive ? "location" : undefined}
                  className={navLinkClass(sectionId)}
                >
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
                      transition={indicatorTransition}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          onClick={() => handleNavigation("contact")}
          className="hidden rounded-full border border-accent/50 px-5 py-2.5 text-sm font-medium text-accent transition-colors duration-200 hover:border-accent hover:bg-accent/10 md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-surface hover:text-accent md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, rotate: -45, scale: 0.8 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, rotate: 45, scale: 0.8 }
                }
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex"
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, rotate: 45, scale: 0.8 }
                }
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, rotate: -45, scale: 0.8 }
                }
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="flex"
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={
              shouldReduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0, y: -8 }
            }
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 1, height: 0 }
                : { opacity: 0, height: 0, y: -8 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-5 pb-6 pt-3">
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {navLinks.map((link) => {
                  const sectionId = link.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.div
                      key={link.href}
                      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleNavigation(sectionId)}
                        aria-current={isActive ? "location" : undefined}
                        className={navLinkClass(sectionId, true)}
                      >
                        {link.label}

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-indicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
                            transition={indicatorTransition}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <Link
                  href="#contact"
                  onClick={() => handleNavigation("contact")}
                  className="mt-3 inline-flex items-center justify-center rounded-full border border-accent/50 px-5 py-3 text-sm font-medium text-accent transition-colors duration-200 hover:border-accent hover:bg-accent/10"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
