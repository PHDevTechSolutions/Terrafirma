"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, Variants, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  ShieldCheck,
  Brain,
  Users,
  Menu,
  X,
  ArrowUp,
  Mail,
} from "lucide-react";

export function HomePage2({ className, ...props }: React.ComponentProps<"div">) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const navItems = ["Home", "About", "Services", "Why Us"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreClick = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWorkClick = () => {
    const why = document.getElementById("why");
    if (why) {
      why.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "w-full bg-white text-gray-900 overflow-x-hidden font-sans",
        className
      )}
      {...props}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-blue-300 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
          {/* Left Nav (desktop) */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-blue-700 w-1/3 justify-start">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={(e) =>
                  handleNavClick(e, item.toLowerCase().replace(" ", ""))
                }
                className="relative hover:text-blue-900 transition-all"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <img
            src="/terrafirma_marketing_consulting_services.png"
            alt="Terrafirma Marketing Consulting Services Logo"
            className="h-16 md:h-20 object-contain cursor-pointer mx-auto"
            onClick={handleLogoClick}
          /> 

          {/* Right Nav (desktop) */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-blue-700 w-1/3 justify-end">
            {navItems.slice(2).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={(e) =>
                  handleNavClick(e, item.toLowerCase().replace(" ", ""))
                }
                className="relative hover:text-blue-900 transition-all"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-blue-300 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex flex-col px-6 py-10 space-y-6 text-blue-700 text-lg font-semibold">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase().replace(" ", ""))}
                className="hover:text-blue-900"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center py-40 mt-20 bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden px-6"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl w-full space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Navigating Change, <br />
            Shaping Futures.
          </h1>
          <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto font-light">
            Empowering global decision-makers with deep insights and forward-looking analysis to
            transform complex change into strategic opportunity.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-10 shadow-lg transition-transform transform hover:scale-105"
              onClick={handleExploreClick}
            >
              Explore Our Insights
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full px-10 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              onClick={handleWorkClick}
            >
              Work With Us
            </Button>
          </div>
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
          <svg
            className="relative block w-[200%] h-24 animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transformOrigin: "center bottom" }}
          >
            <path
              fill="#bfdbfe"
              fillOpacity="1"
              d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        <style jsx>{`
          @keyframes waveAnimation {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-wave {
            animation: waveAnimation 10s linear infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24 text-center text-blue-900"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <h2 className="text-4xl font-semibold">Our Mission & Vision</h2>
          <Separator className="mx-auto w-20 border-blue-700" />
          <p className="text-lg font-light max-w-3xl mx-auto">
            <strong className="font-semibold">Mission:</strong> To empower global
            decision-makers with deep insights and forward-looking analysis,
            enabling them to navigate complex changes and transform policy
            dynamics, geopolitical risks, and international affairs into
            strategic opportunities and drivers for growth.
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto">
            <strong className="font-semibold">Vision:</strong> To become the most
            trusted intellectual partner for global business leaders, building
            an integrated network that connects policy, geopolitics, and
            commerce to foster sustainable prosperity and innovative
            collaboration in the future international landscape.
          </p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section
        id="services"
        className="bg-blue-50 py-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-center text-blue-900 mb-16">
            Our Core Services
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-16 text-blue-800 font-light">
            We offer an integrated suite of advisory services designed to
            provide a 360-degree view of the external environment.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {[{
              title: "Geopolitical & Policy Intelligence",
              items: [
                "In-Depth Analytical Reports: Comprehensive analysis of national and international policies, regulatory changes, trade agreements, and ESG mandates that impact your industry and operations.",
                "Geopolitical Risk Assessment: Systematic evaluation of how regional conflicts, great power competition, electoral outcomes, and trade tensions affect global supply chains, market access, and investment security.",
                "Compliance & Market Access Advisory: Guidance on navigating international sanctions, export controls, data privacy laws (e.g., GDPR), and anti-trust regulations to ensure full compliance and operational integrity.",
              ],
            },
            {
              title: "Strategic Market Entry & Expansion",
              items: [
                "Emerging Market Opportunity Scan: Identifying and evaluating high-potential markets for investment and expansion, backed by robust analysis of political stability and policy direction.",
                "Public Affairs & Stakeholder Mapping: Strategic advice on engaging with key government bodies, regulatory agencies, and industry associations to foster constructive relationships.",
                "Partner Diligence & Selection: Conducting thorough due diligence on potential local partners, assessing their political affiliations, reputation, and compliance history.",
              ],
            },
            {
              title: "Customized Strategic Decision Support",
              items: [
                "Scenario Planning & Stress Testing: Modeling the potential outcomes of your critical investments or projects under various policy and geopolitical scenarios to optimize your strategy.",
                "Executive Briefings & Training: Bespoke, confidential briefings for boards and C-suite executives, as well as customized training workshops to build organizational capability in understanding macro risks.",
                "Crisis Management & Response: Rapid-response analysis and strategic contingency planning in the event of sudden policy changes or geopolitical disruptions to minimize impact.",
              ],
            }].map(({ title, items }, i) => (
              <motion.div
                key={title}
                custom={i + 1}
                variants={fadeUp}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-700 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>
                <ul className="list-disc list-inside text-blue-800 font-light space-y-2 flex-grow">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="text-blue-700 mt-6 self-start px-0 font-semibold hover:underline"
                >
                  Learn more →
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Partner With Us */}
      <section
        id="whyus"
        className="max-w-7xl mx-auto px-6 py-24 text-blue-900"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-center mb-14">Why Partner With Us?</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: <Users className="w-10 h-10 text-blue-700" />,
                title: "Elite Expert Network",
                desc: "Composed of former advisors and professionals from government, economics, and law.",
              },
              {
                icon: <Brain className="w-10 h-10 text-blue-700" />,
                title: "Proprietary Framework",
                desc: 'Our unique "PESTLE-Plus" model uncovers underlying drivers and global trends.',
              },
              {
                icon: <Globe className="w-10 h-10 text-blue-700" />,
                title: "Global & Local Insight",
                desc: "Combines worldwide perspective with deep market expertise, especially in Asia and China.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
                title: "Discretion & Integrity",
                desc: "We uphold the highest standards of confidentiality and client-first ethics.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                className="bg-white rounded-lg shadow-md hover:shadow-lg p-8 text-center flex flex-col items-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-800 font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-blue-300 bg-blue-50 text-blue-800 py-10 text-center"
      >
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Terrafirma Marketing Consulting Services. All rights
          reserved.
        </p>
        <p className="text-sm">
          Contact us at{" "}
          <a
            href="mailto:office@terrafirmastrategies.com"
            className="underline text-blue-700 hover:text-blue-900"
          >
            office@terrafirmastrategies.com
          </a>
        </p>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-6 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition-opacity"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Email us floating button */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=office@terrafirmastrategies.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to Terrafirma Marketing Consulting Services via Gmail"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        className="fixed right-3 bottom-5 z-50 flex items-center bg-blue-900 text-white rounded-full shadow-lg cursor-pointer select-none"
        style={{ minWidth: 100, height: 48 }}
      >
        <span
          className="whitespace-nowrap font-semibold text-[12px] px-4 select-none"
          style={{ userSelect: "none" }}
        >
          Email Us
        </span>

        <div
          className="flex items-center justify-center bg-blue-800 rounded-full ml-2"
          style={{ width: 48, height: 48 }}
        >
          <Mail className="w-6 h-6" />
        </div>
      </motion.a>
    </div>
  );
}
