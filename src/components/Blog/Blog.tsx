import { useState } from "react";
import blogImg from "../../assets/img.jpg";

// ─── Blog posts data ──────────────────────────────────────────────────────────
const posts = [
    {
        day: "30",
        month: "Aug",
        category: "Recruitment",
        readTime: "5 Min Read",
        title: "How to Choose the Right Recruitment Partner for Your Business",
        desc: "Finding the right talent can be challenging. Here's how a trusted recruitment partner can make the process easier and faster.",
    },
    {
        day: "28",
        month: "Aug",
        category: "Hiring Tips",
        readTime: "6 Min Read",
        title: "Top 8 Hiring Trends in 2025 You Should Know",
        desc: "The recruitment landscape is evolving rapidly. Discover the key hiring trends shaping the future of work in 2025.",
    },
    {
        day: "25",
        month: "Aug",
        category: "Career Advice",
        readTime: "4 Min Read",
        title: "How to Prepare for a Successful Job Interview",
        desc: "From research to confidence, here are essential tips to help you ace your next interview and land your dream job.",
    },
    {
        day: "20",
        month: "Aug",
        category: "Recruitment",
        readTime: "3 Min Read",
        title: "Why Employer Branding Matters in Today's Job Market",
        desc: "Learn how a strong employer brand helps attract top talent and reduces hiring time significantly.",
    },
];

// ─── Folder icon ─────────────────────────────────────────────────────────────
function FolderIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
    );
}

// ─── Clock icon ───────────────────────────────────────────────────────────────
function ClockIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a5c38" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

// ─── Single Blog Card ─────────────────────────────────────────────────────────
function BlogCard({ post }: { post: typeof posts[0] }) {
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden flex-shrink-0 flex flex-col"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)", width: "100%" }}
        >
            {/* Image with date badge */}
            <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                    src={blogImg}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                {/* Date badge – top left */}
                <div
                    className="absolute top-3 left-3 rounded-lg flex flex-col items-center justify-center"
                    style={{ backgroundColor: "#1a5c38", width: "48px", height: "52px" }}
                >
                    <span style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 800, lineHeight: 1 }}>{post.day}</span>
                    <span style={{ color: "#2dd4a0", fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase" }}>{post.month}</span>
                </div>
            </div>

            {/* Card body */}
            <div className="px-5 pt-4 pb-5 flex flex-col flex-1">

                {/* Category + read time */}
                <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                        <FolderIcon />
                        <span style={{ color: "#1a5c38", fontSize: "0.72rem", fontWeight: 600 }}>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ClockIcon />
                        <span style={{ color: "#6b7280", fontSize: "0.72rem" }}>{post.readTime}</span>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "#f0f0f0", marginBottom: "12px" }} />

                {/* Title */}
                <h3
                    className="font-bold leading-snug"
                    style={{ color: "#0d2418", fontSize: "0.95rem", textAlign: "left", marginBottom: "0.5rem" }}
                >
                    {post.title}
                </h3>

                {/* Description */}
                <p style={{ color: "#6b7280", fontSize: "0.8rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                    {post.desc}
                </p>

                {/* Divider + Read More – always at bottom */}
                <div style={{ marginTop: "auto" }}>
                    <div style={{ height: "1px", backgroundColor: "#f0f0f0", marginBottom: "12px" }} />
                    <button className="flex items-center gap-2" style={{ color: "#1a5c38" }}>
                        <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>Read More</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
}

// ─── Blog Section ─────────────────────────────────────────────────────────────
export default function Blog() {
    const [current, setCurrent] = useState(0);
    const visible = posts.slice(current, current + 3);

    const prev = () => setCurrent((c) => Math.max(0, c - 1));
    const next = () => setCurrent((c) => Math.min(posts.length - 3, c + 1));

    return (
        <section
            className="relative w-full py-16 px-6 overflow-hidden"
            style={{ backgroundColor: "#edf7f2" }}
        >
            {/* Left dot grid decoration */}
            <div className="absolute left-4 top-16 z-0 grid grid-cols-4 gap-1.5">
                {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1a5c38", opacity: 0.2 }} />
                ))}
            </div>

            {/* Right circle decoration */}
            <div
                className="absolute right-0 top-8 rounded-bl-full z-0"
                style={{ width: "120px", height: "120px", backgroundColor: "#d1f0e6", opacity: 0.6 }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section heading */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-6 h-px bg-[#1a5c38]" />
                        <span style={{ color: "#1a5c38", fontSize: "0.7rem", letterSpacing: "0.22em", fontWeight: 600, textTransform: "uppercase" }}>
                            News &amp; Insights
                        </span>
                        <div className="w-6 h-px bg-[#1a5c38]" />
                    </div>

                    <h2
                        className="font-extrabold leading-tight"
                        style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "#0d2418", textAlign: "center", marginBottom: "1rem" }}
                    >
                        Latest Articles &amp;{" "}
                        <span style={{ color: "#1a5c38" }}>News</span> from the Blog
                    </h2>

                    <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: "1.7", maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
                        Stay updated with the latest hiring trends, workforce insights and expert
                        tips from our recruitment specialists.
                    </p>
                </div>

                {/* Cards + nav arrows */}
                <div className="relative flex items-center gap-4">

                    {/* Prev arrow */}
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors"
                        style={{
                            borderColor: "#1a5c38",
                            color: "#1a5c38",
                            opacity: current === 0 ? 0.4 : 1,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* 3 visible cards */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {visible.map((post, i) => (
                            <BlogCard key={i} post={post} />
                        ))}
                    </div>

                    {/* Next arrow */}
                    <button
                        onClick={next}
                        disabled={current >= posts.length - 3}
                        className="shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors"
                        style={{
                            borderColor: "#1a5c38",
                            color: "#1a5c38",
                            opacity: current >= posts.length - 3 ? 0.4 : 1,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    );
}
