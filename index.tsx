import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  BarChart3,
  Banknote,
  BookOpenCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Factory,
  FileCheck2,
  FileText,
  IdCard,
  Lock,
  MessageCircle,
  Phone,
  Receipt,
  Sparkles,
  Users,
  Wifi,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import csc_tree from "@/assets/logos/csc-tree.png.asset.json";
import gst from "@/assets/logos/gst.png.asset.json";
import income_tax from "@/assets/logos/income-tax.png.asset.json";
import profession_tax from "@/assets/logos/profession-tax.png.asset.json";
import fssai from "@/assets/logos/fssai.png.asset.json";
import kmc from "@/assets/logos/kmc.png.asset.json";
import broadcast_seva from "@/assets/logos/broadcast-seva.png.asset.json";
import utiitsl_pan from "@/assets/logos/utiitsl-pan.png.asset.json";
import aadhaar from "@/assets/logos/aadhaar.png.asset.json";
import far from "@/assets/logos/far.png.asset.json";
import cma from "@/assets/logos/cma.png.asset.json";
import tax_audit from "@/assets/logos/tax-audit.png.asset.json";
import esic from "@/assets/logos/esic.png.asset.json";
import epfo from "@/assets/logos/epfo.png.asset.json";
import udyam from "@/assets/logos/udyam.png.asset.json";
import ayushman from "@/assets/logos/ayushman.png.asset.json";
import jeevan_pramaan from "@/assets/logos/jeevan-pramaan.png.asset.json";
import nps from "@/assets/logos/nps.png.asset.json";
import education from "@/assets/logos/education.png.asset.json";
import passport from "@/assets/logos/passport.png.asset.json";
import fee_payment from "@/assets/logos/fee-payment.png.asset.json";
import travel from "@/assets/logos/travel.png.asset.json";
import digipay from "@/assets/logos/digipay.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "DigiPariseva — Accounting, GST, Tax & Compliance Under One Roof" },
      {
        name: "description",
        content:
          "Accounting, GST returns, income tax filing, CMA bank loan reports, Udyam, PAN and EPF/ESI compliance — handled by one team.",
      },
      { property: "og:title", content: "DigiPariseva — Accounting, GST, Tax & Compliance" },
      {
        property: "og:description",
        content: "Complete financial, taxation & compliance solutions — all under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/919330856804?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";

const tones = [
  "bg-primary text-primary-foreground",
  "bg-teal text-primary-foreground",
  "bg-sun text-ink",
  "bg-magenta text-primary-foreground",
  "bg-sky text-primary-foreground",
  "bg-lime text-ink",
];

const services = [
  { icon: BookOpenCheck, title: "Financial Accounting & Reporting", logo: far.url, desc: "Clean, reconciled books and clear financial statements you can rely on for decisions." },
  { icon: Banknote, title: "CMA Data & Bank Loan Project Reports", logo: cma.url, desc: "Lender-ready CMA data, projections and project reports to support your finance application." },
  { icon: ClipboardCheck, title: "Tax Audit & Audit Assistance", logo: tax_audit.url, desc: "Organised books, schedules and reconciliations prepared for your appointed auditor." },
  { icon: Receipt, title: "GST Registration, Returns & Compliance", logo: gst.url, desc: "From registration to GSTR-1, 3B and ITC reconciliation — handled on schedule." },
  { icon: FileText, title: "Income Tax Return Filing & Tax Planning", logo: income_tax.url, desc: "Accurate returns for salaried, business and professional income, with practical planning." },
  { icon: Factory, title: "Udyam / MSME Registration", logo: udyam.url, desc: "Guided Udyam registration and updates so your enterprise details stay accurate." },
  { icon: IdCard, title: "PAN & Aadhaar-Related Assistance", logo: utiitsl_pan.url, desc: "Help with PAN applications, corrections and PAN–Aadhaar linking on official portals." },
  { icon: Wifi, title: "Broadcast Seva Registration & Assistance", logo: broadcast_seva.url, desc: "Registration, correction and status follow-up support. Scope confirmed at consultation." },
  { icon: Users, title: "EPF, ESI & Professional Tax Compliance", logo: epfo.url, desc: "Employer registrations, monthly contributions and state-specific payroll compliance." },
  { icon: Building2, title: "Business Registration & Documentation", desc: "Practical support to set up, register and document your business correctly." },
  { icon: BarChart3, title: "Financial Forecasting & Business Advisory", desc: "Budgets, forecasts and business-focused insights to plan your next move." },
  { icon: FileCheck2, title: "Digital Documentation & Portal Assistance", logo: csc_tree.url, desc: "Navigate government portals and digital paperwork without the confusion." },
];

const portals = [gst, income_tax, profession_tax, fssai, kmc, esic, epfo, aadhaar, utiitsl_pan, broadcast_seva, udyam];
const csc = [
  { img: ayushman, label: "Ayushman" },
  { img: jeevan_pramaan, label: "Jeevan Pramaan" },
  { img: nps, label: "NPS" },
  { img: education, label: "Education" },
  { img: passport, label: "Passport" },
  { img: fee_payment, label: "Fee Payment" },
  { img: travel, label: "Travel" },
  { img: digipay, label: "Digipay" },
];

const commitments = [
  "One-stop service coordination",
  "Transparent service scope and pricing",
  "Digital-first communication",
  "Organised documentation support",
  "Practical, business-focused insights",
  "Deadline-conscious compliance",
  "Clear status updates",
  "Personalised consultation",
  "Confidential handling of information",
];

const steps = [
  { title: "Select Your Service", desc: "Choose the accounting, taxation, registration or compliance service you need." },
  { title: "Submit Your Enquiry", desc: "Complete a short requirement form with basic contact information." },
  { title: "Consultation & Checklist", desc: "Understand requirements, applicable fees, timelines and next steps." },
  { title: "Track Your Service", desc: "Receive progress updates and service-related communication." },
];

const trust = [
  { icon: Lock, title: "Confidential data", desc: "Your documents are shared only for your engagement." },
  { icon: Briefcase, title: "Clear engagement terms", desc: "Scope, fees and timelines agreed upfront." },
  { icon: Eye, title: "Transparent process", desc: "Know what's happening at every step." },
  { icon: Phone, title: "Real contact details", desc: "Reach us by phone, email or WhatsApp." },
];

const faqs = [
  { q: "What documents are required for GST registration?", a: "Typically PAN, Aadhaar, proof of business address, bank details and photographs. We share a complete checklist for your business type at consultation." },
  { q: "Can you assist with monthly, quarterly, and annual GST compliance?", a: "Yes — GSTR-1, GSTR-3B, ITC reconciliation and annual returns, handled on a schedule agreed with you." },
  { q: "What information is needed for income tax return filing?", a: "PAN, Aadhaar, Form 16 or income details, bank statements and investment proofs. We confirm the exact list for your income type." },
  { q: "What is CMA data for a bank loan?", a: "Credit Monitoring Arrangement data is a set of past and projected financial statements banks use to assess working capital and term loan requests." },
  { q: "Can you prepare projected financial statements and cash flow forecasts?", a: "Yes, we prepare projections and cash flow forecasts based on your business plan and historical numbers." },
  { q: "What is Udyam registration?", a: "Udyam is the government registration for micro, small and medium enterprises, which can make you eligible for MSME schemes." },
  { q: "Can you assist with PAN-related corrections?", a: "Yes, we help with new PAN applications, corrections and PAN–Aadhaar linking on official portals." },
  { q: "How do EPF, ESI, and Professional Tax compliances work?", a: "Employers register, then deposit monthly contributions and file returns. We help with registrations and the recurring filings." },
  { q: "How can I request a consultation?", a: "Use the Request a Consultation button or message us on WhatsApp — we'll respond with scope, checklist and next steps." },
  { q: "What are your service fees and estimated turnaround times?", a: "Fees and timelines depend on the service and scope, and are agreed upfront before work begins." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-sunset font-display text-lg font-extrabold text-primary-foreground shadow-glow">
              D
            </span>
            <span className="font-display text-xl font-extrabold">
              Digi<span className="text-primary">Pariseva</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#how" className="hover:text-primary">How it works</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <Button asChild variant="hero" size="sm" className="px-5">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative bg-gradient-hero text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Sparkles className="size-3.5 text-sun" /> Accounting · Taxation · Compliance
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Complete financial, tax & compliance solutions —{" "}
              <span className="text-gradient italic">all under one roof.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              From accounting and financial reporting to tax filing, bank loan documentation,
              business registrations and statutory compliance — manage your finances with clarity
              and confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#contact">
                  Get Started Today <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
              {["Professional Service Support", "Digital-First Documentation", "Timely Compliance Assistance"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-lime" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 size-28 rounded-full bg-sun blur-2xl opacity-70" />
            <div className="absolute -bottom-8 -right-4 size-36 rounded-full bg-magenta blur-3xl opacity-60" />
            <div className="relative rotate-1 overflow-hidden rounded-3xl border-4 border-primary-foreground/90 shadow-pop">
              <img
                src={heroImg}
                alt="Bright accountant's desk with financial dashboard, GST invoices and calculator"
                width={1280}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 animate-float rounded-2xl border-2 border-ink bg-sun px-5 py-3 font-display font-bold text-ink shadow-brutal">
              GST · ITR · CMA · Udyam · EPF/ESI
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mx-auto -mb-16 max-w-5xl px-5">
          <div className="grid grid-cols-3 overflow-hidden rounded-3xl border-2 border-ink bg-card text-card-foreground shadow-brutal-lg">
            {[
              { n: "12", l: "Focused service areas", c: "text-primary" },
              { n: "9", l: "Business segments served", c: "text-teal" },
              { n: "100%", l: "Digital-first communication", c: "text-magenta" },
            ].map((s, i) => (
              <div key={s.l} className={`p-6 text-center ${i > 0 ? "border-l-2 border-ink" : ""}`}>
                <div className={`font-display text-4xl font-extrabold sm:text-5xl ${s.c}`}>{s.n}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="mt-28 overflow-hidden border-y-2 border-ink bg-sun py-4">
        <div className="flex w-max animate-marquee gap-10 font-display text-xl font-bold text-ink">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {s.title} <Sparkles className="size-5 text-primary" />
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead eyebrow="Our Services" title="Everything your finances and compliance need" sub="Twelve focused service areas, coordinated by one team." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-3xl border-2 border-ink bg-card p-6 shadow-brutal transition-all hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              {"logo" in s && s.logo ? (
                <div className="grid h-24 place-items-center overflow-hidden rounded-2xl border-2 border-ink bg-card p-2">
                  <img src={s.logo} alt={s.title} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
              ) : (
                <div className={`grid h-24 place-items-center rounded-2xl border-2 border-ink ${tones[i % tones.length]}`}>
                  <s.icon className="size-10" />
                </div>
              )}
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary"
              >
                Request this service
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Portals */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <SectionHead eyebrow="Portals We Work With" title="Official portals, handled for you" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {portals.map((p, i) => (
            <div key={i} className="grid h-24 place-items-center rounded-2xl border-2 border-ink bg-card p-3 shadow-brutal">
              <img src={p.url} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* CSC services */}
      <section className="bg-gradient-cta py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border-4 border-ink bg-card shadow-brutal-lg">
            <img src={csc_tree.url} alt="Common Services Centre digital services" loading="lazy" className="w-full" />
          </div>
          <div>
            <span className="inline-block rounded-full border-2 border-ink bg-sun px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">CSC Digital Services</span>
            <h2 className="mt-5 text-4xl font-extrabold text-primary-foreground sm:text-5xl">Everyday citizen services, too</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {csc.map((c) => (
                <div key={c.label} className="flex flex-col items-center rounded-2xl border-2 border-ink bg-card p-3 text-center shadow-brutal">
                  <img src={c.img.url} alt={c.label} loading="lazy" className="h-16 w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="mt-0 bg-ink py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead dark eyebrow="Why Choose Us" title="Our service commitments" sub="What you can expect from working with us — every engagement." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c, i) => (
              <div key={c} className="flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full ${tones[i % tones.length]}`}>
                  <CheckCircle2 className="size-5" />
                </span>
                <span className="font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead eyebrow="How It Works" title="Four simple steps" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border-2 border-ink bg-card p-6 shadow-brutal">
              <div className={`inline-grid size-14 place-items-center rounded-2xl border-2 border-ink font-display text-2xl font-extrabold ${tones[i]}`}>
                0{i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-muted-foreground">
          Government approvals, tax refunds, loan sanctions and regulatory decisions rest with the
          respective authorities and are not guaranteed.
        </p>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="rounded-[2.5rem] bg-gradient-sunset p-8 text-primary-foreground shadow-pop sm:p-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sun">Trust & Professionalism</span>
          <h2 className="mt-3 max-w-xl text-4xl font-extrabold sm:text-5xl">Built on confidentiality and clarity</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="rounded-2xl bg-primary-foreground/15 p-6 backdrop-blur">
                <t.icon className="size-8 text-sun" />
                <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-5 pb-24">
        <SectionHead eyebrow="FAQ" title="Common questions" />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`f${i}`}
              className="rounded-2xl border-2 border-ink bg-card px-6 shadow-brutal last:border-b-2"
            >
              <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border-2 border-ink bg-gradient-cta p-10 text-center text-primary-foreground shadow-brutal-lg sm:p-16">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-sun opacity-50 blur-3xl" />
          <h2 className="relative mx-auto max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Ready to simplify your accounts and compliance?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Tell us what you need. We'll respond with a clear scope, document checklist and next
            steps.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="pop" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                Request a Consultation <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp Us
              </a>
            </Button>
          </div>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4 font-semibold">
            <a href="tel:+919330856804" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2 backdrop-blur hover:bg-primary-foreground/25"><Phone className="size-4" /> 93308 56804</a>
            <a href="mailto:cb.kolkata@yahoo.com" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2 backdrop-blur hover:bg-primary-foreground/25"><Mail className="size-4" /> cb.kolkata@yahoo.com</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2 backdrop-blur hover:bg-primary-foreground/25"><MessageCircle className="size-4" /> WhatsApp 93308 56804</a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-ink py-10 text-primary-foreground/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row">
          <span className="font-display text-lg font-extrabold text-primary-foreground">
            Digi<span className="text-primary">Pariseva</span>
          </span>
          <span className="flex flex-wrap justify-center gap-x-4"><a href="tel:+919330856804" className="hover:text-primary-foreground">Tel: 93308 56804</a><a href="mailto:cb.kolkata@yahoo.com" className="hover:text-primary-foreground">cb.kolkata@yahoo.com</a></span>
          <span>© {new Date().getFullYear()} DigiPariseva. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  dark,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full border-2 border-ink bg-sun px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">{title}</h2>
      {sub && (
        <p className={`mt-4 text-lg ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
