import bgImg from "../../assets/img.jpg";

const advantages = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.6">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <path d="M11 8v3l2 2" />
            </svg>
        ),
        title: "Sourcing Best Resources",
        desc: "We find and connect you with top talent across industries.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Save Your Time & Money",
        desc: "Streamlined hiring process for better efficiency and lower costs.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Partners in Team Building",
        desc: "We work as your hiring partner to build stronger and high-performing teams.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.6">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="3 7 6 4 9 7" />
            </svg>
        ),
        title: "Long-Term Success",
        desc: "Our focus is on creating lasting growth through the right people.",
    },
];

const highlights = [
    {
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.4">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        label: "Expert Team",
    },
    {
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.4">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        label: "Tailored Solutions",
    },
    {
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        label: "Proven Results",
    },
];

export default function WhyUs() {
    return (
        // Outer wrapper – position:relative so card can overlap bottom section
        <div className="w-full relative">

            {/* ══ TOP: Dark green section ════════════════════════════════════════════ */}
            <section
                className="relative w-full overflow-visible"
                style={{ backgroundColor: "#062817" }}
            >
                {/* Bg image */}
                <img
                    src={bgImg}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    style={{ opacity: 0.22 }}
                />

                {/* Gradient overlay – left dark, right transparent (Hero jaisa) */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(to right, rgba(5,45,35,0.97) 0%, rgba(5,45,35,0.88) 35%, rgba(5,45,35,0.55) 60%, rgba(5,45,35,0.15) 100%)"
                    }}
                />

                {/* Diagonal cut bottom – left upar, right neeche (reference image jaisa) */}
                <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{
                        height: "80px",
                        backgroundColor: "white",
                        clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)",
                        zIndex: 5,
                    }}
                />

                {/* Content row */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-28">
                    <div className="flex flex-col lg:flex-row gap-10 items-start">

                        {/* ── LEFT ── */}
                        <div className="flex-1 min-w-0">

                            <div className="flex items-center gap-3 mb-4">
                                <div style={{ width: "32px", height: "1px", backgroundColor: "#2dd4a0" }} />
                                <span style={{ color: "#2dd4a0", fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
                                    Trusted Staffing Partner
                                </span>
                            </div>

                            <h2
                                className="font-extrabold leading-tight"
                                style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "#ffffff", textAlign: "left", marginBottom: "1.25rem" }}
                            >
                                HireNova Trusted Staffing &{" "}
                                <span style={{ color: "#2dd4a0" }}>Recruitment</span> Agency
                            </h2>

                            <p style={{ color: "#d1d5db", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.75rem", maxWidth: "400px" }}>
                                We're solving recruitment problems using technology, connecting
                                the right people with the right opportunities.
                            </p>

                            <div className="flex items-center gap-5 mb-10">
                                <button
                                    className="flex items-center gap-2 font-extrabold px-6 py-3 rounded-md tracking-widest uppercase"
                                    style={{ backgroundColor: "#2dd4a0", color: "#062817", fontSize: "0.7rem" }}
                                >
                                    Discover More
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>

                                <button className="flex items-center gap-3">
                                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </div>
                                    <span style={{ color: "#ffffff", fontSize: "0.75rem", lineHeight: "1.4", textAlign: "left" }}>
                                        Watch Our<br />Process
                                    </span>
                                </button>
                            </div>

                            <div className="flex items-center gap-6">
                                {[
                                    { value: "800+", label: "Happy Clients" },
                                    { value: "50K+", label: "Candidates Placed" },
                                    { value: "10+", label: "Years of Experience" },
                                ].map((s, i) => (
                                    <div key={s.label} className="flex items-center gap-6">
                                        <div>
                                            <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>{s.value}</p>
                                            <p style={{ color: "#9ca3af", fontSize: "0.72rem", marginTop: "4px" }}>{s.label}</p>
                                        </div>
                                        {i < 2 && <div style={{ width: "1px", height: "36px", backgroundColor: "rgba(255,255,255,0.25)" }} />}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* ── RIGHT: Card – extends into bottom white section ── */}
                        <div
                            style={{
                                flex: "0 0 460px",
                                maxWidth: "460px",
                                position: "relative",
                                zIndex: 30,
                                // Pulls card down so it overlaps into white section below
                                marginBottom: "-160px",
                            }}
                        >
                            <div
                                className="rounded-2xl overflow-hidden"
                                style={{
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
                                }}
                            >
                                {/* Header */}
                                <div className="px-6 py-4" style={{ backgroundColor: "#1a5c38" }}>
                                    <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem", margin: 0 }}>
                                        HireNova Working Advantages
                                    </h3>
                                </div>

                                {/* Rows */}
                                <div className="px-5 py-2">
                                    {advantages.map((a, i) => (
                                        <div key={a.title}>
                                            <div className="flex items-center gap-4 py-4">
                                                <div
                                                    className="shrink-0 flex items-center justify-center rounded-full"
                                                    style={{ width: "48px", height: "48px", backgroundColor: "#d1f0e6" }}
                                                >
                                                    {a.icon}
                                                </div>
                                                <div style={{ flex: "0 0 140px" }}>
                                                    <p style={{ color: "#0d2418", fontSize: "0.82rem", fontWeight: 700, lineHeight: "1.3" }}>
                                                        {a.title}
                                                    </p>
                                                </div>
                                                <p style={{ color: "#9ca3af", fontSize: "0.75rem", lineHeight: "1.5", flex: 1 }}>
                                                    {a.desc}
                                                </p>
                                            </div>
                                            {i < advantages.length - 1 && (
                                                <div style={{ width: "100%", height: "1px", backgroundColor: "#f0f0f0" }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ══ BOTTOM: White section – highlights ════════════════════════════════ */}
            {/* paddingTop compensates for card overlap */}
            <section className="w-full bg-white px-6" style={{ paddingTop: "60px", paddingBottom: "40px" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-16">
                        {highlights.map((h) => (
                            <div key={h.label} className="flex flex-col items-center gap-2">
                                {h.icon}
                                <span style={{ color: "#0d2418", fontSize: "0.9rem", fontWeight: 700 }}>
                                    {h.label}
                                </span>
                                <div style={{ width: "28px", height: "2px", backgroundColor: "#1a5c38", borderRadius: "2px" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
