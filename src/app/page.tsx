"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  ArrowRight,
  Menu,
  Moon,
  Sun,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  Award,
  BookOpen,
  ExternalLink,
  X,
  CheckCircle2,
} from "lucide-react";

// =====================================================
// CSS Variables & Global Style Injections
// =====================================================
function ThemeVars() {
  return (
    <style>{`
:root {
  --background: 0 0% 100%;
  --foreground: 224 71% 4%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --card: var(--background);
  --card-foreground: var(--foreground);
  --border: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --brand-ig: 340 82% 52%;
  --brand-li: 201 100% 35%;
  --brand-gh: 220 13% 18%;
}
html { color-scheme: light; }
html.dark { color-scheme: dark; }
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --card: var(--background);
  --card-foreground: var(--foreground);
  --border: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}
.bg-background{ background-color: hsl(var(--background)); }
.text-foreground{ color: hsl(var(--foreground)); }
.bg-muted{ background-color: hsl(var(--muted)); }
.text-muted-foreground{ color: hsl(var(--muted-foreground)); }
.border{ border-color: hsl(var(--border)) !important; }
.bg-background\/60{ background-color: color-mix(in srgb, hsl(var(--background)) 60%, transparent); }
.bg-background\/70{ background-color: color-mix(in srgb, hsl(var(--background)) 70%, transparent); }

.nav-pulse { position: relative; display:inline-block; }
.nav-pulse::after{content:"";position:absolute;left:0;right:0;margin:0 auto;bottom:-6px;height:2px;width:0;background: currentColor;border-radius:2px;opacity:0;box-shadow:0 0 0 currentColor;transition: width .22s ease, opacity .2s ease, box-shadow .22s ease;}
.nav-pulse:hover::after,.nav-pulse:focus-visible::after{width:100%;opacity:1;animation:navGlow 1.15s ease-in-out infinite;}
@keyframes navGlow{0%{box-shadow:0 0 0 currentColor;}50%{box-shadow:0 0 10px currentColor;}100%{box-shadow:0 0 0 currentColor;}}

.social-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.45rem .65rem;border:1px solid hsl(var(--border));border-radius:.6rem;transition:transform .2s ease, box-shadow .25s ease, background-color .25s ease, color .25s ease;line-height:1;position:relative;overflow:hidden;}
.social-btn:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(0,0,0,.12)}
.btn-gh:hover{color:hsl(var(--brand-gh));background-color:color-mix(in srgb, hsl(var(--brand-gh)) 12%, transparent);border-color:currentColor}
.btn-li:hover{color:hsl(var(--brand-li));background-color:color-mix(in srgb, hsl(var(--brand-li)) 12%, transparent);border-color:currentColor}
.btn-ig:hover{color:hsl(var(--brand-ig));background-color:color-mix(in srgb, hsl(var(--brand-ig)) 12%, transparent);border-color:currentColor}

.fa-flip{isolation:isolate; perspective:600px}
.fa-flip::before{content:"";position:absolute;inset:0;border-radius:inherit;transform:translateY(110%);transition:transform .35s ease;z-index:0;}
.btn-gh.fa-flip:hover::before{background:hsl(var(--brand-gh));}
.btn-li.fa-flip:hover::before{background:hsl(var(--brand-li));}
.btn-ig.fa-flip:hover::before{background:linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5 100%);} 
.fa-flip > *{position:relative; z-index:1}
.fa-flip svg{transition:transform .6s cubic-bezier(.2,.7,.2,1); transform-style:preserve-3d}
.fa-flip:hover svg{transform:rotateY(360deg)}
.fa-flip:hover{color:#fff}

.fx-card{position:relative;transition:transform .2s ease, box-shadow .25s ease}
.fx-card::after{content:"";position:absolute;inset:-1px;border-radius:1.1rem;background:conic-gradient(from 180deg, #7dd3fc33, #a7f3d033, #fde68a33, #7dd3fc33);opacity:0;pointer-events:none;filter:blur(6px)}
.fx-card:hover{transform:translateY(-4px)}
.fx-card:hover::after{opacity:1}
.fx-card .fx-shimmer{background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);background-size:200% 100%;background-position:-100% 0;}
.fx-card:hover .fx-shimmer{animation:fx-sheen 1s ease}
@keyframes fx-sheen{to{background-position:100% 0}}
.expfx{transform-style:preserve-3d}
.expfx::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;border-top-left-radius:1.1rem;border-top-right:1.1rem;background:linear-gradient(90deg,#60a5fa,#a78bfa,#34d399,#fbbf24);transform:translateX(-25%);opacity:0;transition:transform .45s ease, opacity .35s ease}
.expfx:hover::before{transform:translateX(0);opacity:1}
.expfx:hover{transform:translateY(-6px) rotateY(6deg)}

.skills-spotlight { position:relative; }
.skills-spotlight::before { content:""; position:absolute; inset:0; pointer-events:none; background: radial-gradient(180px 180px at var(--mx,50%) var(--my,50%), hsl(0 0% 100%/.12), transparent 60%); transition: background .08s linear; mix-blend-mode: overlay; }
.skill-tile { transition: transform .18s ease, box-shadow .2s ease; will-change: transform; }
.skill-tile[data-hot="1"] { transform: translateY(-4px) scale(1.03); box-shadow: 0 12px 30px rgba(0,0,0,.15); }

.alert{border:1px solid transparent;border-radius:.6rem;padding:.6rem .8rem;font-size:.9rem}
.alert-success{border-color:#16a34a1a;background:#16a34a10;color:#16a34a}
.alert-error{border-color:#ef44441a;background:#ef444410;color:#ef4444}

.social-btn::before{content:"";position:absolute;inset:-1px;border-radius:inherit;transform:scale(.6);opacity:0;transition:transform .25s ease, opacity .25s ease;background:radial-gradient(120px 120px at 50% 50%, currentColor 0%, transparent 70%);filter:blur(10px)}
.social-btn:hover::before{transform:scale(1);opacity:.25}
.social-btn::after{content:"";position:absolute;left:10%;right:10%;bottom:-2px;height:2px;background:currentColor;opacity:0;transform:scaleX(.2);transition:opacity .25s ease, transform .25s ease}
.social-btn:hover::after{opacity:.55;transform:scaleX(1)}
.social-btn svg{transition:transform .25s ease}
.social-btn:hover svg{transform:translateY(-1px) scale(1.05)}
.social-btn:active{transform:translateY(0);box-shadow:0 4px 14px rgba(0,0,0,.12)}
.social-btn:focus-visible{outline:none;box-shadow:0 0 0 2px hsl(var(--background)),0 0 0 4px currentColor}
.btn-ig:hover::before{background:radial-gradient(140px 140px at 50% 50%, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%);opacity:.35}

.tilt-card{will-change:transform;transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .12s ease}
.tilt-card:hover{transition:transform .06s ease}
`}</style>
  );
}

