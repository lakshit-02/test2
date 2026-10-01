// ─── Stats data – yahan se numbers/labels change karo ────────────────────────
const stats = [
    {
        icon: (
            // Search / employer icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="17" r="3" />
                <line x1="19.5" y1="19.5" x2="22" y2="22" />
            </svg>
        ),
        value: "697",
        label: "Employer Solutions",
    },
    {
        icon: (
            // Person with document icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.5">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="12" y2="15" />
                <circle cx="12" cy="6" r="1.5" fill="#2dd4a0" />
            </svg>
        ),
        value: "430",
        label: "People Job Seekers",
    },
    {
        icon: (
            // Chart / growth icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.5">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="3 8 6 5 9 8" />
            </svg>
        ),
        value: "98%",
        label: "Success Rates",
    },
    {
        icon: (
            // Happy customers / hand holding people icon
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2dd4a0" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        value: "800",
        label: "Happy Customers",
    },
];

// ─── StatsBar Component ───────────────────────────────────────────────────────
export default function StatsBar() {
    return (
        <section style={{ backgroundColor: "#0d3d26" }} className="w-full py-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* 4 columns – each separated by a vertical divider */}
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center">

                            {/* Stat item */}
                            <div className="flex flex-col items-center text-center flex-1 py-4 px-6">

                                {/* Circle icon */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                    style={{ border: "2px solid #2dd4a0" }}
                                >
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <p className="text-white font-extrabold" style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
                                    {stat.value}
                                </p>

                                {/* Label */}
                                <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>{stat.label}</p>
                            </div>

                            {/* Vertical divider – show between items, not after last */}
                            {i < stats.length - 1 && (
                                <div
                                    className="h-16 w-px shrink-0"
                                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
