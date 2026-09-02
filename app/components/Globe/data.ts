export type GeoPoint = {
  lat: number;
  lng: number;
};

export type ConnectionMode = "onsite" | "remote";

export type CareerNode = {
  id: string;
  company: string;
  logo: string | null;
  role: string;
  period: string;
  mode: ConnectionMode;
  location: GeoPoint & { city: string; country: string; cc: string };
  home: GeoPoint & { label: string };
  proxy?: {
    name: string;
    logo: string | null;
    hq: GeoPoint;
  };
  flight?: {
    from: GeoPoint & { label: string };
    to: GeoPoint & { label: string };
    distanceKm: number;
  };
  terminal: { text: string; tone: "cmd" | "sys" | "ok" | "route" }[];
  bullets: string[];
  stack: string[];
  ping: number;
};

export const HOME_LISBON = { lat: 38.7223, lng: -9.1393, label: "Lisbon, PT" };
export const HOME_BR = { lat: -23.5505, lng: -46.6333, label: "São Paulo, BR" };

export const CAREER_NODES: CareerNode[] = [
  {
    id: "educat",
    company: "Educat",
    logo: "/logos/educat.jpg",
    role: "Software Engineer",
    period: "2019 — 2020",
    mode: "onsite",
    location: {
      lat: -23.5505,
      lng: -46.6333,
      city: "São Paulo",
      country: "Brazil",
      cc: "BR",
    },
    home: HOME_BR,
    terminal: [
      { text: "> ./boot --career --origin 'sao-paulo.br'", tone: "cmd" },
      { text: "[SYS] Physical presence required — badge detected", tone: "sys" },
      { text: "[MODE] ONSITE · São Paulo, Brazil", tone: "route" },
      { text: "[OK] Origin node initialized · 0 connections", tone: "ok" },
    ],
    bullets: [
      "Built education technology platforms serving millions of Brazilian students",
      "Contributed to infrastructure supporting Brazil's national high-school exam platform",
      "Developed services using Python/Django and .NET Core with React frontend",
    ],
    stack: ["PYTHON", "DJANGO", ".NET CORE", "REACT"],
    ping: 4,
  },
  {
    id: "gap",
    company: "Gap Inc",
    logo: null,
    role: "Software Engineer",
    period: "2021 — 2022",
    mode: "remote",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      city: "San Francisco",
      country: "United States",
      cc: "US",
    },
    home: HOME_BR,
    proxy: {
      name: "ThoughtWorks",
      logo: "/logos/thoughtworks.jpg",
      hq: { lat: 41.8781, lng: -87.6298 },
    },
    terminal: [
      { text: "> ssh jon@home.br --via thoughtworks --target gap.com", tone: "cmd" },
      { text: "[SYS] Secure tunnel: São Paulo, BR → San Francisco, US", tone: "sys" },
      { text: "[SYS] Proxy detected: thoughtworks — routing…", tone: "sys" },
      { text: "[ROUTE] HOME(BR) ⇄ PROXY(ThoughtWorks) ⇄ TARGET(Gap Inc)", tone: "route" },
      { text: "[OK] Connection established · 1 proxy hop · 96ms", tone: "ok" },
    ],
    bullets: [
      "Developed high-traffic search functionality for a major US retail e-commerce platform",
      "Worked in distributed team of 20+ engineers using XP practices and pair programming",
      "Delivered micro-frontend features using React and Node.js",
    ],
    stack: ["REACT", "NODE.JS", "MICRO-FRONTENDS", "XP"],
    ping: 96,
  },
  {
    id: "bmw",
    company: "BMW Group",
    logo: "/logos/bmw.jpg",
    role: "Software Engineer / Tech Lead",
    period: "2021 — 2023",
    mode: "onsite",
    location: {
      lat: 38.7223,
      lng: -9.1393,
      city: "Lisbon",
      country: "Portugal",
      cc: "PT",
    },
    home: HOME_LISBON,
    proxy: {
      name: "Critical Techworks",
      logo: null,
      hq: { lat: 41.1579, lng: -8.6291 },
    },
    flight: {
      from: { lat: -23.5505, lng: -46.6333, label: "GRU" },
      to: { lat: 38.7223, lng: -9.1393, label: "LIS" },
      distanceKm: 7940,
    },
    terminal: [
      { text: "> ./relocate --from 'sao-paulo.br' --to 'lisbon.pt'", tone: "cmd" },
      { text: "[SYS] Flight GRU → LIS · 7,940 km · boarding…", tone: "sys" },
      { text: "[OK] Arrived. New home base: Lisbon, PT", tone: "ok" },
      { text: "[ROUTE] PROXY(Critical Techworks) → TARGET(BMW Group)", tone: "route" },
      { text: "[MODE] ONSITE · Lisbon, Portugal", tone: "ok" },
    ],
    bullets: [
      "Developed large-scale e-commerce platform for premium automotive brand",
      "Led engineering initiatives while co-leading team of 6 developers",
      "Implemented micro-frontend architecture using React and Next.js",
      "Collaborated with cross-functional teams across Germany and Portugal",
    ],
    stack: ["REACT", "NEXT.JS", "NODE.JS", "MICRO-FRONTENDS"],
    ping: 2,
  },
  {
    id: "mckinsey",
    company: "McKinsey & Company",
    logo: "/logos/mckinsey.jpg",
    role: "Senior Software Engineer",
    period: "2023 — 2024",
    mode: "remote",
    location: {
      lat: 51.5074,
      lng: -0.1278,
      city: "London",
      country: "United Kingdom",
      cc: "UK",
    },
    home: HOME_LISBON,
    proxy: {
      name: "Infonet",
      logo: null,
      hq: { lat: 38.7223, lng: -9.1393 },
    },
    terminal: [
      { text: "> ssh jon@home.lisbon --via infonet --target mckinsey.com", tone: "cmd" },
      { text: "[SYS] Secure tunnel: Lisbon, PT → London, UK", tone: "sys" },
      { text: "[SYS] Proxy detected: infonet — routing…", tone: "sys" },
      { text: "[ROUTE] HOME(PT) ⇄ PROXY(Infonet) ⇄ TARGET(McKinsey)", tone: "route" },
      { text: "[OK] Connection established · 1 proxy hop · 38ms", tone: "ok" },
    ],
    bullets: [
      "Built internal platforms used by consultants globally using React, Node.js, and TypeScript",
      "Designed scalable microservice architecture and integrated AI-powered features",
      "Owned systems end-to-end from architecture and implementation to production deployment",
      "Implemented automated testing strategy using Jest and React Testing Library",
    ],
    stack: ["REACT", "NODE.JS", "TYPESCRIPT", "JEST", "AI"],
    ping: 38,
  },
  {
    id: "tryhackme",
    company: "TryHackMe",
    logo: "/logos/tryhackme.jpg",
    role: "Senior Software Engineer",
    period: "2025 — Present",
    mode: "remote",
    location: {
      lat: 52.2,
      lng: -1.5,
      city: "London",
      country: "United Kingdom",
      cc: "UK",
    },
    home: HOME_LISBON,
    terminal: [
      { text: "> ssh jon@home.lisbon --target tryhackme.com --port 443", tone: "cmd" },
      { text: "[SYS] Secure tunnel: Lisbon, PT → London, UK", tone: "sys" },
      { text: "[ROUTE] HOME(PT) ⇄ TARGET(TryHackMe) · direct", tone: "route" },
      { text: "[OK] Connection established · 0 proxy hops · 31ms", tone: "ok" },
    ],
    bullets: [
      "Develop and scale platform features for a cybersecurity learning product used by 8M+ users",
      "Design backend services and APIs using Node.js, MongoDB, and AWS",
      "Partner with product and growth teams on A/B experiments improving activation by 12% and retention by 10%",
      "Ship high-velocity iterations leveraging AI-assisted development and experimentation workflows",
    ],
    stack: ["NODE.JS", "TYPESCRIPT", "MONGODB", "AWS", "GENAI"],
    ping: 31,
  },
];
