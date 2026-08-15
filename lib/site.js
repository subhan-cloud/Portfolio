export const site = {
  name: "Subhan",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, working web products — not just designs.",
  avatar: "/subhan-profile.jpg",
  herocutout: "/subhan-cutout.png",
  heroOneLiner:
    "Full-stack developer who ships real, working products — from database schema to pixel-perfect UI.",
  bioShort:
    "I'm Subhan, a full-stack web developer focused on building fast, functional products with Next.js and modern JavaScript. I care less about how a portfolio looks in a screenshot and more about whether the thing actually works — real auth, real databases, real deploys. I work with freelance clients end-to-end: from a rough idea to a live, tested product on the web.",
  bioLong:
    "I'm Subhan, a full-stack web developer who builds complete, working products rather than isolated UI pieces. My stack centers on Next.js, React, TypeScript/JavaScript, Tailwind CSS, and MongoDB, with authentication handled through providers like Clerk and hosting on Vercel. I've built full e-commerce flows, SaaS dashboards, and content-driven frontend sites — each one deployed, live, and tested, not left as a local demo. I'm comfortable owning a project from database schema and API design through to the final animated, responsive interface. I take on freelance work through direct outreach and platforms like Upwork and Fiverr, and I'm most interested in projects where I can own the full build, not just a slice of it.",
  email: "muhammad.subhan.freelance@gmail.com",
  location: "Faisalabad, Pakistan",
  social: {
    github: "https://github.com/subhan-cloud",
    linkedin: "",
    upwork: "",
    fiverr: "",
  },
  skills: {
    Frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Framer Motion", "React Three Fiber"],
    Backend: ["Node.js", "REST APIs", "Server Actions", "Auth (Clerk)"],
    Database: ["MongoDB", "Mongoose"],
    Tools: ["Git & GitHub", "Vercel", "Figma", "VS Code"],
  },
};

// NOTE: placeholder testimonials — swap these out for real client quotes
// (Upwork/Fiverr reviews, client emails, etc.) as you collect them.
export const testimonials = [
  {
    quote:
      "Delivered exactly what we asked for, on time, and the store actually works end to end — filtering, cart, checkout flow, all of it.",
    name: "E-commerce Client",
    role: "MobileHub project",
  },
  {
    quote:
      "Clear communication throughout the build and the final dashboard was polished, fast, and easy for our team to use from day one.",
    name: "SaaS Client",
    role: "AI SaaS Dashboard project",
  },
  {
    quote:
      "Took a rough brand brief and turned it into a site that actually matched our identity, not a generic template with our logo slapped on.",
    name: "Education Brand Client",
    role: "Hackingloops project",
  },
];

export const highlights = [
  { label: "Projects shipped & live", value: "4+" },
  { label: "Core stack", value: "Next.js" },
  { label: "Based in", value: "Faisalabad, PK" },
];

// Fill this in with your real education — degree, institution, years.
// Leave the array empty to hide the section entirely.
export const education = [
  {
    degree: "BS Artificial Intelligence",
    institution: "The University of Faisalabad, Pakistan ", // <-- replace with your actual university
    years: "2025 — Present",
  },
  {
    degree: "O Levels & A Levels",
    institution: "Divisional Premier School, Faisalabad, Pakistan",
    years: "2020 — 2025",
  },
];

