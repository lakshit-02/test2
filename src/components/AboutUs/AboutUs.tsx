import aboutImg from "../../assets/img.jpg";

// ─── Feature list ─────────────────────────────────────────────────────────────
const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Understand Your Needs",
        desc: "We take time to understand your business goals and hiring requirements.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="#1a5c38" />
            </svg>
        ),
        title: "Find the Perfect Candidate",
        desc: "Our expert team sources and screens the best talent for your success.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        title: "Build Long-Term Relationships",
        desc: "We focus on lasting partnerships, not just placements.",
    },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
    { value: "500+", label: "Successful Placements" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Industries Served" },
];

export default function AboutUs() {
    return (
        <section className="w-full bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-center">

                    {/* ══ LEFT – all text left aligned ═════════════════════════════════ */}
                    <div className="flex-1 min-w-0 text-left">

                        {/* ABOUT US label */}
                        <div className="flex items-center gap-3 mb-5">
                            <span
                                className="text-xs tracking-[0.25em] uppercase font-semibold"
                                style={{ color: "#2dd4a0" }}
                            >
                                About Us
                            </span>
                            <div className="w-10 h-px" style={{ backgroundColor: "#2dd4a0" }} />
                        </div>

                        {/* Heading */}
                        <h2
                            className="font-extrabold leading-tight"
                            style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "#0d2418", textAlign: "left", marginBottom: "1.25rem" }}
                        >
                            Your Trusted <br />
                            <span style={{ color: "#1a5c38" }}>Recruitment Partner</span>
                        </h2>

                        {/* Description */}
                        <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#6b7280", maxWidth: "480px", marginBottom: "1.75rem" }}
                        >
                            At HireNova, we believe the right people can transform businesses
                            and create brighter futures. We are a dedicated HR consultancy
                            focused on connecting exceptional talent with forward-thinking
                            companies. Our goal is simple — to help organizations grow through
                            the power of people.
                        </p>

                        {/* Features */}
                        <div className="flex flex-col gap-5 mb-9">
                            {features.map((f) => (
                                <div key={f.title} className="flex items-start gap-4">

                                    {/* Light mint circle with green icon */}
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ backgroundColor: "#d1f0e6" }}
                                    >
                                        {f.icon}
                                    </div>

                                    <div>
                                        <p
                                            className="text-sm font-bold"
                                            style={{ color: "#0d2418", marginBottom: "0.125rem" }}
                                        >
                                            {f.title}
                                        </p>
                                        <p className="text-sm" style={{ color: "#6b7280" }}>
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <button
                            className="flex items-center gap-3 text-white text-xs font-extrabold px-7 py-3.5 rounded-lg tracking-widest uppercase transition-colors"
                            style={{ backgroundColor: "#1a5c38" }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#154d2f")}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1a5c38")}
                        >
                            Discover More
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>

                    </div>

                    {/* ══ RIGHT – image with shape + overlaid cards ═════════════════════ */}
                    <div className="flex-1 relative w-full">
                        <div className="relative" style={{ paddingBottom: "100px" }}>

                            {/* Image – left side big round, right side small round */}
                            <div
                                className="overflow-hidden w-full"
                                style={{ height: "420px", borderRadius: "160px 16px 16px 160px" }}
                            >
                                <img
                                    src={aboutImg}
                                    alt="About HireNova"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Quote card – bottom-left, sticks out */}
                            <div
                                className="absolute bg-white rounded-2xl shadow-xl px-5 py-4"
                                style={{
                                    bottom: "10px",
                                    left: "30px",
                                    maxWidth: "220px",
                                    borderLeft: "4px solid #1a5c38",
                                }}
                            >
                                <div className="flex gap-0.5 mb-2">
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="#1a5c38">
                                        <path d="M0 16V9.6C0 4 3.2 1.1 9.6 0l1.4 2.3C7.8 3.2 6 4.9 5.7 8H9V16H0zm11 0V9.6C11 4 14.2 1.1 20.6 0L22 2.3c-3.2.9-5 2.6-5.3 5.7H20V16H11z" />
                                    </svg>
                                </div>
                                <p
                                    className="text-sm font-semibold leading-snug"
                                    style={{ color: "#374151" }}
                                >
                                    Connecting Talent. <br /> Building Brighter <br /> Futures.
                                </p>
                            </div>

                            {/* Stats card – bottom-right */}
                            <div
                                className="absolute rounded-2xl px-6 py-4 flex flex-col"
                                style={{
                                    bottom: "10px",
                                    right: "0px",
                                    minWidth: "190px",
                                    backgroundColor: "#1a5c38",
                                }}
                            >
                                {stats.map((s, i) => (
                                    <div key={s.label}>
                                        <div className="flex items-center gap-3 py-2.5">
                                            <div
                                                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                            >
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                    <circle cx="9" cy="7" r="4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-white text-lg font-extrabold leading-none">{s.value}</p>
                                                <p className="text-xs mt-0.5" style={{ color: "#86efac" }}>{s.label}</p>
                                            </div>
                                        </div>
                                        {i < stats.length - 1 && (
                                            <div className="w-full h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