const cx = (...cls: (string | false | null | undefined)[]) =>
  cls.filter(Boolean).join(" ");

const Btn = ({
  as = "button",
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: any) => {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500";
  const styles: Record<string, string> = {
    solid: "bg-foreground text-background hover:opacity-90",
    outline: "border border-foreground/20 hover:bg-foreground/5",
    ghost: "hover:bg-foreground/5",
    icon: "h-9 w-9 p-0 border border-foreground/20 hover:bg-foreground/5",
  };
  const cls = cx(base, styles[variant] || styles.solid, className);
  return as === "a" ? (
    <a href={href} className={cls} {...props}>
      {children}
    </a>
  ) : (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const NavLink = ({ href, children, onClick }: any) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href as string);
      if (target && "scrollIntoView" in target) {
        (target as Element).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      onClick?.();
    }}
    className="relative rounded-sm text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
  >
    <span className="nav-pulse">{children}</span>
  </a>
);

const Card = ({ className = "", children, ...props }: any) => (
  <div
    className={cx(
      "rounded-2xl border bg-background/60 backdrop-blur-sm",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
const CardHeader = ({ className = "", children }: any) => (
  <div className={cx("p-6", className)}>{children}</div>
);
const CardTitle = ({ className = "", children }: any) => (
  <h3 className={cx("text-lg font-semibold", className)}>{children}</h3>
);
const CardContent = ({ className = "", children }: any) => (
  <div className={cx("p-6 pt-0", className)}>{children}</div>
);

const Input = (props: any) => (
  <input
    {...props}
    className={cx(
      "w-full rounded-md border bg-background px-3 py-2 text-sm",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
      props.className || "",
    )}
  />
);
const Textarea = (props: any) => (
  <textarea
    {...props}
    className={cx(
      "w-full rounded-md border bg-background px-3 py-2 text-sm",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
      props.className || "",
    )}
  />
);

const Avatar = ({ src, alt, fallback }: any) => (
  <div className="h-10 w-10 overflow-hidden rounded-full border">
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <div className="flex h-full w-full items-center justify-center text-sm">
        {fallback}
      </div>
    )}
  </div>
);

const Badge = ({ children }: any) => (
  <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs opacity-90">
    {children}
  </span>
);

// =====================================================
// Static Profile Data Definitions
// =====================================================
const PROFILE = {
  name: "Ajaykumar DEVARADJOU",
  role: "Front-End & ServiceNow Developer",
  roles: ["ServiceNow Developer", "Front-End Developer"],
  location: "Ivry-sur-Seine, France",
  email: "ajaykumar123d@gmail.com",
  phone: "+33 6 61 84 70 83",
  headshot: "ajaypersonal.jpg",
  bio: "Building on ServiceNow and modern web stacks, I create apps that are fast, accessible, and enjoyable to use.",
  resumeUrl: "/cv/Ajaykumar Devaradjou CV.pdf",
  socials: {
    github: "https://github.com/AjayDevzX",
    linkedin: "https://www.linkedin.com/in/ajaykumar-devaradjou-72a441199/",
    instagram: "https://www.instagram.com/ajay_devaradjou_/",
  },
};

const SKILLS = [
  { name: "Servicenow", icon: "/skills/servicenowlogooo.jpeg" },
  { name: "CMDB", icon: "/skills/cmdb.jpg" },
  { name: "HTML", icon: "/skills/html.jpeg" },
  { name: "CSS", icon: "/skills/css.jpeg" },
  { name: "JavaScript", icon: "/skills/JavaScript.jpeg" },
  { name: "C#", icon: "/skills/cslash.jpeg" },
  { name: "Docker", icon: "/skills/docker.jpeg" },
  { name: "Java", icon: "/skills/java.jpeg" },
  { name: "MySQL", icon: "/skills/MySQL.jpeg" },
  { name: "nodeJS", icon: "/skills/nodejs.jpeg" },
  { name: "React", icon: "/skills/React.jpeg" },
  { name: "Swagger API", icon: "/skills/swaggerapi.jpeg" },
  { name: "Github", icon: "/skills/github.jpeg" },
  { name: "VS Code", icon: "/skills/vsscode.jpeg" },
];

const PROJECTS = [
  {
    title: "Goods Delivery App",
    description:
      "Java Swing app for goods delivery management — lets users register/log in, create/edit orders, pick delivery dates, and store data via JDBC to a MySQL database (with simple offline login state in text files).",
    tags: ["Java", "Swing", "JDBC", "MySQL", "Desktop", "Eclipse", "JCalendar"],
    image: "/projects/goodsdelivery.png",
    repo: "https://github.com/AjayDevzX/Goods-Delivery.git",
  },
  {
    title: "ServiceNow - ITSM & CMDB",
    description:
      "Implementation and customization of ServiceNow ITSM modules (Incident, Change, Problem, and Catalog) with CMDB administration aligned to ITIL® best practices. Developed dashboards, reports, and automation workflows to improve IT asset visibility and service efficiency.",
    tags: ["ServiceNow", "ITSM", "CMDB", "ITIL", "Automation", "Agile"],
    image: "/projects/servicenowimage.png",
  },
  {
    title: "E-commerce Website",
    description:
      "Full-stack e-commerce platform developed with PHP, MySQL, HTML, CSS, and JavaScript. Features include secure user authentication, product catalog management, shopping cart, order processing, and database backup and restoration.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "/projects/ecommerce.png",
    repo: "https://github.com/AjayDevzX/e-commerce-webcentric.git",
  },
  {
    title: "Reducing Food Waste",
    description:
      "Java-based application designed to minimize food waste by tracking inventory, monitoring expiration dates, and suggesting optimized usage or donations. Implements CRUD operations, file management, and a user-friendly interface for sustainable food management.",
    tags: ["Java", "OOP", "MySQL", "Swing", "Sustainability"],
    image: "/projects/foodwaste.png",
    repo: "https://github.com/AjayDevzX/reducing-food-waste-java.git",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Interactive Tic Tac Toe game built with Java implementing game logic, win detection, and a simple GUI for two players. Focused on object-oriented programming principles and clean interface design.",
    tags: ["Java", "OOP", "Game Development", "Swing"],
    image: "/projects/tictactoe.png",
    repo: "https://github.com/AjayDevzX/Tic_tac_toe.git",
  },
];

const EXPERIENCE = [
  {
    company: "Devoteam",
    logo: "devoteam-logo.png",
    role: "ServiceNow Technical Consultant",
    period: "2026 — Present",
    points: [
      "Currently completing my end-of-studies internship as a ServiceNow Technical Consultant at Devoteam, working on ServiceNow configuration, customization, optimization, and application development to support business and ITSM processes.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    logo: "tata.png",
    role: "ServiceNow Developer",
    period: "2021 — 2023",
    points: [
      "Implemented ITSM modules (Incident, Change, Problem, Catalog) aligned with ITIL® best practices",
      "Optimized CMDB accuracy and automated asset tracking workflows",
      "Developed custom dashboards for performance monitoring and KPIs",
      "Contributed to digital transformation initiatives using Agile/Scrum",
    ],
  },
];

const EDUCATION = [
  {
    school: "Esigelec",
    logo: "esigeleclogo.png",
    degree: "MSc Software Engineering & Digital Transformation",
    period: "2023 — Present",
  },
  {
    school: "Sri Manakula Vinayagar Engineering College",
    logo: "smveclogo.png",
    degree: "B.Tech in Information Technology",
    period: "2017 — 2021",
  },
];

const CERTIFICATIONS = [
  {
    title: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
    date: "Apr 7, 2026",
    status: "Current",
    type: "Certification",
    badgeImage: "/servicenow/cadlogo.webp",
    modalImage:
      "/servicenow/ServiceNow_Certified_Application_Developer_CAD.jpg",
    link: "https://nowlearning.servicenow.com/",
  },
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "Feb 26, 2026",
    status: "Current",
    type: "Certification",
    badgeImage: "/servicenow/csalogo.png",
    modalImage:
      "/servicenow/ServiceNow_Certified_System_Administrator_(CSA).jpg",
    link: "https://nowlearning.servicenow.com/",
  },
  {
    title: "Micro-certification - Configuration Management Database (CMDB)",
    issuer: "ServiceNow",
    date: "June 4, 2026",
    status: "Current",
    type: "Certification",
    badgeImage:
      "/servicenow/Credential Badge - Micro-Cert- Certified Configure the CMDB.png",
    modalImage: "/servicenow/Micro-Certification-Configure_the-CMDB.jpg",
    link: "",
  },
  {
    title: "Javascript for the ServiceNow Professional 2026",
    issuer: "Udemy",
    date: "March 3, 2026",
    status: "Current",
    type: "Certification",
    badgeImage: "/servicenow/udemy_logo.webp",
    modalImage: "/servicenow/Js_servicenow certification.jpg",
    link: "",
  },
  {
    title: "Micro-certification - Agentic AI Executive",
    issuer: "ServiceNow",
    date: "Jan 21, 2026",
    status: "Current",
    type: "Certification",
    badgeImage: "/servicenow/Micro-Certification - Agentic AI Executive.png",
    modalImage: "/servicenow/Micro-Certification-Agentic AI Executive.jpg",
    link: "",
  },
  {
    title: "Micro-certification - Now Assist Executive",
    issuer: "ServiceNow",
    date: "Jan 21, 2026",
    status: "Current",
    type: "Certification",
    badgeImage:
      "/servicenow/Credential Badge - Micro-Cert- Now Assist Executive.png",
    modalImage: "/servicenow/Now Assist Executive Micro Certification.jpg",
    link: "",
  },
  {
    title: "Micro-certification - Welcome to ServiceNow",
    issuer: "ServiceNow",
    date: "Jan 15, 2026",
    status: "Current",
    type: "Certification",
    badgeImage:
      "/servicenow/Credential Badge - Micro-Cert- Certified Welcome to ServiceNow.png",
    modalImage: "/servicenow/Micro-Certification-Welcome to Servicenow.jpg",
    link: "",
  },
];

const PUBLICATIONS = [
  {
    title:
      "Digital Art Gallery on Phones for Users with Reduced Mobility by Using Augmented Virtuality",
    publisher: "Springer / ICICT 2025 — London",
    date: "2025",
    description:
      "An accessibility-driven research framework introducing a mobile-based immersive Augmented Virtuality gallery system. The project builds an inclusive, phone-optimised virtual interface allowing remote exploration of cultural exhibitions for individuals with reduced mobility, while offering scalable structural tools for digital museum asset lifecycle management.",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-6938-7_47",
    image: "/publication/publi-image.png", // save the SVG illustration here
    certificate: "/publication/publication-certificate.jpeg", // rename your uploaded JPEG to this
  },
];

// ========================= Animation Constants =========================
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

// ========================= Theme State Hook =========================
function useThemeToggle() {
  const [dark, setDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDark(stored === "dark");
    } else {
      setDark(
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true,
      );
    }
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark, mounted]);

  return { dark, setDark, mounted };
}

