export const person = {
  name: "Mohammed Nasib K N",
  short: "Mohammed Nasib",
  role: "Software Developer",
  employer: "Blaze Technology Solutions",
  location: "Doha, Qatar",
  email: "mohammednasib124@gmail.com",
  phone: "+974 5092 8929",
  phoneHref: "tel:+97450928929",
  github: "https://github.com/mohammednasib",
  linkedin: "https://www.linkedin.com/in/mohammed-nasib-k-n",
};

export const pageDescriptions = {
  home: "Software developer at Blaze Technology Solutions in Doha, Qatar. Explore Mohammed Nasib K N’s experience, technical skills, insurance work, and ERPNext learning direction.",
  experience: "Professional experience at Blaze Technology Solutions and previous insurance-domain work at DCF.",
  skills: "Mohammed Nasib K N’s software development skills across .NET, React, APIs, data, identity, integrations, and delivery tools.",
  insurance: "Insurance management workflows, portals, CMS, identity, and integrations from Mohammed Nasib K N’s previous DCF work.",
  erpnext: "Mohammed Nasib K N’s emerging Frappe and ERPNext career direction, including familiarity with DocTypes and workflows.",
  resume: "Resume for Mohammed Nasib K N, Software Developer at Blaze Technology Solutions in Doha, Qatar, with previous insurance systems experience at DCF.",
  contact: "Contact Mohammed Nasib K N in Doha, Qatar about software development and Frappe or ERPNext opportunities.",
  notFound: "The requested page could not be found. Browse Mohammed Nasib K N’s portfolio.",
};

export const skillGroups = [
  {
    title: "Backend & application architecture",
    short: "Backend",
    mark: ".NET",
    technologies: [".NET", "ASP.NET APIs", "C#", "REST", "SOLID", "Dependency injection", "DTOs", "Validation", "Mappers", "Controllers", "Services", "EF Core", "Migrations", "Repository", "Unit of Work"],
    detail: ".NET, ASP.NET APIs, C#, REST APIs, dependency injection, SOLID principles, DTOs, models, validation, mappers, controllers, services and interfaces, EF Core DbContext and migrations, generic Repository and Unit of Work.",
  },
  {
    title: "Frontend & application experiences",
    short: "Frontend",
    mark: "UI",
    technologies: ["React", "Redux", "PWA", "Reusable components", "Selects", "Accordions", "Steppers", "Modals", "Toasts"],
    detail: "React, Redux state and cache integration, Progressive Web Applications (PWAs), and reusable components including select dropdowns, accordions, steppers, modals, and toast notifications.",
  },
  {
    title: "Data & databases",
    short: "Data",
    mark: "DB",
    technologies: ["PostgreSQL", "MySQL", "SQL", "DDL"],
    detail: "PostgreSQL, MySQL, SQL querying, and DDL scripts for creating, updating, and modifying tables.",
  },
  {
    title: "Authentication & authorization",
    short: "Identity",
    mark: "ID",
    technologies: ["JWT", "Authentication", "Authorization", "Users", "Tenants", "Applications", "Menus", "Profiles", "Roles", "Google sign-in", "Microsoft sign-in"],
    detail: "JWT authentication and authorization; user-management interfaces for users, tenants, applications, menus, profiles, and roles; Google and Microsoft sign-in integrations.",
  },
  {
    title: "Integrations & storage",
    short: "Integrations",
    mark: "API",
    technologies: ["Zoho REST API", "OAuth", "MinIO"],
    detail: "Zoho REST API integration using OAuth, and MinIO object and file storage.",
  },
  {
    title: "Tools & collaboration",
    short: "Tools",
    mark: "DEV",
    technologies: ["Git", "Insomnia", "PuTTY", "UAT"],
    detail: "Git, Insomnia for API testing, PuTTY for UAT deployment, communication, and willingness to learn.",
  },
];

export const totalTechnologies = skillGroups.reduce((sum, group) => sum + group.technologies.length, 0);

export const insuranceCases = [
  {
    number: "01",
    kind: "dashboards",
    title: "Management dashboards",
    focus: "Insurance operations",
    contribution: "Worked across dashboards and management workflows for policies, plans, agreements, providers, schemes, and members.",
    capabilities: ["Policies", "Plans", "Agreements", "Providers", "Schemes", "Members"],
    tech: [],
    href: "/insurance",
    link: "Explore insurance work",
  },
  {
    number: "02",
    kind: "portals",
    title: "Portals & customer portal backend",
    focus: "Portal experiences",
    contribution: "Worked on provider, member, and broker portal management, plus backend work for a customer portal.",
    capabilities: ["Provider portal management", "Member portal management", "Broker portal management", "Customer portal backend"],
    tech: [],
    href: "/insurance",
    link: "See the DCF experience",
  },
  {
    number: "03",
    kind: "cms",
    title: "Configurable customer pages",
    focus: "Content management",
    contribution: "Worked on an admin CMS where users could create, customize, and review customer-portal pages.",
    capabilities: ["Create pages", "Customize pages", "Review pages", "Admin CMS"],
    tech: [],
    href: "/insurance",
    link: "Explore insurance work",
  },
  {
    number: "04",
    kind: "access",
    title: "User administration & access",
    focus: "Identity & integrations",
    contribution: "Worked on user-management interfaces for users, tenants, applications, menus, profiles, and roles. Related identity and integration work included JWT authentication and authorization, Google and Microsoft sign-in, Zoho REST API integration using OAuth, and MinIO object and file storage.",
    capabilities: ["Users", "Tenants", "Applications", "Menus", "Profiles", "Roles"],
    tech: ["JWT", "Google sign-in", "Microsoft sign-in", "Zoho REST API + OAuth", "MinIO"],
    href: "/skills",
    link: "Browse the technical stack",
  },
];

