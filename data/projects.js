export const projectCategories = [
  "All",
  "Web Applications",
  "AI & LLM",
  "Data & Backend",
  "Machine Learning",
];

export const projects = [
  {
    title: "CareerOS",
    slug: "careeros",
    tagline: "AI-powered career platform",
    description:
      "A platform for creating resumes and developer portfolios with AI-powered career features.",
    categories: ["Web Applications", "AI & LLM"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "LLM APIs"],
    image: "",
    accent: "from-emerald-500/20 to-teal-500/10",
    featured: true,
    features: [
      "Resume Builder",
      "Portfolio Builder",
      "ATS Analysis",
      "AI Suggestions",
      "PDF Generation",
      "Job Recommendations",
    ],
    problem:
      "Job seekers struggle to produce tailored, ATS-friendly resumes and portfolios quickly, and generic templates fail to reflect their real experience.",
    solution:
      "A unified platform that generates resumes and portfolios, scores them against ATS rules, and uses LLM-driven suggestions to improve wording, keywords and structure.",
    architecture: [
      "Next.js frontend",
      "Node.js API layer",
      "PostgreSQL database",
      "LLM provider integration",
      "PDF rendering service",
    ],
    status: "In active development",
    github: "https://github.com/",
    liveDemo: "https://career-os-omega-roan.vercel.app/",
  },
  {
    title: "Bookify",
    slug: "bookify",
    tagline: "Appointment booking platform",
    description:
      "A booking system that lets businesses publish availability and customers book appointments in real time.",
    categories: ["Web Applications"],
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    image: "",
    accent: "from-sky-500/20 to-indigo-500/10",
    featured: true,
    features: [
      "Customer Authentication",
      "Business Accounts",
      "Availability Management",
      "Appointment Booking",
      "Business Dashboard",
      "Scheduling",
    ],
    problem:
      "Small service businesses rely on phone calls and messaging to manage bookings, leading to double-bookings and lost appointments.",
    solution:
      "A shared scheduling layer where businesses define availability and customers self-serve bookings through a real-time, conflict-free calendar.",
    architecture: [
      "React frontend",
      "Node.js/Express API",
      "MongoDB with indexed bookings",
      "REST endpoints",
    ],
    status: "Completed",
    github: "https://github.com/",
    liveDemo: "https://bookify-five-theta.vercel.app/",
  },
  {
    title: "Universal Data Collector",
    slug: "universal-data-collector",
    tagline: "Data ingestion & extraction platform",
    description:
      "A pipeline that fetches, extracts, cleans and normalizes data from arbitrary web sources into a searchable store.",
    categories: ["Data & Backend", "Web Applications"],
    technologies: ["Python", "FastAPI", "PostgreSQL", "BeautifulSoup"],
    image: "",
    accent: "from-amber-500/20 to-orange-500/10",
    featured: true,
    features: [
      "URL Fetching",
      "Structured Extraction",
      "Data Cleaning",
      "Normalization",
      "Database Storage",
      "Search & Analysis",
    ],
    problem:
      "Collecting data from many different websites requires bespoke scripts, and the extracted output is rarely consistent or queryable.",
    solution:
      "A modular pipeline: fetcher → extractor → cleaner → normalizer → database, with a consistent schema so any source becomes searchable.",
    architecture: [
      "Fetcher (HTTP layer)",
      "Extractor (parser)",
      "Cleaner + Normalizer",
      "PostgreSQL store",
      "Search / Analysis layer",
    ],
    status: "Completed",
    github: "https://github.com/",
    liveDemo: "",
  },
  {
    title: "Gun Detection",
    slug: "gun-detection",
    tagline: "Computer vision detection model",
    description:
      "A real-time object detection model trained to identify firearms in video streams.",
    categories: ["Machine Learning", "AI & LLM"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
    image: "",
    accent: "from-rose-500/20 to-red-500/10",
    featured: false,
    features: ["Custom dataset", "Real-time inference", "Model evaluation"],
    problem: "Manual video monitoring does not scale and misses fast events.",
    solution:
      "A trained CNN detection model with a real-time inference pipeline and evaluation metrics for precision/recall tradeoffs.",
    architecture: ["Dataset pipeline", "CNN training", "Inference service"],
    status: "Academic project",
    github: "https://github.com/",
    liveDemo: "",
  },
  {
    title: "House Price Prediction",
    slug: "house-price-prediction",
    tagline: "Regression model",
    description:
      "A regression model predicting property prices from structured features.",
    categories: ["Machine Learning"],
    technologies: ["Python", "scikit-learn", "pandas"],
    image: "",
    accent: "from-violet-500/20 to-purple-500/10",
    featured: false,
    features: ["Feature engineering", "Model comparison", "Evaluation"],
    problem: "Property pricing is inconsistent and hard to estimate quickly.",
    solution:
      "A regression pipeline with feature engineering and cross-validated model selection.",
    architecture: ["Data cleaning", "Feature engineering", "Model training"],
    status: "Academic project",
    github: "https://github.com/",
    liveDemo: "",
  },
  {
    title: "Heart Failure Classification",
    slug: "heart-failure-classification",
    tagline: "Classification model",
    description:
      "A classification model predicting heart failure risk from clinical features.",
    categories: ["Machine Learning"],
    technologies: ["Python", "scikit-learn", "matplotlib"],
    image: "",
    accent: "from-pink-500/20 to-rose-500/10",
    featured: false,
    features: ["Data preprocessing", "Model evaluation", "Visualization"],
    problem:
      "Early risk detection benefits from consistent, data-driven scoring.",
    solution:
      "A classification pipeline with preprocessing, model comparison and clinical feature analysis.",
    architecture: ["Preprocessing", "Model training", "Evaluation"],
    status: "Academic project",
    github: "https://github.com/",
    liveDemo: "",
  },
  {
    title: "Credit Card Fraud Detection",
    slug: "credit-card-fraud-detection",
    tagline: "Imbalanced classification",
    description:
      "A fraud detection model trained on highly imbalanced transaction data.",
    categories: ["Machine Learning"],
    technologies: ["Python", "scikit-learn", "imbalanced-learn"],
    image: "",
    accent: "from-cyan-500/20 to-blue-500/10",
    featured: false,
    features: ["Imbalance handling", "Precision/recall tuning", "Evaluation"],
    problem:
      "Fraud is rare, so naive models fail to catch it without false alarms.",
    solution:
      "A pipeline using resampling and threshold tuning to balance precision and recall.",
    architecture: ["Resampling", "Model training", "Threshold tuning"],
    status: "Academic project",
    github: "https://github.com/",
    liveDemo: "",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
