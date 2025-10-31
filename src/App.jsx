import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Linkedin, Github, Globe, Briefcase, Code2, Server, ShieldCheck, Cpu, Database, TerminalSquare, FileText, ArrowRight } from "lucide-react";

// ===== Tiny helper components =====
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
  <span className="inline-block rounded-full border px-3 py-1 text-xs md:text-sm leading-6 mr-2 mb-2">
    {children}
  </span>
);

// ===== Main App =====
export default function App() {
  const contact = {
    name: "Essam Shadadi",
    title: "IT Infrastructure & Systems | Humanitarian Tech",
    location: "Damascus, Syria",
    email: "essam.shadadi@gmail.com",
    phone: "+963 932 792 081",
    linkedin: "https://www.linkedin.com/in/essam.shadadi",
    github: "https://github.com/",
    cvUrl: "/Essam_Shadadi_CV.pdf", // replace with your hosted file path
  };

  const skills = [
    { icon: <Server className="w-4 h-4" />, label: "Windows Server" },
    { icon: <Globe className="w-4 h-4" />, label: "Azure & M365" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Network Security (MikroTik)" },
    { icon: <Database className="w-4 h-4" />, label: "MySQL" },
    { icon: <Code2 className="w-4 h-4" />, label: "React / Node.js" },
    { icon: <TerminalSquare className="w-4 h-4" />, label: "Automation & Scripting" },
  ];

  const experience = [
    {
      org: "Basmeh & Zeitooneh",
      role: "Information Technology Officer",
      period: "Nov 2023 – Oct 2025 | Beirut, Lebanon",
      bullets: [
        "Led a small IT team and provided direct technical support across offices.",
        "Managed assets and network infrastructure to ensure security & scalability.",
        "Secured Azure grant & M365 licenses; improved cloud cost efficiency.",
        "Designed systems for HR, logistics & procurement to automate workflows.",
      ],
      stack: ["MikroTik", "Azure", "Microsoft 365"],
    },
    {
      org: "Codi.tech",
      role: "Full Stack Web Development Trainer",
      period: "Jan 2022 – Dec 2022 | Zahle, Lebanon",
      bullets: [
        "Delivered full‑stack training for underprivileged youth (React/Node).",
        "Developed tailored curricula and mentored learners to job readiness.",
      ],
      stack: ["React", "Node.js", "MongoDB", "MySQL", "PHP"],
    },
    {
      org: "SAWA for Development & Aid",
      role: "Digital Literacy Trainer",
      period: "Nov 2018 – Nov 2021 | Zahle, Lebanon",
      bullets: [
        "Delivered ICDL & Microsoft Office training to staff and youth.",
        "Provided on‑site/remote IT support ensuring operational continuity.",
      ],
      stack: ["Windows 10", "Microsoft Office"],
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
      desc: "A dashboard consolidating training attendance, outcomes and follow‑ups to support decision‑making.",
      impact: "Improved visibility of KPIs and time‑to‑report for management.",
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

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{contact.name}</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#certs" className="hover:opacity-70">Certifications</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={contact.cvUrl} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-neutral-100">
              <Download className="w-4 h-4" /> CV
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
              IT Infrastructure & Systems — <span className="text-neutral-600">bridging tech and impact</span>
            </h1>
            <p className="mt-4 text-neutral-600 max-w-2xl">
              Results‑driven IT professional with 6+ years across NGOs and education. Cloud, networks, and secure systems
              that empower teams to deliver. Humanitarian‑ready, enterprise‑reliable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800">
                <Briefcase className="w-4 h-4" /> View Projects
              </a>
              <a href={contact.cvUrl} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-neutral-100">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-700">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {contact.location}</span>
              <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${contact.email}`}><Mail className="w-4 h-4" /> {contact.email}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${contact.phone.replace(/\s/g, '')}`}><Phone className="w-4 h-4" /> {contact.phone}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((job, idx) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-2xl border bg-white p-5 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-lg">{job.role}</h3>
                  <p className="text-neutral-600">{job.org}</p>
                  <p className="text-neutral-500 text-sm">{job.period}</p>
                </div>
                <span className="shrink-0 rounded-full border px-3 py-1 text-xs">{job.stack.join(" · ")}</span>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">
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
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <p className="mt-2 text-sm text-neutral-700">{p.desc}</p>
              <p className="mt-2 text-xs text-neutral-500">Impact: {p.impact}</p>
              <div className="mt-3 flex flex-wrap">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="rounded-2xl border bg-white p-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border">{s.icon}</span>
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
              <Mail className="w-4 h-4" /> {contact.email}
            </a>
            <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Phone className="w-4 h-4" /> {contact.phone}
            </a>
            <a className="inline-flex items-center gap-2 hover:underline" href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            {contact.github && (
              <a className="inline-flex items-center gap-2 hover:underline" href={contact.github} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4" /> GitHub
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