export const projects = [
  {
    slug: "mobilehub",
    title: "MobileHub",
    oneLiner:
      "MobileHub — a full-stack e-commerce store for mobile accessories with real product filtering, categories, and a working storefront flow.",
    tag: "Full-Stack",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Clerk"],
    problem:
      "A mobile accessories seller needed a real online store — not a static catalog — where customers could browse by category and brand, filter down to what they want, and shop across a full product range.",
    built: [
      "Shop page with live category and brand filters (phone cases, chargers, earbuds, smartwatches, and more) across 30+ products",
      "Grid/list view toggle and sort control, backed by MongoDB/Mongoose product schemas",
      "Category landing grid (15 categories) for browsing by accessory type",
      "Wishlist, account, and cart icons wired into a persistent header for a real shopping flow",
      "Authentication and account management handled via Clerk",
      "Email capture footer for a 10%-off first-order signup flow",
    ],
    result:
      "A fully responsive store with a real filtering/browsing flow across 30+ products — deployed live on Vercel.",
    repo: "https://github.com/subhan-cloud/Modern-Accessories",
    demo: "https://modern-accessories-git-main-subhans-projects-2bb600f7.vercel.app/",
    images: [
      "/projects/mobilehub-1.png",
      "/projects/mobilehub-2.png",
      "/projects/mobilehub-3.png",
      "/projects/mobilehub-4.png",
    ],
  },
  {
    slug: "ai-saas-dashboard",
    title: "AI SaaS Dashboard",
    oneLiner:
      "AIFlow — a multi-tool AI SaaS platform that puts eight separate AI tools behind one login and one shared credit balance.",
    tag: "Full-Stack",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    problem:
      "Most AI tool products make users juggle separate logins, plans, and credit pools per feature. The goal was one product — one subscription, one credit balance — where chat, image generation, code generation, and more all draw from the same account.",
    built: [
      "Marketing landing page with a clear value proposition and tool-by-tool feature breakdown for all 8 AI tools",
      "Dashboard shell with a persistent sidebar, live/soon tool states, and a personalized greeting",
      "Usage overview panel — requests today, credits used this cycle, active tools, and a 7-day credit-usage chart",
      "Credits and subscription widgets showing remaining balance, renewal date, and an upgrade path",
      "Three-tier credit-based pricing page (Free / Pro / Business) with a monthly/annual toggle",
    ],
    result:
      "A working AI SaaS shell — landing page, dashboard, and pricing — deployed live on Vercel and ready to wire up to real AI tool backends.",
    repo: "https://github.com/subhan-cloud/SAAS-Dashboard",
    demo: "https://saas-dashboard-32b9-git-master-subhans-projects-2bb600f7.vercel.app/",
    images: [
      "/projects/saas-dashboard-1.png",
      "/projects/saas-dashboard-2.png",
      "/projects/saas-dashboard-3.png",
      "/projects/saas-dashboard-4.png",
    ],
  },
  {
    slug: "hackingloops",
    title: "Hackingloops",
    oneLiner:
      "Hackingloops — a marketing and membership site for a cybersecurity education brand teaching ethical hacking.",
    tag: "Frontend",
    year: "2024",
    stack: ["React", "CSS"],
    problem:
      "A cybersecurity education brand needed a conversion-focused site: a clear hero pitch, course/membership breakdown, social proof, and a path to join — built entirely as a frontend project.",
    built: [
      "Hero section with a direct value proposition and dual call-to-action buttons",
      "Feature grid breaking down what members get (pen-testing, foundations, real-world labs, portfolio building)",
      "Testimonial carousel for student reviews",
      "Consistent footer with quick links and contact details, matching the brand's blue/yellow palette",
    ],
    result:
      "A fully responsive marketing site, live and deployed, styled to a distinct brand identity rather than a generic template.",
    repo: "https://github.com/subhan-cloud/frontend",
    demo: "https://subhancloud-hackingsloops.vercel.app/",
    images: [
      "/projects/hackingloops-1.png",
      "/projects/hackingloops-2.png",
      "/projects/hackingloops-3.png",
      "/projects/hackingloops-4.png",
    ],
  },
  {
    slug: "sample-portfolio",
    title: "Sample Portfolio Website",
    oneLiner:
      "Sample Portfolio Website — a clean, Bootstrap-based personal portfolio template with a blog and work grid.",
    tag: "Frontend",
    year: "2024",
    stack: ["React", "Bootstrap"],
    problem:
      "A quick-turnaround personal portfolio template: hero introduction, blog preview, and a scannable work list — the kind of structure a freelancer or designer could drop their own content into.",
    built: [
      "Hero section with intro, headshot, and resume download CTA",
      "Recent posts / blog preview grid pulling from static content",
      "Work list page with thumbnail, title, year, tag, and description per entry",
      "Fully responsive layout built on Bootstrap's grid system",
    ],
    result:
      "A reusable, responsive portfolio template — live and deployed — that's easy to restyle and re-populate for different clients.",
    repo: "https://github.com/subhan-cloud/newproject",
    demo: "https://newproject-git-master-subhans-projects-2bb600f7.vercel.app/",
    images: [
      "/projects/sample-portfolio-1.png",
      "/projects/sample-portfolio-2.png",
      "/projects/sample-portfolio-3.png",
    ],
  },
];
