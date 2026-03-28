import {
  ArrowRight,
  Award,
  ChevronRight,
  ExternalLink,
  HeadphonesIcon,
  Image,
  Instagram,
  Layout,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Pen,
  Star,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ---------- Hooks ----------
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const children = el.querySelectorAll(".fade-in");
    for (const child of Array.from(children)) {
      observer.observe(child);
    }
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ---------- SVG Abstract Loop ----------
function AbstractLoopSVG() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[520px] animate-float"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C7A14B" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F0D080" stopOpacity="1" />
          <stop offset="100%" stopColor="#C7A14B" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1B05A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C7A14B" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M100 250 C100 140 180 70 250 70 C320 70 420 120 420 200 C420 310 350 380 250 420 C160 455 80 390 80 300 C80 210 140 160 200 170"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <path
        d="M200 250 C200 200 230 170 260 185 C300 205 310 250 290 290 C270 330 220 330 200 300 C185 275 195 255 215 250"
        stroke="url(#goldGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <path
        d="M140 150 C170 100 240 90 290 110 C350 135 380 190 370 240"
        stroke="url(#goldGrad2)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <path
        d="M130 340 C110 380 130 430 180 440 C240 455 310 420 350 370"
        stroke="url(#goldGrad2)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <circle
        cx="420"
        cy="200"
        r="4"
        fill="#C7A14B"
        opacity="0.8"
        filter="url(#glow)"
      />
      <circle cx="80" cy="300" r="3" fill="#D1B05A" opacity="0.6" />
      <circle
        cx="250"
        cy="70"
        r="5"
        fill="#C7A14B"
        opacity="0.7"
        filter="url(#glow)"
      />
      <circle cx="250" cy="420" r="3" fill="#D1B05A" opacity="0.5" />
      <line
        x1="430"
        y1="140"
        x2="430"
        y2="156"
        stroke="#C7A14B"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="422"
        y1="148"
        x2="438"
        y2="148"
        stroke="#C7A14B"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="80"
        y1="170"
        x2="80"
        y2="182"
        stroke="#C7A14B"
        strokeWidth="1"
        opacity="0.4"
      />
      <line
        x1="74"
        y1="176"
        x2="86"
        y2="176"
        stroke="#C7A14B"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

// ---------- Nav ----------
function MobileNavLink({
  href,
  label,
  onClick,
}: { href: string; label: string; onClick: () => void }) {
  return (
    <a
      href={href}
      className="text-sm font-medium py-2"
      style={{ color: "#A7AFBA" }}
      onClick={onClick}
      data-ocid={`nav.mobile.${label.toLowerCase()}.link`}
    >
      {label}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(11,15,20,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid #2A3240" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wider"
          style={{ color: "#C7A14B" }}
          data-ocid="nav.link"
        >
          AB_M
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: link.label === "Work" ? "#C7A14B" : "#A7AFBA" }}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:brightness-110"
            style={{ background: "#C7A14B", color: "#0B0F14" }}
            data-ocid="nav.hire_button"
          >
            Hire Me
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#C7A14B" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.menu_toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4"
          style={{
            background: "rgba(11,15,20,0.97)",
            borderBottom: "1px solid #2A3240",
          }}
        >
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={closeMenu}
            />
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg text-center"
            style={{ background: "#C7A14B", color: "#0B0F14" }}
            data-ocid="nav.mobile.hire_button"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

// ---------- Hero ----------
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(199,161,75,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(199,161,75,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "1.5s",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <p className="section-label mb-4">Freelance Graphic Designer</p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6"
            style={{ color: "#F2F5F8", lineHeight: 1.05 }}
          >
            Creative
            <br />
            <span style={{ color: "#C7A14B" }}>Graphic</span>
            <br />
            Designer
          </h1>
          <p
            className="text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-md"
            style={{ color: "#C7A14B" }}
          >
            Crafting logos, brands &amp; digital experiences that leave a
            lasting impression
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110"
              style={{ background: "#C7A14B", color: "#0B0F14" }}
              data-ocid="hero.hire_button"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="px-8 py-3.5 rounded-lg font-semibold text-sm border transition-all duration-200"
              style={{ borderColor: "#2A3240", color: "#F2F5F8" }}
              data-ocid="hero.portfolio_button"
            >
              View Portfolio
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            {[
              { num: "50+", label: "Projects" },
              { num: "30+", label: "Happy Clients" },
              { num: "3+", label: "Years Exp." },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#C7A14B" }}
                >
                  {s.num}
                </div>
                <div className="text-xs" style={{ color: "#A7AFBA" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <AbstractLoopSVG />
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function AboutSection() {
  const ref = useFadeIn();
  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in flex justify-center">
            <div
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden"
              style={{ border: "1px solid #2A3240" }}
            >
              <img
                src="/assets/uploads/whisk_414e3d410625e91aa824aeaf4c3ed1d4dr-019d2a0b-b80b-7401-9060-ad7959509ac5-1.png"
                alt="AB_M — Freelance Graphic Designer"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-0 left-0 w-12 h-12"
                style={{
                  background:
                    "linear-gradient(135deg, #C7A14B 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
          <div>
            <p className="fade-in section-label mb-3">About Me</p>
            <h2
              className="fade-in stagger-1 text-4xl md:text-5xl font-bold uppercase mb-6"
              style={{ color: "#F2F5F8" }}
            >
              Hi, I&apos;m <span style={{ color: "#C7A14B" }}>AB_M</span>
            </h2>
            <p
              className="fade-in stagger-2 text-base leading-relaxed mb-6"
              style={{ color: "#A7AFBA" }}
            >
              A passionate freelance graphic designer with a love for creating
              stunning visuals. I specialize in brand identity, logo design, and
              digital graphics that tell your story and attract premium clients.
            </p>
            <p
              className="fade-in stagger-3 text-base leading-relaxed mb-8"
              style={{ color: "#A7AFBA" }}
            >
              Every project I take on is treated with meticulous attention to
              detail and a deep understanding of your brand vision — from
              concept to final delivery.
            </p>
            <div className="fade-in stagger-4 flex gap-8">
              {[
                { num: "50+", label: "Projects Done" },
                { num: "30+", label: "Happy Clients" },
                { num: "3+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "#C7A14B" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "#A7AFBA" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
const services = [
  {
    icon: Pen,
    title: "Logo Design",
    desc: "Memorable, versatile logo marks and wordmarks that define your brand identity and stand the test of time.",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    desc: "High-converting landing page designs crafted to capture attention, build trust, and drive action.",
  },
  {
    icon: Image,
    title: "Graphic Design",
    desc: "Social media graphics, marketing materials, and visual content that communicate your message powerfully.",
  },
  {
    icon: Youtube,
    title: "YouTube Thumbnail & Channel",
    desc: "Eye-catching thumbnails and cohesive channel branding that grow your YouTube presence and click-through rates.",
  },
];

function ServicesSection() {
  const ref = useFadeIn();
  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="fade-in section-label mb-3">What I Offer</p>
          <h2
            className="fade-in stagger-1 text-4xl md:text-5xl font-bold uppercase"
            style={{ color: "#F2F5F8" }}
          >
            Our <span style={{ color: "#C7A14B" }}>Services</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`fade-in stagger-${i + 1} card-hover p-6 rounded-xl`}
              style={{ background: "#141A24", border: "1px solid #2A3240" }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{
                  background: "rgba(199,161,75,0.1)",
                  border: "1px solid rgba(199,161,75,0.3)",
                }}
              >
                <svc.icon size={22} style={{ color: "#C7A14B" }} />
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "#F2F5F8" }}
              >
                {svc.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A7AFBA" }}
              >
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Portfolio ----------
const portfolioItems = [
  {
    title: "Design That Speaks",
    category: "Graphic Design",
    image:
      "/assets/uploads/unnamed_5-019d3311-d11f-71ad-b90d-bfc2e8d12503-1.jpg",
  },
  {
    title: "Build Your Brand Identity",
    category: "Graphic Design",
    image:
      "/assets/uploads/img_20260320_061619-019d3311-eb5b-71dd-97cd-8c022aa91146-2.jpg",
  },
  {
    title: "Creative Design That Stands Out",
    category: "Graphic Design",
    image:
      "/assets/uploads/img_20260320_061547-019d3311-ec8b-75d6-b653-a7371a252564-3.jpg",
  },
  {
    title: "Pemela Learning Centre",
    category: "Logo Design",
    image:
      "/assets/uploads/ideogram-v3.0_luxury_3d_education_logo_for_pemela_learning_centre_elegant_open_book_with_glowi-0-019d3312-45c8-74b8-a6f7-1cb0088b86bb-4.jpg",
  },
  {
    title: "Zina Logistics Ltd.",
    category: "Logo Design",
    image:
      "/assets/uploads/ideogram-v3.0_high-end_3d_logistics_logo_for_zina_logistics_ltd._futuristic_truck_with_motion_-0-019d3312-49e4-7509-a3d0-6679413b157d-5.jpg",
  },
  {
    title: "Firm Foundation Academy",
    category: "Logo Design",
    image:
      "/assets/uploads/ideogram-v3.0_luxury_3d_academic_badge_logo_for_firm_foundation_academy_shield_emblem_with_boo-0-019d3312-5891-7395-a95f-198799a790b7-6.jpg",
  },
];

function PortfolioSection() {
  const ref = useFadeIn();
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Logo Design", "Graphic Design"];
  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  return (
    <section id="work" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="fade-in section-label mb-3">My Work</p>
          <h2
            className="fade-in stagger-1 text-4xl md:text-5xl font-bold uppercase"
            style={{ color: "#F2F5F8" }}
          >
            Selected <span style={{ color: "#C7A14B" }}>Work</span>
          </h2>
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeFilter === cat ? "#C7A14B" : "transparent",
                  color: activeFilter === cat ? "#0B0F14" : "#C7A14B",
                  border: "1px solid #C7A14B",
                }}
                type="button"
                data-ocid="portfolio.filter.tab"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.title}
              className={`fade-in stagger-${(i % 3) + 1} card-hover group rounded-xl overflow-hidden`}
              style={{ border: "1px solid #2A3240" }}
              data-ocid={`portfolio.item.${i + 1}`}
            >
              <div className="h-52 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(199,161,75,0.12)" }}
                >
                  <span
                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                    style={{ background: "#C7A14B", color: "#0B0F14" }}
                  >
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-5" style={{ background: "#141A24" }}>
                <p
                  className="text-xs font-medium mb-1"
                  style={{ color: "#C7A14B" }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#F2F5F8" }}
                >
                  {item.title}
                </h3>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80"
                  style={{ color: "#C7A14B" }}
                  data-ocid={`portfolio.view_button.${i + 1}`}
                >
                  View Project <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Why Choose Me ----------
const whyItems = [
  {
    num: "01",
    icon: Award,
    title: "Quality Work",
    desc: "Every design is crafted with precision, creativity, and a commitment to exceeding your expectations. No templates — only custom work.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Fast Delivery",
    desc: "I respect your deadlines. Projects are delivered on time without compromising quality, so you can launch when you need to.",
  },
  {
    num: "03",
    icon: HeadphonesIcon,
    title: "Premium Support",
    desc: "Clear communication throughout the project. Unlimited revisions within scope and dedicated support until you're 100% satisfied.",
  },
];

function WhySection() {
  const ref = useFadeIn();
  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="fade-in section-label mb-3">The Difference</p>
          <h2
            className="fade-in stagger-1 text-4xl md:text-5xl font-bold uppercase"
            style={{ color: "#F2F5F8" }}
          >
            Why Choose <span style={{ color: "#C7A14B" }}>Me</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyItems.map((item, i) => (
            <div
              key={item.title}
              className={`fade-in stagger-${i + 1} card-hover p-8 rounded-xl`}
              style={{ background: "#141A24", border: "1px solid #2A3240" }}
              data-ocid={`why.item.${i + 1}`}
            >
              <div
                className="text-5xl font-bold mb-4"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #C7A14B",
                  opacity: 0.6,
                }}
              >
                {item.num}
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "rgba(199,161,75,0.1)",
                  border: "1px solid rgba(199,161,75,0.2)",
                }}
              >
                <item.icon size={18} style={{ color: "#C7A14B" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#F2F5F8" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A7AFBA" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
const testimonials = [
  {
    text: "AB_M delivered an absolutely stunning logo for my brand. The attention to detail and creativity is beyond what I expected. Premium quality!",
    name: "Sarah Mitchell",
    role: "Founder, Luxe Collective",
    initials: "SM",
  },
  {
    text: "Professional, fast, and incredibly talented. My YouTube channel design completely transformed and my CTR doubled within two weeks!",
    name: "James Okafor",
    role: "Content Creator, TechTalk",
    initials: "JO",
  },
  {
    text: "I've worked with many designers, but AB_M truly understands brand storytelling. The landing page design converted like crazy from day one.",
    name: "Priya Sharma",
    role: "CEO, NovaTech Solutions",
    initials: "PS",
  },
  {
    text: "Exceptional communication, fast turnaround, and the final result was absolutely perfect. Will definitely be working with AB_M again!",
    name: "Carlos Mendez",
    role: "Marketing Director, UrbanBrew",
    initials: "CM",
  },
];

const STARS = [1, 2, 3, 4, 5];

function TestimonialsSection() {
  const ref = useFadeIn();
  return (
    <section id="testimonials" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="fade-in section-label mb-3">Client Reviews</p>
          <h2
            className="fade-in stagger-1 text-4xl md:text-5xl font-bold uppercase"
            style={{ color: "#F2F5F8" }}
          >
            <span style={{ color: "#C7A14B" }}>Testimonials</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`fade-in stagger-${i + 1} card-hover p-6 rounded-xl flex flex-col`}
              style={{ background: "#141A24", border: "1px solid #2A3240" }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {STARS.map((n) => (
                  <Star
                    key={n}
                    size={14}
                    fill="#C7A14B"
                    style={{ color: "#C7A14B" }}
                  />
                ))}
              </div>
              <div
                className="text-5xl font-serif leading-none mb-2 -mt-1"
                style={{ color: "#C7A14B", opacity: 0.4 }}
              >
                &ldquo;
              </div>
              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: "#A7AFBA" }}
              >
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: "rgba(199,161,75,0.15)",
                    color: "#C7A14B",
                    border: "1px solid rgba(199,161,75,0.3)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#F2F5F8" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: "#A7AFBA" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function ContactSection() {
  const ref = useFadeIn();
  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #141A24 0%, #1a2132 100%)",
            border: "1px solid #2A3240",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(199,161,75,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative z-10">
            <div className="md:flex md:items-center md:justify-between gap-8">
              <div className="mb-10 md:mb-0 max-w-xl">
                <p className="fade-in section-label mb-3">Get In Touch</p>
                <h2
                  className="fade-in stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4"
                  style={{ color: "#F2F5F8", lineHeight: 1.1 }}
                >
                  Let&apos;s Discuss Your{" "}
                  <span style={{ color: "#C7A14B" }}>Next Project</span>
                </h2>
                <p
                  className="fade-in stagger-2 text-sm leading-relaxed"
                  style={{ color: "#A7AFBA" }}
                >
                  Ready to elevate your brand? Let&apos;s create something
                  extraordinary together.
                </p>
              </div>
              <div className="fade-in stagger-3 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 flex-shrink-0">
                <a
                  href="mailto:abm.designer@email.com"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:brightness-110"
                  style={{ background: "#C7A14B", color: "#0B0F14" }}
                  data-ocid="contact.email_button"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{ background: "#25D366", color: "#fff" }}
                  data-ocid="contact.whatsapp_button"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div
              className="mt-10 pt-10"
              style={{ borderTop: "1px solid #2A3240" }}
            >
              <a
                href="mailto:abm.designer@email.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110"
                style={{
                  background: "#C7A14B",
                  color: "#0B0F14",
                  letterSpacing: "0.05em",
                }}
                data-ocid="contact.start_conversation_button"
              >
                Start A Conversation
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { label: "Branding", href: "#services" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: ExternalLink, label: "Behance", href: "https://behance.net" },
    { icon: ExternalLink, label: "Dribbble", href: "https://dribbble.com" },
  ];
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "#0B0F14", borderTop: "1px solid #2A3240" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div
              className="text-2xl font-bold tracking-wider mb-4"
              style={{ color: "#C7A14B" }}
            >
              AB_M
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#A7AFBA" }}
            >
              Freelance graphic designer crafting premium brand identities,
              logos, and digital visuals that elevate your business.
            </p>
          </div>
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#F2F5F8" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: "#A7AFBA" }}
                    data-ocid={`footer.${l.label.toLowerCase()}.link`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#F2F5F8" }}
            >
              Social Media
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "#141A24",
                    border: "1px solid #2A3240",
                    color: "#A7AFBA",
                  }}
                  data-ocid={`footer.${s.label.toLowerCase()}.link`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid #2A3240", color: "#A7AFBA" }}
        >
          <span>&copy; {year} AB_M. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#C7A14B" }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
