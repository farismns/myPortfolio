"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Logo */}
      <a
        href="#hero"
        className="navbar-logo"
        onClick={() => handleNavClick("hero")}
      >
        MY PORTFOLIO
      </a>

      {/* Desktop Navigation */}
      <div className="navbar-links">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(sectionId)}
              className={`nav-link ${
                activeSection === sectionId ? "active" : ""
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-links">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(sectionId)}
                className={`mobile-nav-link ${
                  activeSection === sectionId ? "active" : ""
                }`}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
