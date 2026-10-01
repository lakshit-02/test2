import serviceImg from "../../assets/img.jpg";

// ─── 6 service cards – yahan se title/description change karo ─────────────────
const services = [
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
        title: "HR Consulting",
        desc: "Get expert guidance to build efficient HR strategies, policies and processes tailored to your business goals.",
    },
    {
        number: "02",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="11" x2="15" y2="11" />
                <line x1="9" y1="15" x2="12" y2="15" />
            </svg>
        ),
        title: "Talent Acquisition",
        desc: "We help you find, attract and hire the right talent to build high-performing teams across industries.",
    },
    {
        number: "03",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
        title: "Staffing Solutions",
        desc: "Flexible staffing solutions to meet your short-term and long-term workforce requirements.",
    },
    {
        number: "04",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        title: "Training & Development",
        desc: "Empower your workforce with customized training programs that drive performance and career growth.",
    },
    {
        number: "05",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Payroll Management",
        desc: "Streamline your payroll operations with accurate, compliant and timely payroll processing services.",
    },
    {
        number: "06",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        title: "Employee Engagement",
        desc: "Build a thriving workplace culture with strategies that boost employee satisfaction and retention.",
    },
];

// ─── Services Section ─────────────────────────────────────────────────────────
export default function Services() {
    return (
        <section className="w-full py-16 px-6" style={{ backgroundColor: "#f0faf5" }}>
            <div className="max-w-7xl mx-auto">

                {/* ── Section heading – centered ── */}
                <div className="text-center mb-12">

                    {/* OUR SERVICES label with lines */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-10 h-px bg-[#1a5c38]" />
                        <span className="text-[#1a5c38] text-xs tracking-[0.25em] uppercase font-semibold">
                            Our Services
                        </span>
                        <div className="w-10 h-px bg-[#1a5c38]" />
                    </div>

                    {/* Main heading */}
                    <h2
                        className="font-extrabold leading-tight"
                        style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#0d2418", textAlign: "center", marginBottom: "1rem" }}
                    >
                        HR Solutions for a{" "}
                        <span style={{ color: "#1a5c38" }}>Brighter Tomorrow</span>
                    </h2>

                    {/* Subtext */}
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.65", maxWidth: "36rem", margin: "0 auto", textAlign: "center" }}>
                        We provide end-to-end HR services designed to help businesses attract,
                        develop and retain the right talent, ensuring long-term growth and success.
                    </p>
                </div>

                {/* ── 6 Cards grid – 3 columns ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div
                            key={s.number}
                            className="bg-white rounded-2xl overflow-hidden"
                            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
                        >
                            {/* Card image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={serviceImg}
                                    alt={s.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                                />

                                {/* Green icon box – bottom left */}
                                <div className="absolute bottom-4 left-5 w-11 h-11 bg-[#1a5c38] rounded-xl flex items-center justify-center">
                                    {s.icon}
                                </div>

                                {/* Card number – bottom right */}
                                <span className="absolute bottom-4 right-5 text-white text-sm font-light opacity-80">
                                    {s.number}
                                </span>
                            </div>

                            {/* Card body */}
                            <div className="px-5 pt-5 pb-0">

                                <h3
                                    className="text-lg font-bold"
                                    style={{ color: "#0d2418", textAlign: "left", marginBottom: "0.5rem" }}
                                >
                                    {s.title}
                                </h3>

                                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.65", marginBottom: "1.25rem" }}>
                                    {s.desc}
                                </p>

                                {/* Read More link */}
                                <div className="flex items-center gap-2 pb-5">
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: "#1a5c38" }}
                                    >
                                        Read More
                                    </span>
                                    <button
                                        className="w-7 h-7 rounded-full border flex items-center justify-center transition-colors hover:text-white"
                                        style={{ borderColor: "#1a5c38", color: "#1a5c38" }}
                                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a5c38")}
                                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>

                            </div>

                            {/* Bottom green strip */}
                            <div className="h-1.5 w-full rounded-b-2xl" style={{ backgroundColor: "#1a5c38" }} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
