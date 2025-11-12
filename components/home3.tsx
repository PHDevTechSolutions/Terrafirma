"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Menu, X, ArrowUp, Mail, Globe, ShieldCheck, Brain, Users } from "lucide-react";

const BLUE_PRIMARY = "#1E40AF"; // strong blue
const BLUE_LIGHT = "#BFDBFE"; // light blue for backgrounds
const BLUE_ACCENT = "#3B82F6"; // accent blue for buttons, links

const navItems = ["Home", "About", "Services", "Why Us"];

export function HomePage3({ className, ...props }: React.ComponentProps<"div">) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
        }),
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div className={`font-sans text-gray-900 bg-white min-h-screen ${className || ""}`} {...props}>
            {/* HEADER */}
            <header className="sticky top-0 bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 md:px-12 relative">
                    {/* Logo */}
                    <img
                        src="/terrafirma_marketing_consulting_services.png"
                        alt="Terrafirma Marketing Consulting Services Logo"
                        className="h-16 md:h-20 object-contain cursor-pointer"
                        onClick={handleLogoClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleLogoClick();
                            }
                        }}
                    />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-12 text-base font-semibold text-blue-700">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                onClick={(e) => handleNavClick(e, item.toLowerCase().replace(/\s+/g, ""))}
                                className="relative hover:text-blue-900 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 z-50"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile sidebar menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white border-r border-blue-100 shadow-md transition-transform duration-300 ease-in-out z-40
                     ${menuOpen ? "translate-x-0" : "-translate-x-full"} `}
                >
                    <nav className="flex flex-col space-y-6 p-6 text-blue-700 font-semibold mt-20" role="menu">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                onClick={(e) => {
                                    handleNavClick(e, item.toLowerCase().replace(/\s+/g, ""));
                                    setMenuOpen(false); // close sidebar when link clicked
                                }}
                                className="hover:text-blue-900 focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                                role="menuitem"
                                tabIndex={menuOpen ? 0 : -1}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Optional: overlay background when sidebar is open */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-blue-400 bg-opacity-10 z-30 md:hidden"
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                    />
                )}

            </header>

            {/* HERO - split layout */}
            <section
                id="home"
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-32 px-6 gap-12"
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="md:w-1/2"
                >
                    <h1 className="text-5xl font-bold text-blue-900 leading-tight mb-6">
                        Navigating Change,<br /> Shaping Futures.
                    </h1>
                    <p className="text-lg text-blue-700 mb-8 max-w-md font-light">
                        Empowering global decision-makers with deep insights and forward-looking analysis to transform complex change into strategic opportunity.
                    </p>

                    <div className="flex gap-6">
                        <button
                            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-8 py-3 shadow-lg transition transform hover:scale-105 font-semibold"
                        >
                            Explore Insights
                        </button>

                        <button
                            onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}
                            className="border-2 border-blue-700 hover:border-blue-900 text-blue-700 hover:text-blue-900 rounded-xl px-8 py-3 font-semibold transition"
                        >
                            Work With Us
                        </button>
                    </div>
                </motion.div>

                {/* Right side illustration / abstract shape */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center"
                    aria-hidden="true"
                >
                    <div
                        style={{ background: "linear-gradient(135deg, #3B82F6 0%, #93C5FD 100%)" }}
                        className="w-80 h-80 rounded-3xl shadow-xl"
                    />
                </motion.div>
            </section>

            {/* ABOUT - horizontal cards */}
            <section
                id="about"
                className="max-w-7xl mx-auto px-6 py-20"
            >
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl font-extrabold text-blue-900 mb-12 text-center"
                >
                    Our Mission & Vision
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-blue-light rounded-2xl p-8 flex-1 shadow-md"
                    >
                        <h3 className="font-semibold text-blue-900 mb-4 text-xl">Mission</h3>
                        <p className="text-blue-800 font-light leading-relaxed">
                            To empower global decision-makers with deep insights and forward-looking analysis, enabling them to navigate complex changes and transform policy dynamics, geopolitical risks, and international affairs into strategic opportunities and drivers for growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="bg-blue-light rounded-2xl p-8 flex-1 shadow-md"
                    >
                        <h3 className="font-semibold text-blue-900 mb-4 text-xl">Vision</h3>
                        <p className="text-blue-800 font-light leading-relaxed">
                            To become the most trusted intellectual partner for global business leaders, building an integrated network that connects policy, geopolitics, and commerce to foster sustainable prosperity and innovative collaboration in the future international landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES - cards grid with icons */}
            <section
                id="services"
                className="max-w-7xl mx-auto px-6 py-20 bg-blue-50 rounded-t-3xl"
            >
                {/* Section heading */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-3xl font-bold text-blue-900 mb-8 text-center max-w-3xl mx-auto"
                >
                    Our Core Services
                </motion.h2>

                {/* Section subtitle / description */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center text-blue-700 font-light max-w-4xl mx-auto mb-16"
                >
                    We offer an integrated suite of advisory services designed to provide a
                    360-degree view of the external environment.
                </motion.p>

                {/* Services grid */}
                <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Geopolitical & Policy Intelligence",
                            icon: <Globe size={32} className="text-blue-700 mb-6" />,
                            descriptionItems: [
                                {
                                    title: "In-Depth Analytical Reports",
                                    text: "Comprehensive analysis of national and international policies, regulatory changes, trade agreements, and ESG mandates that impact your industry and operations.",
                                },
                                {
                                    title: "Geopolitical Risk Assessment",
                                    text: "Systematic evaluation of how regional conflicts, great power competition, electoral outcomes, and trade tensions affect global supply chains, market access, and investment security.",
                                },
                                {
                                    title: "Compliance & Market Access Advisory",
                                    text: "Guidance on navigating international sanctions, export controls, data privacy laws (e.g., GDPR), and anti-trust regulations to ensure full compliance and operational integrity.",
                                },
                            ],
                        },
                        {
                            title: "Strategic Market Entry & Expansion",
                            icon: <Users size={32} className="text-blue-700 mb-6" />,
                            descriptionItems: [
                                {
                                    title: "Emerging Market Opportunity Scan",
                                    text: "Identifying and evaluating high-potential markets for investment and expansion, backed by robust analysis of political stability and policy direction.",
                                },
                                {
                                    title: "Public Affairs & Stakeholder Mapping",
                                    text: "Strategic advice on engaging with key government bodies, regulatory agencies, and industry associations to foster constructive relationships.",
                                },
                                {
                                    title: "Partner Diligence & Selection",
                                    text: "Conducting thorough due diligence on potential local partners, assessing their political affiliations, reputation, and compliance history.",
                                },
                            ],
                        },
                        {
                            title: "Customized Strategic Decision Support",
                            icon: <Brain size={32} className="text-blue-700 mb-6" />,
                            descriptionItems: [
                                {
                                    title: "Scenario Planning & Stress Testing",
                                    text: "Modeling the potential outcomes of your critical investments or projects under various policy and geopolitical scenarios to optimize your strategy.",
                                },
                                {
                                    title: "Executive Briefings & Training",
                                    text: "Bespoke, confidential briefings for boards and C-suite executives, as well as customized training workshops to build organizational capability in understanding macro risks.",
                                },
                                {
                                    title: "Crisis Management & Response",
                                    text: "Rapid-response analysis and strategic contingency planning in the event of sudden policy changes or geopolitical disruptions to minimize impact.",
                                },
                            ],
                        },
                    ].map(({ title, icon, descriptionItems }, idx) => (
                        <motion.article
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col"
                            role="region"
                            aria-labelledby={`service-title-${idx}`}
                        >
                            {icon}
                            <h3
                                id={`service-title-${idx}`}
                                className="font-semibold text-blue-900 text-xl mb-6"
                            >
                                {title}
                            </h3>

                            <dl className="space-y-6 flex-grow text-blue-800 font-light">
                                {descriptionItems.map(({ title, text }, i) => (
                                    <div key={i}>
                                        <dt className="font-semibold text-blue-900">{title}</dt>
                                        <dd className="mt-1">{text}</dd>
                                    </div>
                                ))}
                            </dl>
                        </motion.article>
                    ))}
                </div>
            </section>


            {/* WHY US - list with icons */}
            <section
                id="whyus"
                className="max-w-7xl mx-auto px-6 py-20"
            >
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-3xl font-bold text-blue-900 mb-12 text-center"
                >
                    Why Partner With Us?
                </motion.h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Users size={40} className="text-blue-700 mb-3" />,
                            title: "Elite Expert Network",
                            desc: "Former advisors and professionals from government, economics, and law.",
                        },
                        {
                            icon: <Brain size={40} className="text-blue-700 mb-3" />,
                            title: "Proprietary Framework",
                            desc: 'Our unique "PESTLE-Plus" model uncovers underlying drivers and global trends.',
                        },
                        {
                            icon: <Globe size={40} className="text-blue-700 mb-3" />,
                            title: "Global & Local Insight",
                            desc: "Worldwide perspective combined with deep market expertise in Asia and China.",
                        },
                        {
                            icon: <ShieldCheck size={40} className="text-blue-700 mb-3" />,
                            title: "Discretion & Integrity",
                            desc: "Highest standards of confidentiality and client-first ethics.",
                        },
                    ].map(({ icon, title, desc }, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="border border-blue-100 rounded-2xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            {icon}
                            <h3 className="font-semibold text-blue-900 text-lg mb-2">{title}</h3>
                            <p className="text-blue-700 text-sm font-light">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-blue-light text-blue-900 py-10 px-6 text-center rounded-t-3xl border-t border-blue-300">
                <p className="text-sm mb-1">© {new Date().getFullYear()} Terrafirma Marketing Consulting Services. All rights reserved.</p>
                <p className="text-sm">
                    Contact us at{" "}
                    <a
                        href="mailto:office@terrafirmastrategies.com"
                        className="underline hover:text-blue-800 font-semibold"
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
                    className="fixed bottom-20 right-6 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* Floating Email Button */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=office@terrafirmastrategies.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Terrafirma Marketing Consulting Services via Gmail"
                className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center px-4 py-2 shadow-lg transition"
            >
                <Mail size={20} className="mr-2" />
                <span className="font-semibold">Email Us</span>
            </a>
        </div>
    );
}
