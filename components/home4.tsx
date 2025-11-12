"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Menu, X, ArrowUp, Mail, Globe, ShieldCheck, Brain, Users } from "lucide-react";

const navItems = ["home", "about", "services", "whyus"];
const navLabels = ["Home", "About", "Services", "Why Us"];

export function HomePage4({ className, ...props }: React.ComponentProps<"div">) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const lastScrollTime = useRef(0);

    // Scroll show/hide scroll to top button
    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Wheel event to change step (throttled)
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < 300) return;
            lastScrollTime.current = now;

            if (e.deltaY > 0) {
                setCurrentStep((prev) => Math.min(prev + 1, navItems.length - 1));
            } else if (e.deltaY < 0) {
                setCurrentStep((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
    }, []);

    // Scroll to top helper
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // When step changes, scroll to top of the content area (optional)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentStep]);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const goToStep = (index: number) => {
        setCurrentStep(index);
        setMenuOpen(false);
    };

    const handleLogoClick = () => {
        setCurrentStep(0);
        setMenuOpen(false);
        scrollToTop();
    };

    function isMobileDevice() {
        if (typeof navigator === "undefined") return false;
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    const href = isMobileDevice()
        ? "mailto:office@terrafirmastrategies.com"
        : "https://mail.google.com/mail/?view=cm&fs=1&to=office@terrafirmastrategies.com";

    // Sections content
    const sections = [
        // HOME
        <section
            key="home"
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-0 max-w-5xl mx-auto relative pt-24"
        >
            {/* Decorative Circles */}
            <div
                aria-hidden="true"
                className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-100 opacity-30 mix-blend-multiply filter blur-3xl animate-blob"
                style={{ animationDelay: "0s" }}
            />
            <div
                aria-hidden="true"
                className="absolute top-40 right-10 w-64 h-64 rounded-full bg-blue-300 opacity-20 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"
                style={{ animationDelay: "2s" }}
            />

            <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-6xl font-extrabold text-blue-900 leading-tight max-w-4xl"
            >
                Navigating Change,<br /> Shaping Futures.
            </motion.h1>

            <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 text-xl text-blue-700 max-w-3xl font-light"
            >
                Empowering global decision-makers with deep insights and forward-looking analysis to transform complex change into strategic opportunity.
            </motion.p>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
            >
                <button
                    onClick={() => goToStep(1)}
                    className="rounded-full bg-blue-700 hover:bg-blue-800 px-12 py-4 text-white font-semibold shadow-lg transition transform hover:scale-105"
                >
                    Explore Insights
                </button>
                <button
                    onClick={() => goToStep(3)}
                    className="rounded-full border-2 border-blue-700 hover:border-blue-900 text-blue-700 hover:text-blue-900 px-12 py-4 font-semibold transition"
                >
                    Work With Us
                </button>
            </motion.div>
        </section>,

        // ABOUT
        <section
            key="about"
            id="about"
            className="relative max-w-7xl mx-auto py-24 px-6 md:px-12"
        >
            {/* Background circles */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-200 opacity-20 filter blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-300 opacity-30 filter blur-2xl"
            />

            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-4xl font-extrabold text-blue-900 mb-14 text-center"
            >
                Our Mission & Vision
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-14 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-3xl shadow-lg p-10 flex-1 border border-blue-100"
                >
                    <h3 className="font-semibold text-blue-900 text-2xl mb-4">Mission</h3>
                    <p className="text-blue-700 leading-relaxed font-light">
                        To empower global decision-makers with deep insights and forward-looking analysis, enabling them to navigate complex changes and transform policy dynamics, geopolitical risks, and international affairs into strategic opportunities and drivers for growth.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-white rounded-3xl shadow-lg p-10 flex-1 border border-blue-100"
                >
                    <h3 className="font-semibold text-blue-900 text-2xl mb-4">Vision</h3>
                    <p className="text-blue-700 leading-relaxed font-light">
                        To become the most trusted intellectual partner for global business leaders, building an integrated network that connects policy, geopolitics, and commerce to foster sustainable prosperity and innovative collaboration in the future international landscape.
                    </p>
                </motion.div>
            </div>
        </section>,

        // SERVICES
        <section
            key="services"
            id="services"
            className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-blue-50 rounded-3xl"
        >
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-3xl font-bold text-blue-900 mb-10 text-center"
            >
                Our Core Services
            </motion.h2>

            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-4xl mx-auto mb-16 text-blue-700 font-light"
            >
                We offer an integrated suite of advisory services designed to provide a 360-degree view of the external environment.
            </motion.p>

            <div className="columns-1 md:columns-3 gap-8 space-y-8 md:space-y-0">
                {[
                    {
                        title: "Geopolitical & Policy Intelligence",
                        icon: Globe,
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
                        icon: Users,
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
                        icon: Brain,
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
                ].map(({ title, icon: Icon, descriptionItems }, i) => (
                    <motion.article
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="break-inside-avoid bg-white rounded-3xl shadow-lg p-8 mb-8 border border-blue-100"
                        role="region"
                        aria-labelledby={`service-title-${i}`}
                    >
                        <div className="flex items-center mb-6">
                            <Icon size={36} className="text-blue-700 mr-4" />
                            <h3
                                id={`service-title-${i}`}
                                className="font-semibold text-blue-900 text-2xl"
                            >
                                {title}
                            </h3>
                        </div>

                        <dl className="space-y-5 text-blue-800 font-light">
                            {descriptionItems.map(({ title, text }, j) => (
                                <div key={j}>
                                    <dt className="font-semibold">{title}</dt>
                                    <dd className="mt-1">{text}</dd>
                                </div>
                            ))}
                        </dl>
                    </motion.article>
                ))}
            </div>
        </section>,

        // WHY US
        <section
            key="whyus"
            id="whyus"
            className="max-w-7xl mx-auto px-6 md:px-12 py-24"
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

            <div className="flex space-x-6 gap-4 overflow-x-auto pb-6 md:grid md:grid-cols-4 md:space-x-0 md:overflow-visible">
                {[
                    {
                        icon: Users,
                        title: "Elite Expert Network",
                        desc: "Former advisors and professionals from government, economics, and law.",
                    },
                    {
                        icon: Brain,
                        title: "Proprietary Framework",
                        desc: 'Our unique "PESTLE-Plus" model uncovers underlying drivers and global trends.',
                    },
                    {
                        icon: Globe,
                        title: "Global & Local Insight",
                        desc: "Worldwide perspective combined with deep market expertise in Asia and China.",
                    },
                    {
                        icon: ShieldCheck,
                        title: "Discretion & Integrity",
                        desc: "Highest standards of confidentiality and client-first ethics.",
                    },
                ].map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="min-w-[240px] bg-white border border-blue-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center"
                    >
                        <Icon size={48} className="text-blue-700 mb-4" />
                        <h3 className="font-semibold text-blue-900 text-lg mb-2">{title}</h3>
                        <p className="text-blue-700 text-sm font-light">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>,
    ];

    return (
        <div className={`relative font-sans text-gray-900 bg-white min-h-screen ${className || ""}`} {...props}>
            {/* HEADER */}
            <header className="fixed w-full top-0 left-0 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200 z-[1000]">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
                    <img
                        src="/terrafirma_marketing_consulting_services.png"
                        alt="Terrafirma Logo"
                        className="h-20 cursor-pointer"
                        onClick={handleLogoClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleLogoClick()}
                    />

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-10 font-semibold text-blue-700 text-base tracking-wide">
                        {navLabels.map((item, idx) => (
                            <a
                                key={item}
                                href={`#${navItems[idx]}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    goToStep(idx);
                                }}
                                className="relative px-2 py-1 hover:text-blue-900 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full focus-visible:outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
                                aria-current={currentStep === idx ? "page" : undefined}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* MAIN SECTION (only one displayed at a time) */}
            <main className="pt-24">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={currentStep === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ display: currentStep === idx ? "block" : "none" }}
                    >
                        {section}
                    </motion.div>
                ))}
            </main>

            {/* Vertical Stepper */}
            <nav
                aria-label="Section navigation"
                className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col space-y-4 z-50 bg-white bg-opacity-90 rounded-full p-3 shadow-lg"
            >
                {navLabels.map((item, idx) => (
                    <button
                        key={item}
                        onClick={() => goToStep(idx)}
                        aria-current={currentStep === idx ? "step" : undefined}
                        className={`w-4 h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 ${currentStep === idx ? "bg-blue-700" : "bg-blue-300 hover:bg-blue-500"
                            }`}
                        aria-label={`Go to ${item} section`}
                    />
                ))}
            </nav>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={() => goToStep(0)}
                    aria-label="Scroll to top (Home)"
                    className="fixed bottom-20 right-6 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg transition"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* Floating Email Button */}
            <a
                href={href}
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