// ========================= Base Layout Wrappers =========================
const Section = ({ id, title, icon: Icon, children }: any) => (
  <section id={id} className="scroll-mt-24 py-16" aria-label={title}>
    <div className="container mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-muted p-2 fx-shimmer">
          <Icon className="size-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const AnimatedRole = ({ roles }: { roles: string[] }) => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [dir, setDir] = useState<"typing" | "deleting" | "pause">("typing");
  const maskId = useId();

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const TYPE_MS = 70,
    DELETE_MS = 45,
    PAUSE_MS = 900,
    GAP_MS = 250;
  const TARGET = (roles[index] ?? "").trim();

  useEffect(() => {
    let t: any;
    if (dir === "typing") {
      if (sub < TARGET.length)
        t = setTimeout(() => setSub((s) => s + 1), TYPE_MS);
      else t = setTimeout(() => setDir("pause"), PAUSE_MS);
    } else if (dir === "deleting") {
      if (sub > 0) t = setTimeout(() => setSub((s) => s - 1), DELETE_MS);
      else {
        t = setTimeout(() => {
          setIndex((n) => (n + 1) % roles.length);
          setDir("typing");
        }, GAP_MS);
      }
    } else {
      t = setTimeout(() => setDir("deleting"), 600);
    }
    return () => clearTimeout(t);
  }, [dir, sub, roles.length, TARGET.length, index]);

  const display = TARGET.slice(0, sub);
  const snGreen = "#62D84F";
  const snTextHex = "#032D42";
  const isSN = /servicenow/i.test(TARGET);
  const isFE = /front[- ]?end/i.test(TARGET);

  const darkMode = isClient
    ? document.documentElement.classList.contains("dark")
    : true;
  const roleColor =
    isClient && (isSN || isFE) ? (darkMode ? snGreen : snTextHex) : undefined;

  const nowPos = isSN ? TARGET.toLowerCase().indexOf("now") : -1;
  const oIndex = nowPos >= 0 ? nowPos + 1 : -1;
  const devPos = isSN ? TARGET.toLowerCase().indexOf("developer") : -1;
  const devOIndex = devPos >= 0 ? devPos + "developer".indexOf("o") : -1;
  const lastSpace = TARGET.lastIndexOf(" ");
  const lastWordStart = lastSpace >= 0 ? lastSpace + 1 : -1;

  const ServiceNowO = ({ isDark }: { isDark: boolean }) => (
    <span
      aria-label="ServiceNow O"
      className="inline-block align-baseline"
      style={{
        width: "0.72em",
        height: "0.80em",
        position: "relative",
        top: "0.13em",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        role="img"
        focusable="false"
      >
        <defs>
          <mask id={maskId}>
            <rect width="100" height="100" fill="#fff" />
            <circle cx="50" cy="50" r="28" fill="#000" />
            <path d="M26,73 C38,92 62,92 74,73 L74,100 L26,100 Z" fill="#000" />
          </mask>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={isDark ? snTextHex : snGreen}
          stroke={isDark ? snGreen : "none"}
          strokeWidth={isDark ? 8 : 0}
          mask={`url(#${maskId})`}
        />
      </svg>
    </span>
  );

  return (
    <div className="mt-2">
      <motion.span
        initial={{ opacity: 0.7, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-baseline gap-0 text-2xl font-extrabold tracking-tight md:text-3xl"
        aria-live="polite"
      >
        {display.split("").map((ch, i) => {
          if (isSN && (i === oIndex || i === devOIndex)) {
            return <ServiceNowO key={`sn-o-${i}`} isDark={darkMode} />;
          }

          const styleObj: React.CSSProperties = {};
          if (roleColor) styleObj.color = roleColor;
          if (i === lastWordStart) styleObj.marginInlineStart = "0.35ch";

          if (isFE && i === 0 && darkMode) {
            Object.assign(styleObj, {
              color: snTextHex,
              WebkitTextStroke: `1.3px ${snGreen}`,
              textStroke: `1.3px ${snGreen}`,
            });
          } else if (isFE && i === 0) {
            Object.assign(styleObj, { color: snGreen });
          }

          return (
            <span
              key={i}
              className="text-neutral-900 dark:text-neutral-100"
              style={styleObj}
            >
              {ch}
            </span>
          );
        })}
        <span className="ml-1 inline-block h-6 w-3 translate-y-[2px] animate-pulse bg-foreground/70 md:h-7" />
      </motion.span>
    </div>
  );
};

function NameWithGradient({ name }: { name: string }) {
  const parts = name.split(" ");
  const last = parts.pop() || "";
  const first = parts.join(" ");
  return (
    <>
      {first}{" "}
      <motion.span
        className="bg-gradient-to-r from-indigo-400 via-emerald-400 to-amber-400 bg-[length:200%_200%] bg-clip-text text-transparent"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        {last}
      </motion.span>
    </>
  );
}

export function HeadshotInteractive({
  src,
  alt,
  reduce,
}: {
  src: string;
  alt: string;
  reduce?: boolean | null;
}) {
  const prefers = useReducedMotion();
  const motionOff = reduce ?? prefers ?? false;

  return (
    <div className="relative group mx-auto w-full max-w-[420px] aspect-[21/26] rounded-3xl overflow-visible">
      <motion.div
        className="absolute -inset-12 sm:-inset-16 z-0 rounded-[3rem]"
        animate={motionOff ? { rotate: 0 } : { rotate: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(99,102,241,.45), rgba(16,185,129,.4), rgba(251,191,36,.35), rgba(99,102,241,.45))",
          filter: "blur(60px)",
          opacity: 0.8,
        }}
      />
      <div className="relative z-10 h-full w-full rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="block h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div
        className="absolute inset-0 z-0 rounded-[3rem]"
        style={{
          boxShadow: "0 40px 100px rgba(0,0,0,.4), 0 10px 40px rgba(0,0,0,.3)",
        }}
      />
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <Btn
        aria-label="Open menu"
        variant="outline"
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-5" />
      </Btn>
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-background/80 backdrop-blur-xl border-l shadow-2xl">
            <div className="mb-6 flex items-center justify-between p-6">
              <span className="font-semibold">Menu</span>
              <button
                className="btn-icon"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="grid gap-4 px-6">
              {[
                "about",
                "projects",
                "experience",
                "skills",
                "education",
                "certifications",
                "publications",
                "contact",
              ].map((s) => (
                <NavLink key={s} href={`#${s}`} onClick={() => setOpen(false)}>
                  {s[0].toUpperCase() + s.slice(1)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = (y / r.height - 0.5) * -8;
    const ry = (x / r.width - 0.5) * 8;
    el.style.setProperty("--rx", rx.toFixed(2) + "deg");
    el.style.setProperty("--ry", ry.toFixed(2) + "deg");
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <div
      ref={ref}
      className="tilt-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

const ExperienceCard = ({ company, logo, role, period, points }: any) => (
  <motion.div variants={fadeUp}>
    <TiltCard>
      <Card className="fx-card expfx transition hover:shadow-md">
        <CardHeader className="flex flex-col items-center gap-3 text-center">
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-20 w-20 rounded-lg object-contain shadow-sm md:h-20 md:w-20"
            loading="lazy"
            decoding="async"
          />
          <div className="space-y-1">
            <CardTitle className="leading-tight">{role}</CardTitle>
            <div className="text-sm text-muted-foreground">{company}</div>
            <div className="text-xs text-muted-foreground/90">{period}</div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2 text-center text-muted-foreground">
            {points.map((pt: string, idx: number) => (
              <li key={idx} className="leading-relaxed">
                {pt}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </TiltCard>
  </motion.div>
);

const EducationCard = ({ school, logo, degree, period }: any) => (
  <motion.div variants={fadeUp}>
    <TiltCard>
      <Card className="fx-card expfx transition hover:shadow-md">
        <CardHeader className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${school} logo`}
            className="h-16 w-16 rounded object-contain"
            loading="lazy"
            decoding="async"
          />
          <div>
            <CardTitle>{degree}</CardTitle>
            <div className="text-sm text-muted-foreground">
              {school} · {period}
            </div>
          </div>
        </CardHeader>
      </Card>
    </TiltCard>
  </motion.div>
);

function SkillsSpotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    const tiles = el.querySelectorAll<HTMLElement>("[data-skill]");
    tiles.forEach((t) => {
      const r = t.getBoundingClientRect();
      const cx = r.left + r.width / 2 - rect.left;
      const cy = r.top + r.height / 2 - rect.top;
      const d = Math.hypot(cx - x, cy - y);
      t.dataset.hot = d < 160 ? "1" : "0";
    });
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.removeProperty("--mx");
    el.style.removeProperty("--my");
    el.querySelectorAll<HTMLElement>("[data-skill]").forEach(
      (t) => (t.dataset.hot = "0"),
    );
  };
  return (
    <div
      ref={ref}
      className="skills-spotlight"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

function Web3ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const messageValue = (formData.get("message") as string)?.trim() || "";

    if (messageValue.length < 10) {
      setStatus("error");
      setMessage("Please enter at least 10 characters in the message.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="hidden"
        name="access_key"
        value="0c9ad70d-15a4-4eaa-8d4a-df6a10277c13"
      />
      <input type="hidden" name="subject" value="New message from portfolio" />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Input name="name" placeholder="Your name" required />
      <Input type="email" name="email" placeholder="Your email" required />
      <Textarea
        rows={5}
        name="message"
        placeholder="Tell me about your project…"
        required
      />

      <Btn type="submit" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Btn>

      <p
        className={`text-xs ${status === "error" ? "text-red-500" : "text-muted-foreground"}`}
      >
        {message}
      </p>
    </form>
  );
}

// ========================= Main Page Assembly =========================
export default function Portfolio() {
  const { dark, setDark, mounted } = useThemeToggle();
  const reduce = useReducedMotion();
  const [activeCert, setActiveCert] = useState<
    (typeof CERTIFICATIONS)[0] | null
  >(null);
  const [certOpen, setCertOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      suppressHydrationWarning
    >
      <ThemeVars />

      {/* Background elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,oklch(0.75_0.2_280/.25),transparent),radial-gradient(800px_400px_at_10%_10%,oklch(0.75_0.2_200/.25),transparent),radial-gradient(800px_400px_at_90%_20%,oklch(0.75_0.2_20/.25),transparent)]" />
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold">
              <NameWithGradient name={PROFILE.name} />
            </span>
          </div>
          <nav className="hidden items-center gap-5 lg:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Btn
              aria-label="Toggle theme"
              variant="ghost"
              className="icon"
              onClick={() => setDark(!dark)}
            >
              {mounted && dark ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Btn>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Presentation */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 py-16 md:grid-cols-2">
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="text-3xl font-extrabold tracking-tight md:text-5xl"
              >
                <NameWithGradient name={PROFILE.name} />
              </motion.h1>

              <AnimatedRole roles={PROFILE.roles} />

              <motion.p
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="mt-6 leading-relaxed text-muted-foreground"
              >
                {PROFILE.bio}
              </motion.p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <motion.div variants={fadeUp}>
                  <Btn
                    as="a"
                    href="#projects"
                    className="transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    See Projects <ArrowRight className="ml-2 size-4" />
                  </Btn>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Btn
                    as="a"
                    href={PROFILE.resumeUrl}
                    variant="outline"
                    className="transition hover:-translate-y-0.5 hover:shadow-lg"
                    download
                  >
                    <Download className="mr-2 size-4" /> Download CV
                  </Btn>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Btn
                    as="a"
                    variant="ghost"
                    className="transition hover:-translate-y-0.5 hover:shadow-lg"
                    href={`mailto:${PROFILE.email}`}
                  >
                    <Mail className="mr-2 size-4" /> Contact me
                  </Btn>
                </motion.div>
              </motion.div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 mr-2">
                  <MapPin className="size-4" /> {PROFILE.location}
                </span>
                <a
                  className="social-btn btn-gh fa-flip"
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  className="social-btn btn-li fa-flip"
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  className="social-btn btn-ig fa-flip"
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
              </div>
            </div>

            <HeadshotInteractive
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              reduce={reduce}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About" icon={Sparkles}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>What I do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Currently working as a ServiceNow Technical Consultant Intern
                  at Devoteam and certified in CSA & CAD, I am pursuing a
                  Master’s degree in Software Engineering & Digital
                  Transformation at ESIGELEC. Previously, I gained 2 years of
                  experience at Tata Consultancy Services as a ServiceNow
                  Consultant, working on ITSM, CMDB, and process optimization
                  projects for international clients.
                </p>
                <p>
                  As part of my role at Devoteam, I also participated in
                  shadowing projects for Hermès, gaining exposure to complex
                  enterprise environments and ServiceNow best practices.
                  Passionate about digital transformation, I continuously
                  strengthen my technical and functional expertise to deliver
                  efficient, business-oriented solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle>Quick facts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="size-4" /> {PROFILE.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4" /> {PROFILE.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" /> {PROFILE.location}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" title="Featured Projects" icon={Code2}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, rotate: 0.4 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <Card className="group overflow-hidden shadow-sm transition h-full flex flex-col">
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-3">
                    <span>{p.title}</span>
                    {p.repo && (
                      <a
                        href={p.repo}
                        aria-label="Source code"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn btn-gh fa-flip shrink-0"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Professional Experience Section */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6"
        >
          {EXPERIENCE.map((job, i) => (
            <ExperienceCard key={`${job.company}-${i}`} {...job} />
          ))}
        </motion.div>
      </Section>

      {/* Academic Education Section */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {EDUCATION.map((edu, i) => (
            <EducationCard key={`${edu.school}-${i}`} {...edu} />
          ))}
        </motion.div>
      </Section>

      {/* Certifications Section */}
      <Section id="certifications" title="Certifications" icon={Award}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div key={cert.title} variants={fadeUp} custom={i}>
              <TiltCard>
                <Card
                  className="fx-card transition hover:shadow-md h-full cursor-pointer overflow-hidden group/cert bg-white text-black border border-neutral-200"
                  onClick={() => cert.modalImage && setActiveCert(cert)}
                >
                  <div className="p-6 flex items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        {cert.type}
                      </div>
                      <h4 className="font-bold text-lg leading-snug text-neutral-900 group-hover/cert:text-emerald-600 transition-colors line-clamp-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-600">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {cert.status}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-2 font-mono">
                        <CheckCircle2 className="size-3.5 text-neutral-400 shrink-0" />
                        Issued: {cert.date}
                      </div>
                    </div>

                    {cert.badgeImage ? (
                      <div className="relative h-20 w-16 bg-neutral-50 rounded-lg p-1 border border-neutral-100 flex items-center justify-center shrink-0 shadow-sm group-hover/cert:scale-105 transition-transform duration-300">
                        <img
                          src={cert.badgeImage}
                          alt={`${cert.title} Badge`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-20 w-16 rounded-lg bg-neutral-100 text-neutral-400 flex items-center justify-center shrink-0">
                        <Award className="size-8" />
                      </div>
                    )}
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Raw JPEG Image Lightbox Overlay System */}
      <AnimatePresence>
        {activeCert && activeCert.modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Smooth background blur veil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveCert(null)}
            />

            {/* Lightbox Panel Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative max-w-4xl max-h-[90vh] w-auto overflow-hidden rounded-xl bg-neutral-900 shadow-2xl z-10 border border-white/10 flex items-center justify-center"
            >
              {/* Floating Action Close Button */}
              <div className="absolute right-4 top-4 z-20">
                <button
                  onClick={() => setActiveCert(null)}
                  className="flex size-10 items-center justify-center rounded-full bg-black/50 text-white border border-white/20 backdrop-blur hover:bg-black/80 active:scale-95 transition duration-200"
                  aria-label="Close image popup"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Lightbox graphic asset container */}
              <img
                src={activeCert.modalImage}
                alt={`${activeCert.title} Official JPEG Credential Record`}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain block select-none rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Publications Papers Section (Enhanced) */}

      <Section id="publications" title="Publications" icon={BookOpen}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6"
        >
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl group border border-border/60">
                {/* Glow background on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/10 via-indigo-400/10 to-amber-400/10 blur-2xl" />
                </div>

                <div className="flex flex-col md:flex-row relative z-10">
                  {/* LEFT IMAGE */}
                  {pub.image && (
                    <div className="relative md:w-72 shrink-0 overflow-hidden">
                      <img
                        src={pub.image}
                        alt="Publication illustration"
                        className="h-52 w-full object-cover md:h-full transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </div>
                  )}

                  {/* RIGHT CONTENT */}
                  <div className="flex flex-col justify-between gap-4 p-6 flex-1">
                    <div className="space-y-3">
                      {/* BADGES */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 transition-transform hover:scale-105">
                          {pub.date}
                        </span>

                        <span className="inline-flex items-center rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 transition-transform hover:scale-105">
                          Springer · ICICT
                        </span>

                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground transition-transform hover:scale-105">
                          Conference Paper
                        </span>
                      </div>

                      {/* TITLE */}
                      <h4 className="text-lg font-semibold leading-snug transition-colors group-hover:text-emerald-500">
                        {pub.title}
                      </h4>

                      {/* PUBLISHER */}
                      <div className="text-sm text-muted-foreground font-medium">
                        {pub.publisher}
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-muted-foreground leading-relaxed transition-opacity group-hover:opacity-90">
                        {pub.description}
                      </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                      {pub.link && pub.link !== "#" && (
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Btn
                            as="a"
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                          >
                            Read Paper <ExternalLink className="ml-2 size-4" />
                          </Btn>
                        </motion.div>
                      )}

                      {pub.certificate && (
                        <motion.div
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Btn
                            variant="outline"
                            className="border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
                            onClick={() => setCertOpen(true)}
                          >
                            <Award className="mr-2 size-4" />
                            View Certificate
                          </Btn>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CERTIFICATE STRIP */}
                {pub.certificate && (
                  <button
                    onClick={() => setCertOpen(true)}
                    className="w-full flex items-center gap-4 px-6 py-3 border-t border-border bg-muted/30 hover:bg-muted/60 transition group"
                  >
                    <div className="h-10 w-14 shrink-0 rounded border border-amber-400/40 bg-amber-50 dark:bg-amber-950/30 overflow-hidden">
                      <img
                        src={pub.certificate}
                        alt="Certificate thumbnail"
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate transition group-hover:text-emerald-500">
                        ICICT 2025 participation certificate
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        10th International Conference on ICT · London, Feb 2025
                      </p>
                    </div>

                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-foreground transition shrink-0" />
                  </button>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {certOpen && PUBLICATIONS[0].certificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setCertOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 10 }}
              transition={{ type: "spring", duration: 0.35 }}
              className="relative max-w-4xl max-h-[90vh] w-auto overflow-hidden rounded-xl bg-neutral-900 shadow-2xl z-10 border border-white/10"
            >
              <button
                onClick={() => setCertOpen(false)}
                className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-black/50 text-white border border-white/20 backdrop-blur hover:bg-black/80 active:scale-95 transition"
                aria-label="Close certificate"
              >
                <X className="size-5" />
              </button>

              <img
                src={PUBLICATIONS[0].certificate}
                alt="ICICT 2025 Certificate"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain block select-none rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tech Skills Grid */}
      <Section id="skills" title="Skills" icon={Sparkles}>
        <SkillsSpotlight>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7"
          >
            {SKILLS.map((s, idx) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                custom={idx}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div
                  className="skill-tile flex h-full flex-col items-center justify-center rounded-2xl bg-muted/30 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.04)] hover:shadow-md dark:bg-muted/20"
                  data-skill={s.name}
                  data-hot="0"
                >
                  <img
                    src={s.icon}
                    alt={`${s.name} logo`}
                    className="mb-3 h-12 w-12 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-xs font-medium opacity-90">{s.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SkillsSpotlight>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Let's work together</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar
                  src={PROFILE.headshot}
                  alt="Avatar"
                  fallback={PROFILE.name.slice(0, 2).toUpperCase()}
                />
                <div>
                  <div className="font-medium">{PROFILE.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {PROFILE.role}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                For the fastest response, email me directly or connect on
                LinkedIn. I am open to End-of-studies internships and
                collaborative builds.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  className="social-btn btn-li fa-flip"
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  className="social-btn btn-gh fa-flip"
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  className="social-btn btn-ig fa-flip"
                  href={PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
                <a className="social-btn" href={`mailto:${PROFILE.email}`}>
                  <Mail className="size-4" /> Email
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <Web3ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer>
        <div className="container mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved. |
          Clean code. Bold impact.
        </div>
      </footer>
    </div>
  );
}
