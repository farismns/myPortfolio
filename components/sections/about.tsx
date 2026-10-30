import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/reveal";

const coursework = ["Fundamental Web", "Fundamental DBMS", "Golang"];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-2 px-5 pt-6 pb-16 sm:px-12 sm:pt-18 sm:pb-20 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 xl:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0">
            <Reveal y={20}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-strong/10 blur-2xl"
              />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src="/images/Graduate.png"
                  alt="Portrait of Faris Maulana Saputra"
                  fill
                  priority={false}
                  sizes="(max-width: 1023px) 85vw, 35vw"
                  className="object-contain object-center"
                />
              </div>
            </Reveal>
          </div>

          {/* Right content */}
          <div className="min-w-0">
            <Reveal>
              {/* Section heading */}
              <div className="mb-6 sm:mb-8 lg:pt-0">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                  About Me
                </p>
              </div>
            </Reveal>

            {/* Introduction */}
            <Reveal delay={0.1}>
              <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                <p>
                  Information Systems graduate with hands-on experience in
                  backend development using JavaScript, Node.js, Express.js, and
                  relational databases. Experienced in developing RESTful APIs,
                  implementing CRUD operations, request validation, middleware,
                  and error handling, as well as testing APIs using Postman.
                  Familiar with frontend development using React and integrating
                  frontend applications with backend services.
                </p>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.15}>
              <div className="mt-9 border-t border-border pt-7">
                <div className="mb-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Education
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                      aria-hidden="true"
                    >
                      <path d="m22 10-10-5L2 10l10 5 10-5Z" />
                      <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
                      <path d="M22 10v6" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-6 text-foreground sm:text-lg">
                      Universitas Gunadarma
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      Bachelor of Information Systems
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span>2022 – 2026</span>
                      <span aria-hidden="true" className="text-border">
                        |
                      </span>
                      <span>
                        GPA:{" "}
                        <strong className="font-semibold text-foreground">
                          3.84 / 4.00
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div className="mt-7 border-t border-border/70 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Relevant Coursework
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs leading-5 text-muted transition-colors hover:border-accent/50 hover:text-foreground sm:text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic projects */}
                <div className="mt-7 border-t border-border/70 pt-6">
                  <h4 className="mb-5 text-sm font-semibold text-foreground">
                    Academic Projects
                  </h4>

                  <div className="space-y-6">
                    <article className="relative border-l-2 border-accent/50 pl-4">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
                        Research Project
                      </p>

                      <a
                        href="https://github.com/farismns/prediksi-harga-laptop.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-foreground transition-colors hover:text-accent sm:text-base"
                      >
                        <span>
                          Implementation of Multiple Linear Regression in a
                          Web-Based Laptop Price Prediction Application
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </a>
                    </article>

                    <article className="relative border-l-2 border-accent/50 pl-4">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
                        Undergraduate Thesis
                      </p>

                      <a
                        href="https://github.com/farismns/Forecasting-Kunjungan-Rawat-Jalan.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-foreground transition-colors hover:text-accent sm:text-base"
                      >
                        <span>
                          Forecasting Outpatient Visits at Aulia General
                          Hospital Using the Prophet Algorithm
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
