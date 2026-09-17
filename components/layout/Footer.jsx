import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";
import Reveal from "@/components/animations/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container py-14">
        <Reveal className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background text-xs font-bold">
                A
              </span>
              {site.name}
              <span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.role}. Building web applications and AI-powered products.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-ring"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-ring"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              {/* <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-ring"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-muted-foreground">{site.location}</li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-brand transition-opacity hover:opacity-80"
                >
                  Start a Project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
