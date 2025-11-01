import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Linkedin,
  Github,
  Globe,
  Briefcase,
  Code2,
  Server,
  ShieldCheck,
  Database,
  TerminalSquare,
  ArrowRight,
} from "lucide-react";

/* =========================================
   Helpers
   ========================================= */
const sanitizeTel = (s) => s.replace(/[^\d+]/g, ""); // keep + and digits only

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex rounded-full border px-2.5 py-0.5 text-xs md:text-[13px] leading-6">
    {children}
  </span>
);

/* =========================================
   Content
   ========================================= */
const contact = {
  name: "Essam Shadadi",
  title: "IT Infrastructure & Systems | Humanitarian Tech",
  location: "Damascus, Syria",
  email: "me@essamshadadi.com",
  phoneNumbers: ["+963 932 792 081 | +961 79 149 061"],
  linkedin: "https://www.linkedin.com/in/essam.shadadi",
  github: "https://github.com/",
  cvUrl: "/Essam_Shadadi_CV.pdf",
};

const skills = [
  { icon: <Server className="w-4 h-4" aria-hidden="true" />, label: "Windows Server" },
  { icon: <Globe className="w-4 h-4" aria-hidden="true" />, label: "Azure & M365" },
  { icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" />, label: "Network Security (MikroTik)" },
  { icon: <Database className="w-4 h-4" aria-hidden="true" />, label: "MySQL" },
  { icon: <Code2 className="w-4 h-4" aria-hidden="true" />, label: "React / Node.js" },
  { icon: <TerminalSquare className="w-4 h-4" aria-hidden="true" />, label: "Automation & Scripting" },
];

const experience = [
  {
    org: "Basmeh & Zeitooneh",
    role: "Information Technology Officer",
    period: "Nov 2023 – Oct 2025 | Beirut, Lebanon",
    bullets: [
      "Led and mentored a team of two IT Support Specialists and one Software Developer, while actively providing hands-on technical support and guidance across Lebanon offices.",
      "Oversaw IT asset management through efficient processes for inventory lifecycle management, storage, distribution, and tracking, optimizing resource utilization.",
      "Directed network management and security operations, including configuration, monitoring, troubleshooting, and infrastructure expansion, ensuring reliability and scalability.",
      "Negotiated and secured a $2,000 annual Microsoft Azure grant, 300 free Microsoft 365 licenses, and a 50% discount on Microsoft products, enhancing cloud cost efficiency.",
      "Spearheaded the development and deployment of HR, asset management, procurement, and logistics systems to drive automation and operational efficiency.",
      "Provided strategic IT guidance, direct end-user support, and training to ensure seamless adoption of new technologies.",
    ],
    stack: ["MikroTik", "Microsoft Azure", "Microsoft 365"],
  },
  {
    org: "Codi.tech",
    role: "Full Stack Web Development Trainer",
    period: "Jan 2022 – Dec 2022 | Zahle, Lebanon",
    bullets: [
      "Delivered full-stack web development training to underprivileged youth, empowering them with practical and employable digital skills.",
      "Managed training projects and ensured timely completion of program objectives.",
      "Designed and prepared instructional materials and exercises tailored to student learning needs.",
      "Monitored trainee progress, provided technical support, and offered individual mentorship.",
      "Participated in the recruitment of new cohorts and facilitated community engagement through events and workshops.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDB",
      "MySQL",
      "PHP",
      "Express.js",
      "Node.js",
      "Agile",
      "Moodle",
      "Trello",
    ],
  },
  {
    org: "SAWA for Development & Aid",
    role: "Digital Literacy Trainer",
    period: "Nov 2018 – Nov 2022 | Zahle, Lebanon",
    bullets: [
      "Delivered digital literacy and ICDL training to out-of-school youth (ages 14–20) and staff, improving computer proficiency and employability.",
      "Conducted Microsoft Office and Windows 10 training for organizational employees.",
      "Developed tailored curricula and work plans to ensure structured learning outcomes.",
      "Provided front-line IT support and troubleshooting to staff via in-person and remote assistance.",
      "Offered on-call emergency IT support to maintain continuous operations.",
    ],
    stack: ["Windows 10", "Microsoft Office"],
  },
  {
    org: "RoboGeex Academy",
    role: "Software Developer",
    period: "May 2021 – Jun 2021 | Zahle, Lebanon",
    bullets: [
      "Analyzed client requirements and designed database architecture and APIs to support front-end systems.",
      "Developed an admin dashboard with data management (Read, Update, Delete) and Excel upload functionalities.",
      "Led a team of three developers to build mobile software solutions.",
    ],
    stack: ["Merise", "MySQL", "PHP", "AngularJS", "Ionic", "Apache Cordova", "HTML", "SCSS"],
  },
  {
    org: "Jaber Consultancy",
    role: "Backend Developer & Database Architect",
    period: "Sep 2019 – Mar 2020 | Zahle, Lebanon",
    bullets: [
      "Designed and developed a web-based mobile application to connect customers, freelance technicians, and companies.",
      "Created database structures and back-end APIs ensuring secure and efficient data handling.",
      "Developed user interface wireframes and managed UX alignment based on client feedback.",
      "Supervised a team of three developers.",
    ],
    stack: ["PHP", "MySQL", "Laravel", "API Design", "UX Wireframing"],
  },
];

const projects = [
  {
    name: "Operations Suite",
    desc: "Lightweight internal tools for HR, asset, procurement & logistics to streamline approvals, tracking and reporting.",
    impact: "Reduced manual processing and improved accountability across departments.",
    stack: ["Node.js", "React", "MySQL", "M365"],
    link: "#",
  },
  {
    name: "Training Analytics Dashboard",
    desc: "A dashboard consolidating training attendance, outcomes and follow-ups to support decision-making.",
    impact: "Improved visibility of KPIs and time-to-report for management.",
    stack: ["Power BI", "Excel", "M365"],
    link: "#",
  },
  {
    name: "Network Hardening & DR",
    desc: "Segmented network, enforced MFA & backups, and documented disaster recovery runbooks.",
    impact: "Enhanced security posture and reduced downtime risk.",
    stack: ["MikroTik", "Azure", "M365"],
    link: "#",
  },
];

const certifications = [
  "Python for Everybody – University of Michigan (2021)",
  "Introduction to Data Science – IBM (2021)",
  "Microsoft Azure Cloud Services (2024)",
  "Microsoft Program Management Professional (In Progress)",
];

/* =========================================
   Components
   ========================================= */
function ExperienceCard({ job, idx }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className="rounded-2xl border bg-white p-5 hover:shadow-sm overflow-hidden"
    >
      {/* Grid header: keeps title wide on md+, stacks on mobile */}
      <div className="flex flex-col gap-3 md:grid md:grid-cols-[2fr,1fr] md:gap-4">
        <div className="min-w-0">
          <h3 className="font-medium text-lg leading-snug">{job.role}</h3>
          <p className="text-neutral-600">{job.org}</p>
          <p className="text-neutral-500 text-sm">{job.period}</p>
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end md:place-self-start md:max-w-[380px]">
          {job.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>

      <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-neutral-700">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}

/* =========================================
   App
   ========================================= */
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {contact.name}
          </a>

          {/* Simple mobile menu: shows anchors horizontally on md+, stacked dropdown on sm */}
          <details className="md:hidden">
            <summary className="cursor-pointer text-sm px-2 py-1 rounded-lg border">Menu</summary>
            <div className="absolute left-0 right-0 mt-2 bg-white/95 backdrop-blur border-b border-t py-3 px-6">
              <div className="flex flex-col gap-3 text-sm">
                <a href="#experience" className="hover:opacity-70">Experience</a>
                <a href="#projects" className="hover:opacity-70">Projects</a>
                <a href="#skills" className="hover:opacity-70">Skills</a>
                <a href="#certs" className="hover:opacity-70">Certifications</a>
                <a href="#contact" className="hover:opacity-70">Contact</a>
              </div>
            </div>
          </details>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#certs" className="hover:opacity-70">Certifications</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.cvUrl}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-neutral-100"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" aria-hidden="true" /> CV
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              IT Infrastructure & Systems —{" "}
              <span className="text-neutral-600">bridging tech and impact</span>
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">
              Results-driven IT professional with 6+ years across NGOs and education.
              Cloud, networks, and secure systems that empower teams to deliver.
              Humanitarian-ready, enterprise-reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800"
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" /> View Projects
              </a>
              <a
                href={contact.cvUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-neutral-100"
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-700">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" /> {contact.location}
              </span>
              <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${contact.email}`}>
                <Mail className="w-4 h-4" aria-hidden="true" /> {contact.email}
              </a>
              {contact.phoneNumbers.map((num) => (
                <a
                  key={num}
                  className="inline-flex items-center gap-2 hover:underline"
                  href={`tel:${sanitizeTel(num)}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> {num}
                </a>
              ))}
              <a
                className="inline-flex items-center gap-2 hover:underline"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((job, idx) => (
            <ExperienceCard key={`${job.org}-${job.role}`} job={job} idx={idx} />
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Featured Projects">
        {<div className="grid md:grid-cols-3 gap-6"> 
          Soon
        </div>
        
        /* <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border bg-white p-5 hover:shadow-sm group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.name}</h3>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <p className="mt-2 text-xs text-neutral-500">Impact: {p.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.a>
          ))}
        </div> */}
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="rounded-2xl border bg-white p-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border">
                  {s.icon}
                </span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certs" title="Certifications">
        <div className="rounded-2xl border bg-white p-6">
          <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border bg-white p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${contact.email}`}>
              <Mail className="w-4 h-4" aria-hidden="true" /> {contact.email}
            </a>
            {contact.phoneNumbers.map((num) => (
              <a
                key={num}
                className="inline-flex items-center gap-2 hover:underline"
                href={`tel:${sanitizeTel(num)}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> {num}
              </a>
            ))}
            <a className="inline-flex items-center gap-2 hover:underline" href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
            </a>
            {contact.github && (
              <a className="inline-flex items-center gap-2 hover:underline" href={contact.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} {contact.name}. Built with React, Tailwind & Azure Static Web Apps.
        </div>
      </footer>
    </div>
  );
}
