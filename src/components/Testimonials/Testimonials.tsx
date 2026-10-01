import { useState } from "react";

// ─── Testimonials data ────────────────────────────────────────────────────────
const testimonials = [
    {
        stars: 5,
        text: "HireNova helped us find the right talent quickly. Their team understood our requirements and provided excellent candidates. The entire process was smooth and professional.",
        name: "Rahul Mehta",
        role: "HR Manager, TechSolutions",
        initials: "RM",
    },
    {
        stars: 5,
        text: "A reliable and professional recruitment partner. They understood our business needs and delivered quality candidates every time. Highly recommended!",
        name: "Priya Sharma",
        role: "Co Founder, GrowthEdge",
        initials: "PS",
    },
    {
        stars: 5,
        text: "Outstanding service from start to finish. HireNova truly understands what businesses need and matches the right talent with precision and care.",
        name: "Amit Verma",
        role: "CEO, InnovateTech",
        initials: "AV",
    },
];

// ─── Stars component ──────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

// ─── Quote icon ───────────────────────────────────────────────────────────────
function QuoteIcon() {
    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#1a5c38" }}
        >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="white">
                <path d="M0 14V8.4C0 3.6 2.8 1 8.4 0l1.2 2C6.8 2.8 5.2 4.4 5 7h3V14H0zm10 0V8.4C10 3.6 12.8 1 18.4 0l1.2 2c-2.8.8-4.4 2.4-4.6 5h3V14H10z" />
            </svg>
        </div>
    );
}

// ─── Single testimonial card ──────────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
    return (
        <div
            className="bg-white rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", minHeight: "320px" }}
        >
            {/* Top row: stars + quote icon */}
            <div className="flex items-start justify-between mb-4">
                <Stars count={t.stars} />
                <QuoteIcon />
            </div>

            {/* Review text */}
            <p style={{ color: "#4b5563", fontSize: "0.85rem", lineHeight: "1.7", flex: 1, marginBottom: "1.25rem" }}>
                '{t.text}'
            </p>

            {/* Author row */}
            <div className="flex items-center gap-3">
                {/* Avatar circle */}
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-sm"
                    style={{ backgroundColor: "#1a5c38" }}
                >
                    {t.initials}
                </div>
                <div>
                    <p style={{ color: "#0d2418", fontSize: "0.875rem", fontWeight: 700 }}>{t.name}</p>
                    <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>{t.role}</p>
                </div>
            </div>

            {/* Bottom-right decorative green corner */}
            <div
                className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-3xl"
                style={{ backgroundColor: "#1a5c38", opacity: 0.15 }}
            />
        </div>
    );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    // Show 2 cards at a time
    const visible = [
        testimonials[current % testimonials.length],
        testimonials[(current + 1) % testimonials.length],
    ];

    return (
        <section
            className="relative w-full py-16 px-6 overflow-hidden"
            style={{ backgroundColor: "#edf7f2" }}
        >

            {/* Top-right decorative dark green circle */}
            <div
                className="absolute top-0 right-0 rounded-bl-full z-0"
                style={{
                    width: "220px",
                    height: "220px",
                    backgroundColor: "#1a5c38",
                    opacity: 0.9,
                }}
            />

            {/* Top-right dot grid */}
            <div className="absolute top-10 right-52 z-0 grid grid-cols-5 gap-1.5">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#1a5c38", opacity: 0.25 }}
                    />
                ))}
            </div>

            {/* Big decorative quote mark behind content */}
            <div
                className="absolute left-56 top-6 z-0 select-none pointer-events-none"
                style={{ fontSize: "180px", color: "#d1f0e6", lineHeight: 1, fontFamily: "serif" }}
            >
                "
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* ── LEFT: heading + nav ── */}
                    <div className="lg:w-72 shrink-0" style={{ minHeight: "320px" }}>

                        {/* Label */}
                        <div className="flex items-center gap-3 mb-4">
                            <div style={{ width: "28px", height: "2px", backgroundColor: "#1a5c38" }} />
                            <span style={{ color: "#1a5c38", fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
                                Our Testimonials
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="font-extrabold leading-tight mb-4"
                            style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#0d2418", textAlign: "left" }}
                        >
                            What They're <br />
                            Talking About?
                        </h2>

                        {/* Description */}
                        <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: "1.7", marginBottom: "2rem", textAlign: "left" }}>
                            Hear from our valued clients about their experience working with us and how we
                            have helped them build stronger teams and achieve their goals.
                        </p>

                        {/* Prev / Next buttons */}
                        <div className="flex items-center gap-3 mb-4">
                            <button
                                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                                style={{ backgroundColor: "#1a5c38", color: "white" }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:bg-[#1a5c38] hover:text-white"
                                style={{ borderColor: "#1a5c38", color: "#1a5c38" }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className="cursor-pointer rounded-full transition-all"
                                    style={{
                                        width: i === current ? "24px" : "10px",
                                        height: "10px",
                                        backgroundColor: i === current ? "#1a5c38" : "#d1d5db",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: 2 cards ── */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {visible.map((t, i) => (
                            <TestimonialCard key={i} t={t} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
