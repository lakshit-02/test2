import projectImg from "../../assets/img.jpg";

// ─── Projects data – yahan se change karo ────────────────────────────────────
const projects = [
    {
        tag: "IT & Technology",
        title: "Tech Talent Hiring",
        desc: "Successfully placed 50+ skilled professionals for a leading software company.",
    },
    {
        tag: "Healthcare",
        title: "Healthcare Staffing",
        desc: "Provided qualified healthcare professionals for multi-location hospitals.",
    },
    {
        tag: "Finance & Banking",
        title: "Leadership Hiring",
        desc: "Placed senior leadership roles for a growing financial services firm.",
    },
    {
        tag: "Manufacturing",
        title: "Workforce Solutions",
        desc: "Delivered end-to-end staffing solutions for a large manufacturing unit.",
    },
];

export default function Projects() {
    return (
        <section className="w-full py-16 px-6" style={{ backgroundColor: "#edf7f2" }}>
            <div className="max-w-7xl mx-auto">

                {/* ── Section heading ── */}
                <div className="text-center mb-12">

                    {/* OUR PROJECTS label */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-6 h-px bg-[#1a5c38]" />
                        <span style={{ color: "#1a5c38", fontSize: "0.7rem", letterSpacing: "0.22em", fontWeight: 600, textTransform: "uppercase" }}>
                            Our Projects
                        </span>
                        <div className="w-6 h-px bg-[#1a5c38]" />
                    </div>

                    {/* Main heading */}
                    <h2
                        className="font-extrabold leading-tight"
                        style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#0d2418", textAlign: "center", marginBottom: "1rem" }}
                    >
                        Recent Closed{" "}
                        <span style={{ color: "#1a5c38" }}>Projects</span>
                    </h2>

                    {/* Subtext */}
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
                        We take pride in helping businesses build stronger teams. Here are some of our recently
                        completed recruitment projects across different industries.
                    </p>
                </div>

                {/* ── 4 Cards grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="bg-white rounded-2xl overflow-hidden"
                            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.09)" }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden" style={{ height: "200px" }}>
                                <img
                                    src={projectImg}
                                    alt={p.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />

                                {/* Tag badge – bottom left on image */}
                                <span
                                    className="absolute bottom-3 left-3 text-white rounded-full px-3 py-1"
                                    style={{ backgroundColor: "#1a5c38", fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}
                                >
                                    {p.tag}
                                </span>
                            </div>

                            {/* Card body */}
                            <div className="px-4 pt-4 pb-5">
                                <h3
                                    className="font-bold"
                                    style={{ color: "#0d2418", fontSize: "1rem", textAlign: "left", marginBottom: "0.5rem" }}
                                >
                                    {p.title}
                                </h3>

                                <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                                    {p.desc}
                                </p>

                                {/* View Details link */}
                                <button className="flex items-center gap-2" style={{ color: "#1a5c38" }}>
                                    <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>View Details</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Dots indicator ── */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1a5c38" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#d1d5db" }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#d1d5db" }} />
                </div>

            </div>
        </section>
    );
}
