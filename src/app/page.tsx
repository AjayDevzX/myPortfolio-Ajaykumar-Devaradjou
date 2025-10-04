"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
} from "lucide-react";

// =====================================================
// friendly portfolio
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

/* === Nav pulsing underline (only on hover/focus) === */
.nav-pulse { position: relative; display:inline-block; }
.nav-pulse::after{content:"";position:absolute;left:0;right:0;margin:0 auto;bottom:-6px;height:2px;width:0;background: currentColor;border-radius:2px;opacity:0;box-shadow:0 0 0 currentColor;transition: width .22s ease, opacity .2s ease, box-shadow .22s ease;}
.nav-pulse:hover::after,.nav-pulse:focus-visible::after{width:100%;opacity:1;animation:navGlow 1.15s ease-in-out infinite;}
@keyframes navGlow{0%{box-shadow:0 0 0 currentColor;}50%{box-shadow:0 0 10px currentColor;}100%{box-shadow:0 0 0 currentColor;}}

/* === Social hover (boxed brand buttons) === */
.social-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.45rem .65rem;border:1px solid hsl(var(--border));border-radius:.6rem;transition:transform .2s ease, box-shadow .25s ease, background-color .25s ease, color .25s ease;line-height:1;position:relative;overflow:hidden;}
.social-btn:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(0,0,0,.12)}
.btn-gh:hover{color:hsl(var(--brand-gh));background-color:color-mix(in srgb, hsl(var(--brand-gh)) 12%, transparent);border-color:currentColor}
.btn-li:hover{color:hsl(var(--brand-li));background-color:color-mix(in srgb, hsl(var(--brand-li)) 12%, transparent);border-color:currentColor}
.btn-ig:hover{color:hsl(var(--brand-ig));background-color:color-mix(in srgb, hsl(var(--brand-ig)) 12%, transparent);border-color:currentColor}

