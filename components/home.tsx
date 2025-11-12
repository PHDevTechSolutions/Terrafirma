"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, Variants, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, ShieldCheck, Brain, Users, Menu, X, ArrowUp, Mail, Target, Eye } from "lucide-react";

export function HomePage({ className, ...props }: React.ComponentProps<"div">) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            y: [0, -8, 0], // float up 8px then back
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

    // Nav link smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // close mobile menu
    };

    // Logo click scroll to top
    const handleLogoClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false);
    };

    // Scroll to top button visibility toggle
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

    // Button handlers for Explore Our Insights and Work With Us
    const handleExploreClick = () => {
        const about = document.getElementById("about");
        if (about) {
            about.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                const services = document.getElementById("services");
                services?.scrollIntoView({ behavior: "smooth" });
            }, 800);
        }
    };

    const handleWorkClick = () => {
        const why = document.getElementById("why");
        if (why) {
            why.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
            }, 800);
        }
    };

    function isMobileDevice() {
        if (typeof navigator === "undefined") return false;
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    const href = isMobileDevice()
  ? "intent://mail.google.com/mail/?view=cm&to=office@terrafirmastrategies.com#Intent;scheme=https;package=com.google.android.gm;end"
  : "https://mail.google.com/mail/?view=cm&fs=1&to=office@terrafirmastrategies.com";

    return (
        <div className={cn("w-full bg-white text-gray-900 overflow-x-hidden", className)} {...props}>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-white border-b border-blue-200 z-50">
                <div className="flex items-center justify-between w-full py-4 px-4 sm:px-6 md:px-8">
                    {/* Logo Image */}
                    <img
                        src="/terrafirma_marketing_consulting_services.png"
                        alt="Terrafirma Marketing Consulting Services Logo"
                        className="h-20 md:h-20 object-contain cursor-pointer"
                        onClick={handleLogoClick}
                    />

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                onClick={(e) => handleNavClick(e, item.toLowerCase().replace(" ", ""))}
                                className={cn(
                                    "relative text-gray-700",
                                    "before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-blue-700 before:transition-[width] before:duration-300 hover:before:w-full",
                                    "hover:text-blue-700"
                                )}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-blue-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Sidebar - slide from left */}
                <div
                    className={cn(
                        "fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-blue-200 z-50 transform transition-transform duration-300 ease-in-out md:hidden",
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                >
                    <nav className="flex flex-col px-6 py-8 space-y-6 text-gray-700">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                onClick={(e) => handleNavClick(e, item.toLowerCase().replace(" ", ""))}
                                className="hover:text-blue-700 text-sm font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Overlay behind sidebar when open */}
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
                className="relative flex flex-col items-center justify-center text-center py-40 mt-16 w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden"
            >
                <motion.div initial="hidden" animate="visible" variants={fadeUp} className="w-full space-y-6 px-4 md:px-0 max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
                        Navigating Change, <br /> Shaping Futures.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        Empowering global decision-makers with deep insights and forward-looking analysis to transform complex change into strategic opportunity.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-8 shadow-lg transition-transform transform hover:scale-105" onClick={handleExploreClick}>
                            Explore Our Insights
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full px-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                            onClick={handleWorkClick}
                        >
                            Work With Us
                        </Button>
                    </div>
                </motion.div>

                {/* Animated Wave SVG */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        className="relative block w-[200%] h-24 animate-wave"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{ transformOrigin: "center bottom" }}
                    >
                        <path
                            fill="#dbeafe"
                            fillOpacity="1"
                            d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
                        />
                    </svg>
                </div>

                <style jsx>{` @keyframes waveAnimation { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-wave { animation: waveAnimation 10s linear infinite; } `}</style>
            </section>


            {/* About Section */}
            <section id="about" className="w-full py-24 bg-white text-center max-w-6xl mx-auto px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full space-y-6">
                    <h2 className="text-3xl font-semibold text-blue-900">Our Mission & Vision</h2>
                    <Separator className="mx-auto w-16 bg-blue-600" />
                    <p className="text-gray-600 leading-relaxed text-lg mt-6">
                        <strong>Mission:</strong> To empower global decision-makers with deep insights and forward-looking analysis, enabling them to navigate complex changes and transform policy dynamics, geopolitical risks, and international affairs into strategic opportunities and drivers for growth.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        <strong>Vision:</strong> To become the most trusted intellectual partner for global business leaders, building an integrated network that connects policy, geopolitics, and commerce to foster sustainable prosperity and innovative collaboration in the future international landscape.
                    </p>
                </motion.div>
            </section>

            {/* Core Services */}
            <section id="services" className="w-full bg-blue-50 py-24 max-w-7xl mx-auto px-4 md:px-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full">
                    <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">Our Core Services</h2>
                    <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
                        We offer an integrated suite of advisory services designed to provide a 360-degree view of the external environment.
                    </p>
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Service 1 */}
                        <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Card className="shadow-md hover:shadow-lg border-blue-200 transition bg-white w-full h-full">
                                <CardContent className="p-8 space-y-3">
                                    <h3 className="text-xl font-semibold text-blue-900">Geopolitical & Policy Intelligence</h3>
                                    <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed">
                                        <li>In-Depth Analytical Reports: Comprehensive analysis of national and international policies, regulatory changes, trade agreements, and ESG mandates that impact your industry and operations.</li>
                                        <li>Geopolitical Risk Assessment: Systematic evaluation of how regional conflicts, great power competition, electoral outcomes, and trade tensions affect global supply chains, market access, and investment security.</li>
                                        <li>Compliance & Market Access Advisory: Guidance on navigating international sanctions, export controls, data privacy laws (e.g., GDPR), and anti-trust regulations to ensure full compliance and operational integrity.</li>
                                    </ul>
                                    <Button variant="link" className="text-blue-700 px-0 mt-2">Learn more →</Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Service 2 */}
                        <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Card className="shadow-md hover:shadow-lg border-blue-200 transition bg-white w-full h-full">
                                <CardContent className="p-8 space-y-3">
                                    <h3 className="text-xl font-semibold text-blue-900">Strategic Market Entry & Expansion</h3>
                                    <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed">
                                        <li>Emerging Market Opportunity Scan: Identifying and evaluating high-potential markets for investment and expansion, backed by robust analysis of political stability and policy direction.</li>
                                        <li>Public Affairs & Stakeholder Mapping: Strategic advice on engaging with key government bodies, regulatory agencies, and industry associations to foster constructive relationships.</li>
                                        <li>Partner Diligence & Selection: Conducting thorough due diligence on potential local partners, assessing their political affiliations, reputation, and compliance history.</li>
                                    </ul>
                                    <Button variant="link" className="text-blue-700 px-0 mt-2">Learn more →</Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Service 3 */}
                        <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <Card className="shadow-md hover:shadow-lg border-blue-200 transition bg-white w-full h-full">
                                <CardContent className="p-8 space-y-3">
                                    <h3 className="text-xl font-semibold text-blue-900">Customized Strategic Decision Support</h3>
                                    <ul className="text-gray-600 text-sm list-disc list-inside leading-relaxed">
                                        <li>Scenario Planning & Stress Testing: Modeling the potential outcomes of your critical investments or projects under various policy and geopolitical scenarios to optimize your strategy.</li>
                                        <li>Executive Briefings & Training: Bespoke, confidential briefings for boards and C-suite executives, as well as customized training workshops to build organizational capability in understanding macro risks.</li>
                                        <li>Crisis Management & Response: Rapid-response analysis and strategic contingency planning in the event of sudden policy changes or geopolitical disruptions to minimize impact.</li>
                                    </ul>
                                    <Button variant="link" className="text-blue-700 px-0 mt-2">Learn more →</Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Why Partner With Us */}
            <section id="whyus" className="py-24 w-full bg-white max-w-7xl mx-auto px-4 md:px-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full">
                    <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">Why Partner With Us?</h2>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {[
                            {
                                icon: <Users className="w-8 h-8 text-blue-700" />,
                                title: "Elite Expert Network",
                                desc: "Composed of former advisors and professionals from government, economics, and law.",
                            },
                            {
                                icon: <Brain className="w-8 h-8 text-blue-700" />,
                                title: "Proprietary Framework",
                                desc: 'Our unique "PESTLE-Plus" model uncovers underlying drivers and global trends.',
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-blue-700" />,
                                title: "Global & Local Insight",
                                desc: "Combines worldwide perspective with deep market expertise, especially in Asia and China.",
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
                                title: "Discretion & Integrity",
                                desc: "We uphold the highest standards of confidentiality and client-first ethics.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i + 1}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Card className="text-center shadow-md hover:shadow-lg border-blue-100 transition w-full h-full">
                                    <CardContent className="p-8 space-y-3">
                                        <div className="flex justify-center">{item.icon}</div>
                                        <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer
                id="contact"
                className="border-t border-blue-200 bg-blue-50 text-gray-700 py-10 w-full text-center  mx-auto px-4"
            >
                <p className="text-sm">
                    © {new Date().getFullYear()} Terrafirma Marketing Consulting Services. All rights reserved.
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

            <motion.a
                href={href}
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
