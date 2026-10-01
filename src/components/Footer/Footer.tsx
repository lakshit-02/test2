// ─── Footer Component ─────────────────────────────────────────────────────────

const quickLinks = ["About Company", "Meet the Team", "News & Media", "Our Projects", "Contact"];
const services = ["Apply Now", "Contract to Hire", "Direct Hire", "Executive Search", "Our Solutions"];
const usefulLinks = ["Privacy Policy", "Terms & Conditions", "FAQ", "Sitemap", "Careers"];

const contactInfo = [
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        text: "66 Road Broklyn Street, 600\nNew York, USA",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        text: "needhelp@company.com",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        text: "+92 (8800) - 6930",
    },
    {
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        text: "Mon - Fri: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed",
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer style={{ backgroundColor: "#041f12" }}>

            {/* ── Main footer content ── */}
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Col 1 – Logo + about + social */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#1a5c38] flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <circle cx="9" cy="7" r="3" fill="white" />
                                    <circle cx="16" cy="8" r="2.5" fill="white" opacity="0.8" />
                                    <path d="M3 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.5" fill="none" />
                                    <path d="M15 14c1.5-.5 4 .5 4 3" stroke="white" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <span style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 800 }}>
                                Hire<span style={{ color: "#2dd4a0" }}>Nova</span>
                            </span>
                        </div>

                        {/* Tagline */}
                        <p style={{ color: "#9ca3af", fontSize: "0.65rem", letterSpacing: "0.15em", marginBottom: "12px", textTransform: "uppercase" }}>
                            People • Potential • Progress
                        </p>

                        {/* About text */}
                        <p style={{ color: "#9ca3af", fontSize: "0.8rem", lineHeight: "1.7", marginBottom: "20px" }}>
                            Connecting great people with great opportunities. At HireNova, we help businesses build stronger
                            teams and individuals achieve meaningful careers.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#9ca3af" }}
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a5c38")}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 – Quick Links */}
                    <div>
                        <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px", textAlign: "left" }}>
                            Quick Links
                        </h4>
                        <div style={{ width: "32px", height: "2px", backgroundColor: "#2dd4a0", marginBottom: "16px" }} />
                        <ul className="flex flex-col gap-2.5" style={{ textAlign: "left", listStyle: "none", padding: 0, margin: 0 }}>
                            {quickLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" style={{ color: "#9ca3af", fontSize: "0.82rem", textDecoration: "none" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#2dd4a0")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 – Our Services */}
                    <div>
                        <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px", textAlign: "left" }}>
                            Our Services
                        </h4>
                        <div style={{ width: "32px", height: "2px", backgroundColor: "#2dd4a0", marginBottom: "16px" }} />
                        <ul className="flex flex-col gap-2.5" style={{ textAlign: "left", listStyle: "none", padding: 0, margin: 0 }}>
                            {services.map((l) => (
                                <li key={l}>
                                    <a href="#" style={{ color: "#9ca3af", fontSize: "0.82rem", textDecoration: "none" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#2dd4a0")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 – Useful Links */}
                    <div>
                        <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px", textAlign: "left" }}>
                            Useful Links
                        </h4>
                        <div style={{ width: "32px", height: "2px", backgroundColor: "#2dd4a0", marginBottom: "16px" }} />
                        <ul className="flex flex-col gap-2.5" style={{ textAlign: "left", listStyle: "none", padding: 0, margin: 0 }}>
                            {usefulLinks.map((l) => (
                                <li key={l}>
                                    <a href="#" style={{ color: "#9ca3af", fontSize: "0.82rem", textDecoration: "none" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "#2dd4a0")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5 – Contact Us */}
                    <div>
                        <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px", textAlign: "left" }}>
                            Contact Us
                        </h4>
                        <div style={{ width: "32px", height: "2px", backgroundColor: "#2dd4a0", marginBottom: "16px" }} />
                        <ul className="flex flex-col gap-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {contactInfo.map((c, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ backgroundColor: "rgba(45,212,160,0.15)" }}
                                    >
                                        {c.icon}
                                    </div>
                                    <p style={{ color: "#9ca3af", fontSize: "0.78rem", lineHeight: "1.6", whiteSpace: "pre-line", textAlign: "left", margin: 0 }}>
                                        {c.text}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

                    {/* Copyright */}
                    <p style={{ color: "#6b7280", fontSize: "0.78rem" }}>
                        © 2026 HireNova. All Rights Reserved.
                    </p>

                    {/* Middle links + back to top */}
                    <div className="flex items-center gap-4">
                        {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l, i) => (
                            <div key={l} className="flex items-center gap-4">
                                <a href="#" style={{ color: "#6b7280", fontSize: "0.78rem", textDecoration: "none" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#2dd4a0")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
                                >
                                    {l}
                                </a>
                                {i < 2 && <span style={{ color: "#374151" }}>|</span>}
                            </div>
                        ))}

                        {/* Back to top button */}
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 ml-2"
                            style={{ color: "#9ca3af", fontSize: "0.78rem" }}
                        >
                            <div
                                className="w-8 h-8 rounded-full border flex items-center justify-center"
                                style={{ borderColor: "#374151" }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="12" y1="19" x2="12" y2="5" />
                                    <polyline points="5 12 12 5 19 12" />
                                </svg>
                            </div>
                            Back to Top
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}
