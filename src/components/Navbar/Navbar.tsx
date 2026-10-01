import { useState } from "react";

// ─── Nav links – label + section id jo scroll hoga ───────────────────────────
const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog" },
    { label: "Contact Us", id: "contact" },
];

// ─── Smooth scroll helper ─────────────────────────────────────────────────────
function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
    return (
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1a5c38] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="7" r="3" fill="white" />
                    <circle cx="16" cy="8" r="2.5" fill="white" opacity="0.8" />
                    <path d="M3 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M15 14c1.5-.5 4 .5 4 3" stroke="white" strokeWidth="1.5" fill="none" />
                    <text x="14" y="6" fill="#4ade80" fontSize="6" fontWeight="bold">✦</text>
                </svg>
            </div>
            <span className="text-xl font-bold" style={{ color: "#1a1a1a" }}>
                Hire<span style={{ color: "#1a5c38" }}>Nova</span>
            </span>
        </div>
    );
}

// ─── Calendar icon ────────────────────────────────────────────────────────────
function CalendarIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

// ─── Hamburger icon ───────────────────────────────────────────────────────────
function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
                <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </>
            ) : (
                <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </>
            )}
        </svg>
    );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
    const [activeLink, setActiveLink] = useState("Home");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Click handler – active set karo + smooth scroll
    function handleNavClick(label: string, id: string) {
        setActiveLink(label);
        scrollToSection(id);
    }

    return (
        <nav
            className="w-full bg-white shadow-sm border-b border-gray-100"
            style={{ position: "sticky", top: 0, zIndex: 100 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo – click on logo scrolls to top */}
                <button onClick={() => scrollToSection("home")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
                    <Logo />
                </button>

                {/* Desktop nav links */}
                <ul className="hidden lg:flex items-center gap-6" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                onClick={() => handleNavClick(link.label, link.id)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    paddingBottom: "4px",
                                    borderBottom: activeLink === link.label ? "2px solid #1a5c38" : "2px solid transparent",
                                    color: activeLink === link.label ? "#1a5c38" : "#4b5563",
                                    transition: "color 0.2s",
                                }}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Desktop button */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="w-px h-6 bg-gray-300" />
                    <button
                        onClick={() => handleNavClick("Contact Us", "contact")}
                        className="flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
                        style={{ backgroundColor: "#1a5c38" }}
                    >
                        <CalendarIcon />
                        Book Appointment
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden"
                    style={{ color: "#4b5563", background: "none", border: "none", cursor: "pointer" }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <HamburgerIcon open={mobileOpen} />
                </button>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-4">
                    <ul className="flex flex-col gap-3 mt-3" style={{ listStyle: "none", margin: "12px 0 0 0", padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <button
                                    onClick={() => {
                                        handleNavClick(link.label, link.id);
                                        setMobileOpen(false);
                                    }}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "0.875rem",
                                        fontWeight: activeLink === link.label ? 700 : 500,
                                        color: activeLink === link.label ? "#1a5c38" : "#4b5563",
                                        display: "block",
                                        padding: "4px 0",
                                        textAlign: "left",
                                    }}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => { handleNavClick("Contact Us", "contact"); setMobileOpen(false); }}
                        className="mt-4 w-full flex items-center justify-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-md"
                        style={{ backgroundColor: "#1a5c38" }}
                    >
                        <CalendarIcon />
                        Book Appointment
                    </button>
                </div>
            )}
        </nav>
    );
}
