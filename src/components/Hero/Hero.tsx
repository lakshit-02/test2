import heroBg from "../../assets/img.jpg";

// ─── Bottom stats – yahan se change karo ─────────────────────────────────────
const stats = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        line1: "Trusted",
        line2: "Recruitment",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
            </svg>
        ),
        line1: "Industry",
        line2: "Expertise",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="3 7 6 4 9 7" />
            </svg>
        ),
        line1: "Long-Term",
        line2: "Success",
    },
];

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">

            {/* Background image */}
            <img
                src={heroBg}
                alt="Office background"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />

            {/* Dark teal overlay – left side dark, right side transparent */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to right, rgba(5,45,35,0.95) 0%, rgba(5,45,35,0.85) 40%, rgba(5,45,35,0.4) 65%, rgba(5,45,35,0) 100%)"
                }}
            />

            {/* Content – sab left aligned, left side se start */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-10 py-24">
                <div className="max-w-2xl text-left">

                    {/* HR CONSULTANCY label + teal line */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-gray-300 text-xs tracking-[0.3em] uppercase font-medium">
                            HR Consultancy
                        </span>
                        <div className="w-12 h-px bg-[#2dd4a0]" />
                    </div>

                    {/* Big heading */}
                    <h1
                        className="font-extrabold leading-tight"
                        style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#ffffff", lineHeight: 1.05, marginBottom: "2rem", textAlign: "left" }}
                    >
                        Right People <br />
                        for the{" "}
                        <span style={{ color: "#2dd4a0" }}>Business</span>
                    </h1>

                    {/* Subtext */}
                    <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#d1d5db", marginBottom: "2rem" }}
                    >
                        We connect great companies with exceptional talent <br />
                        and build stronger teams for a brighter tomorrow.
                    </p>

                    {/* Discover More button */}
                    <button className="flex items-center gap-3 hover:bg-[#22b589] text-sm font-extrabold px-8 py-4 rounded-md tracking-widest uppercase transition-colors mb-12"
                        style={{ backgroundColor: "#2dd4a0", color: "#052d23" }}
                    >
                        Discover More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>

                    {/* Stats row */}
                    <div className="flex items-center gap-10">
                        {stats.map((stat) => (
                            <div key={stat.line1} className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                    style={{ backgroundColor: "#0d5c45" }}>
                                    {stat.icon}
                                </div>
                                <div className="text-sm font-medium leading-snug" style={{ color: "#ffffff" }}>
                                    <span className="block">{stat.line1}</span>
                                    <span className="block">{stat.line2}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
