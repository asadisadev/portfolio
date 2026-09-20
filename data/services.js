export const services = [
  {
    title: "Website Development",
    slug: "website-development",
    description:
      "Modern, fast marketing websites, landing pages, portfolios and personal sites.",
    startingPrice: "$249",
    icon: "Globe",
    features: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Marketing websites",
      "Responsive design",
      "SEO foundations",
    ],
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Full-Stack Web Applications",
    slug: "full-stack-development",
    description:
      "Custom applications, dashboards, booking systems and SaaS products built end to end.",
    startingPrice: "$699",
    icon: "LayoutDashboard",
    features: [
      "Authentication",
      "APIs",
      "Database design",
      "Dashboards",
      "User management",
      "Admin panels",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI-Powered Applications",
    slug: "ai-applications",
    description:
      "LLM integrations, AI assistants, document processing and AI features inside existing apps.",
    startingPrice: "$899",
    icon: "Sparkles",
    features: [
      "AI integrations",
      "LLM applications",
      "AI assistants",
      "Document processing",
      "AI-powered workflows",
    ],
    technologies: ["Python", "Node.js", "LLM APIs", "Vector stores"],
  },
  {
    title: "Backend & API Development",
    slug: "backend-api-development",
    description:
      "Robust REST APIs, authentication, database integration and third-party services.",
    startingPrice: "$499",
    icon: "Server",
    features: [
      "REST APIs",
      "Authentication",
      "Database integration",
      "Third-party APIs",
      "Background jobs",
    ],
    technologies: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Existing Web Improvements",
    slug: "app-improvements",
    description:
      "Bug fixes, new features, performance work, UI polish and deployment for live applications.",
    startingPrice: "$199",
    icon: "Wrench",
    features: [
      "Bug fixing",
      "Feature development",
      "API integration",
      "UI improvements",
      "Performance improvements",
      "Deployment",
    ],
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