export const aggregateTech = [".NET", "REST APIs", "React", "Redux", "PostgreSQL", "MySQL", "JWT", "Zoho OAuth / REST API", "MinIO", "Google / Microsoft sign-in"];

export const marqueeTech = ["C#", ".NET", "ASP.NET", "React", "Redux", "PWA", "PostgreSQL", "MySQL", "EF Core", "REST", "JWT", "OAuth", "Zoho REST API", "MinIO", "Git", "Insomnia"];

export const services = [
  { index: "01 / SERVER", title: "Backend & APIs", text: ".NET, ASP.NET REST APIs, application architecture, EF Core, migrations, validation, and structured service layers.", tags: [".NET", "ASP.NET", "EF Core", "REST"] },
  { index: "02 / INTERFACE", title: "Frontend applications", text: "React, reusable components, Redux state and cache integration, PWAs, and portal experiences.", tags: ["React", "Redux", "PWA", "Components"] },
  { index: "03 / DATA", title: "Identity & integrations", text: "PostgreSQL and MySQL, JWT identity, Google and Microsoft sign-in, OAuth APIs, and MinIO storage.", tags: ["PostgreSQL", "MySQL", "JWT", "OAuth", "MinIO"] },
  { index: "04 / DOMAIN", title: "Operational systems", text: "Insurance workflows, management dashboards, portals, CMS experiences, and administrative features.", tags: ["Dashboards", "Portals", "CMS", "Admin"] },
];

export const principles = [
  { label: "01 / CONTEXT", title: "Start with the workflow.", text: "Understand the people, steps, and information behind the feature." },
  { label: "02 / CRAFT", title: "Make the structure useful.", text: "Keep application layers, components, and data responsibilities clear." },
  { label: "03 / LEARNING", title: "Stay curious, stay precise.", text: "Build from what I know while being clear about what I’m still learning." },
];

export const interests = ["Application layers", "Insurance workflows", "Portals", "Identity", "Integrations", "ERP direction"];

export const stackLayers = [
  { id: "ui", n: "01", name: "UI", tech: "React · Redux" },
  { id: "api", n: "02", name: "API", tech: "ASP.NET · REST" },
  { id: "data", n: "03", name: "Data", tech: "PostgreSQL · MySQL" },
  { id: "identity", n: "04", name: "Identity", tech: "JWT · OAuth" },
  { id: "storage", n: "05", name: "Storage", tech: "MinIO" },
];

export const workspacePhotos = [
  {
    src: "/assets/portfolio/workspace-monitor.jpg",
    alt: "Monitor and desk lamp in a generic office workspace",
    title: "Workspace setup with a computer monitor and desk lamp in an office environment",
    creator: "Shixart1985",
    source: "https://commons.wikimedia.org/wiki/File:Workspace_setup_with_a_computer_monitor_and_desk_lamp_in_an_office_environment.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    dimensions: "1920 2876",
  },
  {
    src: "/assets/portfolio/keyboard-workspace.jpg",
    alt: "Keyboard on a dark desk in a generic modern workspace",
    title: "Computer keyboard placed on a black desk in a modern workspace",
    creator: "Shixart1985",
    source: "https://commons.wikimedia.org/wiki/File:Computer_keyboard_placed_on_a_black_desk_in_a_modern_workspace.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    dimensions: "1920 1282",
  },
  {
    src: "/assets/portfolio/desk-laptop-notes.jpg",
    alt: "Laptop, notebook, and pen on a desk",
    title: "Desk-laptop-notebook-pen",
    creator: "www.Pixel.la Free Stock Photos",
    source: "https://commons.wikimedia.org/wiki/File:Desk-laptop-notebook-pen_(23958719819).jpg",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    dimensions: "1920 1280",
  },
  {
    src: "/assets/portfolio/devices-on-desk.jpg",
    alt: "Computer mouse, laptop, and phone arranged on a desk",
    title: "Computer mouse laptop and phone on a desk",
    creator: "Enoch Leung",
    source: "https://commons.wikimedia.org/wiki/File:Computer_mouse_laptop_and_phone_on_a_desk.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    dimensions: "1920 1080",
  },
];

export const navigation = [
  ["Home", "/"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Insurance", "/insurance"],
  ["ERPNext", "/erpnext"],
  ["Resume", "/resume"],
  ["Contact", "/contact"],
];

export const dcfResponsibilities = [
  "Worked across insurance management workflows for policies, plans, agreements, providers, schemes, and members.",
  "Covered provider, member, and broker portal management, and backend work for a customer portal.",
  "Worked on an admin CMS for creating, customizing, and reviewing pages.",
  "Experience included JWT-based authentication and authorization, Google and Microsoft sign-in, Zoho REST API OAuth integration, and MinIO storage.",
  "Worked with user, tenant, application, menu, profile, and role administration features.",
];