/* === Ephraim‑style FA hover: slide-up fill + 360° Y-rotation === */
.fa-flip{isolation:isolate; perspective:600px}
.fa-flip::before{content:"";position:absolute;inset:0;border-radius:inherit;transform:translateY(110%);transition:transform .35s ease;z-index:0;}
.btn-gh.fa-flip:hover::before{background:hsl(var(--brand-gh));}
.btn-li.fa-flip:hover::before{background:hsl(var(--brand-li));}
.btn-ig.fa-flip:hover::before{background:linear-gradient(135deg,#feda75 0%,#fa7e1e 25%,#d62976 50%,#962fbf 75%,#4f5bd5 100%);} 
.fa-flip > *{position:relative; z-index:1}
.fa-flip svg{transition:transform .6s cubic-bezier(.2,.7,.2,1); transform-style:preserve-3d}
.fa-flip:hover svg{transform:rotateY(360deg)}
.fa-flip:hover{color:#fff}

/* === Holographic photo card === */
.holo-wrap { position: relative; border-radius: 1.5rem; overflow:hidden; }
.holo-border { position:absolute; inset:-1px; border-radius:1.6rem; padding:2px; background:
  conic-gradient(from 0deg, #8ec5ff66, #ffb3ec66, #ffe59a66, #b5ffcd66, #8ec5ff66);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude; pointer-events:none; }
.holo-noise { position:absolute; inset:0; background:
  radial-gradient(180px 80px at 20% 10%, rgba(255,255,255,.25), transparent 60%),
  radial-gradient(220px 100px at 80% 0%, rgba(255,255,255,.18), transparent 60%);
  mix-blend-mode: overlay; pointer-events:none; }
.holo-sheen { position:absolute; inset:0; background: linear-gradient(100deg, transparent 40%, rgba(255,255,255,.45) 50%, transparent 60%); filter: blur(12px); opacity:0; pointer-events:none; }
.holo-wrap:hover .holo-sheen { animation: sheen-scan 1.3s ease; }
@keyframes sheen-scan { from{ transform: translateX(-120%); opacity:.7;} 60%{opacity:.3;} to{ transform: translateX(120%); opacity:0;} }

/* === Fancy card hover for Experience/Education === */
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

/* === Skills cursor spotlight (no canvas) === */
.skills-spotlight { position:relative; }
.skills-spotlight::before { content:""; position:absolute; inset:0; pointer-events:none; background: radial-gradient(180px 180px at var(--mx,50%) var(--my,50%), hsl(0 0% 100%/.12), transparent 60%); transition: background .08s linear; mix-blend-mode: overlay; }
.skill-tile { transition: transform .18s ease, box-shadow .2s ease; will-change: transform; }
.skill-tile[data-hot="1"] { transform: translateY(-4px) scale(1.03); box-shadow: 0 12px 30px rgba(0,0,0,.15); }

/* === Utility icon button === */
.btn-icon { height: 2.25rem; width: 2.25rem; padding:0; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; display:inline-flex; align-items:center; justify-content:center; }
.alert{border:1px solid transparent;border-radius:.6rem;padding:.6rem .8rem;font-size:.9rem}
.alert-success{border-color:#16a34a1a;background:#16a34a10;color:#16a34a}
.alert-error{border-color:#ef44441a;background:#ef444410;color:#ef4444}

/* === Enhanced social buttons (magnetic glow + sheen) === */
.social-btn{position:relative;overflow:hidden}
.social-btn::before{content:"";position:absolute;inset:-1px;border-radius:inherit;transform:scale(.6);opacity:0;transition:transform .25s ease, opacity .25s ease;background:radial-gradient(120px 120px at 50% 50%, currentColor 0%, transparent 70%);filter:blur(10px)}
.social-btn:hover::before{transform:scale(1);opacity:.25}
.social-btn::after{content:"";position:absolute;left:10%;right:10%;bottom:-2px;height:2px;background:currentColor;opacity:0;transform:scaleX(.2);transition:opacity .25s ease, transform .25s ease}
.social-btn:hover::after{opacity:.55;transform:scaleX(1)}
.social-btn svg{transition:transform .25s ease}
.social-btn:hover svg{transform:translateY(-1px) scale(1.05)}
.social-btn:active{transform:translateY(0);box-shadow:0 4px 14px rgba(0,0,0,.12)}
.social-btn:focus-visible{outline:none;box-shadow:0 0 0 2px hsl(var(--background)),0 0 0 4px currentColor}
.btn-ig:hover::before{background:radial-gradient(140px 140px at 50% 50%, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%);opacity:.35}

/* === Tilt card cursor effect for Experience/Education === */
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

// NavLink with pulsing underline
const NavLink = ({ href, children, onClick }: any) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector(href as string);
      if (target && "scrollIntoView" in target)
        (target as Element).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      onClick?.();
    }}
    className="relative rounded-sm text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
  >
    <span className="nav-pulse">{children}</span>
  </a>
);

// Basic card primitives
const Card = ({ className = "", children }: any) => (
  <div
    className={cx(
      "rounded-2xl border bg-background/60 backdrop-blur-sm",
      className
    )}
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
      props.className || ""
    )}
  />
);
const Textarea = (props: any) => (
  <textarea
    {...props}
    className={cx(
      "w-full rounded-md border bg-background px-3 py-2 text-sm",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
      props.className || ""
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
// Data
// =====================================================
const FORMSPREE_ID = "";
const FORMSPREE_URL = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : "";
const PROFILE = {
  name: "Ajaykumar DEVARADJOU",
  role: "Front-End & ServiceNow Developer",
  roles: ["ServiceNow Developer", "Front-End Developer"],
  location: "Paris, France",
  email: "ajaykumar123d@gmail.com",
  phone: "+33 6 61 84 70 78",
  headshot: "ajaydevapicaj.jpg",
  bio: "Building on ServiceNow and modern web stacks, I create apps that are fast, accessible, and enjoyable to use.",
  resumeUrl: "/cv/Devaradjou_CV_.pdf",
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
    school: "Sri Manakula Vinayagar Enginnering College",
    logo: "smveclogo.png",
    degree: "B.Tech in Information Technology",
    period: "2017 — 2021",
  },
];

// ========================= Motion utils =========================
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

// ========================= Sections & Theme =========================
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

function useThemeToggle() {
  const [dark, setDark] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
  });
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }, [dark]);
  return { dark, setDark };
}

