import bgImg from "../../assets/img.jpg";

// ─── Bottom 3 highlights ──────────────────────────────────────────────────────
const highlights = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        label: "Grow Your Career",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
        label: "Work with Great People",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.6">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="3 7 6 4 9 7" />
            </svg>
        ),
        label: "Build a Better Tomorrow",
    },
];

export default function Hiring() {
    return (
        <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#062817", minHeight: "320px" }}>

            {/* Background image – semi transparent */}
            <img
                src={bgImg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                style={{ opacity: 0.22 }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
                <div className="max-w-xl">

                    {/* WE'RE HIRING label */}
                    <div className="flex items-center gap-3 mb-4">
                        <div style={{ width: "28px", height: "1px", backgroundColor: "#2dd4a0" }} />
                        <span style={{ color: "#2dd4a0", fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
                            We're Hiring
                        </span>
                    </div>

                    {/* Heading – white + teal */}
                    <h2
                        className="font-extrabold leading-tight"
                        style={{ fontSize: "clamp(26px, 4vw, 44px)", color: "#ffffff", textAlign: "left", marginBottom: "1rem" }}
                    >
                        Hire Your Next <br />
                        <span style={{ color: "#2dd4a0" }}>Great Talent</span>{" "}
                        with HireNova
                    </h2>

                    {/* Description – white */}
                    <p style={{ color: "#e5e7eb", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.75rem", maxWidth: "420px", textAlign: "left" }}>
                        Join our team and be part of a people-first organization
                        that values growth, innovation and opportunity.
                    </p>

                    {/* CTA Button */}
                    <button
                        className="flex items-center gap-2 font-extrabold px-6 py-3 rounded-md tracking-widest uppercase mb-10"
                        style={{ backgroundColor: "#2dd4a0", color: "#062817", fontSize: "0.7rem" }}
                    >
                        Discover More
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>

                    {/* Bottom 3 highlights with dividers */}
                    <div className="flex items-center gap-0">
                        {highlights.map((h, i) => (
                            <div key={h.label} className="flex items-center">
                                <div className="flex items-center gap-2 px-4 first:pl-0">
                                    {h.icon}
                                    <span style={{ color: "#ffffff", fontSize: "0.78rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                                        {h.label}
                                    </span>
                                </div>
                                {/* Vertical divider */}
                                {i < highlights.length - 1 && (
                                    <div style={{ width: "1px", height: "28px", backgroundColor: "rgba(255,255,255,0.25)" }} />
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
