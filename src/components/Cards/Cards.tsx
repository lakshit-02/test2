import cardImg from "../../assets/img.jpg";

// ─── Cards data – yahan se change karo ───────────────────────────────────────
const cards = [
    {
        number: "01",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Recruitment Solutions",
        description:
            "We help you hire the right talent with a streamlined and efficient recruitment process.",
    },
    {
        number: "02",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M8.46 8.46a5 5 0 0 0 0 7.07" />
            </svg>
        ),
        title: "Improved Resources",
        description:
            "Access skilled professionals and flexible workforce solutions for your growing needs.",
    },
    {
        number: "03",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="3 7 6 4 9 7" />
            </svg>
        ),
        title: "Leadership Training",
        description:
            "Develop future-ready leaders with our customized training and development programs.",
    },
];

// ─── Cards Section ────────────────────────────────────────────────────────────
export default function Cards() {
    return (
        <section className="w-full bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* 3 column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="bg-white rounded-2xl overflow-hidden"
                            style={{
                                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                            }}
                        >
                            {/* ── Top image area ── */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={cardImg}
                                    alt={card.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />

                                {/* Green icon box – bottom left over image */}
                                <div className="absolute bottom-4 left-5 w-11 h-11 bg-[#1a5c38] rounded-xl flex items-center justify-center">
                                    {card.icon}
                                </div>

                                {/* Card number – bottom right over image */}
                                <span className="absolute bottom-4 right-5 text-white text-sm font-light opacity-80">
                                    {card.number}
                                </span>
                            </div>

                            {/* ── Card body ── */}
                            <div className="px-5 pt-5 pb-6">

                                {/* Title */}
                                <h3 style={{ color: "#1f2937", fontSize: "1.125rem", fontWeight: 700, textAlign: "left", marginBottom: "0.5rem" }}>
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.65", marginBottom: "1.25rem" }}>
                                    {card.description}
                                </p>

                                {/* Find Your Solution link */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[#1a5c38] text-xs font-bold tracking-widest uppercase">
                                        Find Your Solution
                                    </span>

                                    {/* Green line + arrow button */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-px bg-[#2dd4a0]" />
                                        <button className="w-8 h-8 rounded-full border border-[#1a5c38] flex items-center justify-center text-[#1a5c38] hover:bg-[#1a5c38] hover:text-white transition-colors">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* ── Bottom green strip ── */}
                            <div className="h-1.5 w-full bg-[#1a5c38] rounded-b-2xl" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