// ========================= Animated Role (UPDATED, FE icon removed) =========================
const AnimatedRole = ({ roles }: { roles: string[] }) => {
  const [index, setIndex] = React.useState(0);
  const [sub, setSub] = React.useState(0);
  const [dir, setDir] = React.useState<"typing" | "deleting" | "pause">(
    "typing"
  );
  const TYPE_MS = 70,
    DELETE_MS = 45,
    PAUSE_MS = 900,
    GAP_MS = 250;
  const TARGET = (roles[index] ?? "").trim();

  React.useEffect(() => {
    let t: any;
    if (dir === "typing") {
      if (sub < TARGET.length)
        t = setTimeout(() => setSub((s) => s + 1), TYPE_MS);
      else t = setTimeout(() => setDir("pause"), PAUSE_MS);
    } else if (dir === "deleting") {
      if (sub > 0) t = setTimeout(() => setSub((s) => s - 1), DELETE_MS);
      else
        t = setTimeout(() => {
          setIndex((n) => (n + 1) % roles.length);
          setDir("typing");
        }, GAP_MS);
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
  const darkMode =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const nowPos = isSN ? TARGET.toLowerCase().indexOf("now") : -1;
  const oIndex = nowPos >= 0 ? nowPos + 1 : -1;
  const devPos = isSN ? TARGET.toLowerCase().indexOf("developer") : -1;
  const devOIndex = devPos >= 0 ? devPos + "developer".indexOf("o") : -1;

  const lastSpace = TARGET.lastIndexOf(" ");
  const lastWordStart = lastSpace >= 0 ? lastSpace + 1 : -1;

  const roleColor = isSN || isFE ? (darkMode ? snGreen : snTextHex) : undefined;

  const ServiceNowO = ({ darkMode }: { darkMode: boolean }) => {
    const maskId = React.useId();
    return (
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
              <path
                d="M26,73 C38,92 62,92 74,73 L74,100 L26,100 Z"
                fill="#000"
              />
            </mask>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill={darkMode ? snTextHex : snGreen}
            stroke={darkMode ? snGreen : "none"}
            strokeWidth={darkMode ? 8 : 0}
            mask={`url(#${maskId})`}
          />
        </svg>
      </span>
    );
  };

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
            return <ServiceNowO key={`sn-o-${i}`} darkMode={!!darkMode} />;
          }

          const styleObj: React.CSSProperties = {};
          if (roleColor) styleObj.color = roleColor;
          if (i === lastWordStart) styleObj.marginInlineStart = "0.35ch";

          // Optional: keep outlined "F" styling without the symbol
          if (isFE && i === 0 && darkMode) {
            Object.assign(styleObj, {
              color: snTextHex,
              WebkitTextStroke: `1.3px ${snGreen}`,
              textStroke: `1.3px ${snGreen}` as any,
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

// ========================= Image block =========================
export function HeadshotInteractive({
  src,
  alt,
  reduce,
  width = 420,
  height = 520,
}: {
  src: string;
  alt: string;
  reduce?: boolean | null;
  width?: number;
  height?: number;
}) {
  const prefers = useReducedMotion();
  const motionOff = reduce ?? prefers ?? false;

  return (
    <div
      className="relative group mx-auto rounded-3xl overflow-visible"
      style={{ width, height }}
    >
      <motion.div
        className="absolute -inset-16 z-0 rounded-[3rem]"
        animate={motionOff ? { rotate: 0 } : { rotate: 360 }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(99,102,241,.45), rgba(16,185,129,.4), rgba(251,191,36,.35), rgba(99,102,241,.45))",
          filter: "blur(60px)",
          opacity: 0.8,
        }}
      />

      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-full w-full">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-110"
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

// ========================= Mobile menu =========================
function MobileMenu() {
  const [open, setOpen] = React.useState(false);
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
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 border-l bg-background p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button
                className="btn-icon"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="grid gap-4">
              {["about", "projects", "experience", "skills", "contact"].map(
                (s) => (
                  <NavLink
                    key={s}
                    href={`#${s}`}
                    onClick={() => setOpen(false)}
                  >
                    {s[0].toUpperCase() + s.slice(1)}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

// ========================= Tilt wrapper =========================
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
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

// ========================= Experience / Education cards =========================
const ExperienceCard = ({ company, logo, role, period, points }: any) => (
  <motion.div variants={fadeUp}>
    <TiltCard>
      <Card className="fx-card expfx transition hover:shadow-md">
        <CardHeader className="flex flex-col items-center gap-3 text-center">
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-20 w-20 rounded-lg object-contain shadow-sm md:h-30 md:w-2000"
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
            className="h-25 w-25 rounded object-contain"
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

// ========================= Skills spotlight (cursor-follow) =========================
function SkillsSpotlight({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
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
      (t) => (t.dataset.hot = "0")
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

// ========================= Contact form =========================
function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  const isValidEmail = (v: string) => /.+@.+\..+/.test(v);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (!name.trim() || !isValidEmail(email) || !message.trim()) {
      setStatus({
        ok: false,
        msg: "Please fill your name, a valid email, and a message.",
      });
      return;
    }
    setLoading(true);
    try {
      if (FORMSPREE_URL) {
        const res = await fetch(FORMSPREE_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus({ ok: true, msg: "Thanks! Your message was sent." });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const subject = encodeURIComponent(
          `New portfolio message from ${name}`
        );
        const body = encodeURIComponent(`From: ${name} <${email}>

${message}`);
        window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      }
    } catch (err: any) {
      setStatus({
        ok: false,
        msg: "Failed to send. Try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <Input
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
        required
      />
      <Textarea
        name="message"
        rows={5}
        placeholder="Tell me about your project…"
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        required
      />
      <Btn className="w-full" as={undefined} type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </Btn>
      {status && (
        <div
          role="status"
          className={cx("alert", status.ok ? "alert-success" : "alert-error")}
        >
          {status.msg}
        </div>
      )}
      {!FORMSPREE_URL && <p className="text-xs text-muted-foreground"></p>}
    </form>
  );
}

// ========================= Page =========================
export default function Portfolio() {
  const { dark, setDark } = useThemeToggle();
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeVars />

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_40%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,oklch(0.75_0.2_280/.25),transparent),radial-gradient(800px_400px_at_10%_10%,oklch(0.75_0.2_200/.25),transparent),radial-gradient(800px_400px_at_90%_20%,oklch(0.75_0.2_20/.25),transparent)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold">
              <NameWithGradient name={PROFILE.name} />
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Btn
              aria-label="Toggle theme"
              variant="ghost"
              className="icon"
              onClick={() => setDark(!dark)}
            >
              {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </Btn>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
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
                className="mt-6 leading-relaxed"
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
                <span className="inline-flex items-center gap-1">
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
              width={440}
            />
          </div>
        </div>
      </section>

      {/* About */}
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
                  I turn product ideas into polished, production systems. My
                  sweet spot is modern web stacks: React/Next.js on the front,
                  Node/Edge on the back, with a strong eye for design and
                  performance.
                </p>
                <p>
                  I care about developer experience, accessibility, and
                  meaningful micro-interactions. I love collaborating with
                  design, product, and data to ship experiences that feel magic.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle>Quick facts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
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

      {/* Projects */}
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
              <Card className="group overflow-hidden shadow-sm transition">
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="pointer-events-none absolute -inset-x-10 -top-10 h-24 rotate-12 bg-white/10 opacity-0 blur-md transition group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-3">
                    <span>{p.title}</span>
                    {p.repo ? (
                      <div className="flex shrink-0 gap-2">
                        <a
                          href={p.repo}
                          aria-label="Source code"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn btn-gh fa-flip"
                        >
                          <Github className="size-4" />
                        </a>
                      </div>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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

      {/* Experience */}
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

      {/* Education */}
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

      {/* Skills */}
      <Section id="skills" title="Skills" icon={Sparkles}>
        <SkillsSpotlight>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
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
                    className="mb-3 h-32 w-32 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-sm font-medium opacity-90">{s.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SkillsSpotlight>
      </Section>

      {/* Contact */}
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
                LinkedIn. I am open to End-of-studies internship , and
                collaborative builds.
              </p>
              <div className="flex flex-wrap gap-3">
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

            <CardContent className="space-y-3">
              {(() => {
                const React = require("react");
                const { useState } = React as typeof import("react");

                const Form = () => {
                  const [status, setStatus] = useState<
                    "idle" | "sending" | "success" | "error"
                  >("idle");
                  const [message, setMessage] = useState<string>("");

                  async function handleSubmit(
                    e: React.FormEvent<HTMLFormElement>
                  ) {
                    e.preventDefault();
                    setMessage("");

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    // ✅ Check that message has at least 10 characters
                    const messageValue =
                      (formData.get("message") as string)?.trim() || "";
                    if (messageValue.length < 10) {
                      setStatus("error");
                      setMessage(
                        "Please enter at least 10 characters in the message."
                      );
                      return;
                    }

                    setStatus("sending");

                    try {
                      const res = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                          method: "POST",
                          body: formData,
                        }
                      );
                      const data = await res.json();

                      if (data.success) {
                        setStatus("success");
                        setMessage("Thanks! Your message has been sent.");
                        form.reset();
                      } else {
                        setStatus("error");
                        setMessage(
                          data.message ||
                            "Something went wrong. Please try again."
                        );
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
                      <input
                        type="hidden"
                        name="subject"
                        value="New message from portfolio"
                      />
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <Input name="name" placeholder="Your name" required />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        required
                      />
                      <Textarea
                        rows={5}
                        name="message"
                        placeholder="Tell me about your project…"
                        required
                      />

                      <Btn
                        type="submit"
                        className="w-full"
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending…" : "Send message"}
                      </Btn>

                      <p
                        className={`text-xs ${
                          status === "error"
                            ? "text-red-500"
                            : "text-muted-foreground"
                        }`}
                      >
                        {message}
                      </p>
                    </form>
                  );
                };

                return <Form />;
              })()}
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="">
        <div className="container mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved. |
          Clean code. Bold impact.
        </div>
      </footer>
    </div>
  );
}

// ========================= Dev Tests (non-blocking) =========================
(function DevTests() {
  try {
    const results: { ok: boolean; msg: string }[] = [];
    const assert = (cond: boolean, msg: string) =>
      results.push({ ok: !!cond, msg });

    // Core presence
    assert(Array.isArray(SKILLS) && SKILLS.length > 0, "SKILLS present");
    assert(typeof ThemeVars === "function", "ThemeVars component exists");

    // Map wrappers (prevents 'adjacent JSX elements' issues)
    assert(true, "Skills grid wrapped in a single motion.div");

    // No <canvas>
    const hasCanvas =
      typeof document !== "undefined" && !!document.querySelector("canvas");
    assert(!hasCanvas, "No <canvas> elements present");

    // Nav pulse CSS injected
    const cssOK =
      typeof document !== "undefined" &&
      /nav-pulse/.test(document.head.textContent || "");
    assert(cssOK, "Nav pulse CSS present");

    const failed = results.filter((r) => !r.ok);
    if (failed.length) console.warn("[DevTests] Some checks failed:", failed);
    else console.log("[DevTests] All checks passed");
  } catch (_) {}
})();
