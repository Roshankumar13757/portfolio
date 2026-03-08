import { useState } from "react";

const blogs = [
  {
    id: 1,
    category: "React",
    tag: "Frontend",
    title: "Mastering React Server Components in 2025",
    excerpt:
      "Dive deep into the new RSC paradigm — how it changes data fetching, bundle sizes, and the way you think about components forever.",
    date: "Feb 12, 2025",
    readTime: "8 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-blue-500 to-cyan-400",
    bgAccent: "bg-blue-500/10",
    borderAccent: "border-blue-500/20",
    tagColor: "text-blue-400",
  },
  {
    id: 2,
    category: "Node.js",
    tag: "Backend",
    title: "Building Scalable REST APIs with Express & PostgreSQL",
    excerpt:
      "A practical walkthrough of structuring your Node.js backend for scale — from folder architecture to query optimization with Prisma ORM.",
    date: "Jan 28, 2025",
    readTime: "12 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-emerald-500 to-teal-400",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "border-emerald-500/20",
    tagColor: "text-emerald-400",
  },
  {
    id: 3,
    category: "CSS",
    tag: "Design",
    title: "Tailwind CSS v4 — Everything That Changed",
    excerpt:
      "From @tailwind directives to @import, custom variants to zero-config — here's the complete breakdown of every breaking change in v4.",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-violet-500 to-purple-400",
    bgAccent: "bg-violet-500/10",
    borderAccent: "border-violet-500/20",
    tagColor: "text-violet-400",
  },
  {
    id: 4,
    category: "MongoDB",
    tag: "Database",
    title: "MongoDB to PostgreSQL — A Real Migration Story",
    excerpt:
      "How I migrated a production app from MongoDB to PostgreSQL using Prisma, what broke, what didn't, and every lesson learned along the way.",
    date: "Dec 22, 2024",
    readTime: "15 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-amber-500 to-orange-400",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
    tagColor: "text-amber-400",
  },
  {
    id: 5,
    category: "Next.js",
    tag: "Fullstack",
    title: "Next.js App Router — The Definitive Guide",
    excerpt:
      "Layouts, loading states, error boundaries, parallel routes — App Router is a paradigm shift. Here's how to truly master it.",
    date: "Dec 05, 2024",
    readTime: "10 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-pink-500 to-rose-400",
    bgAccent: "bg-pink-500/10",
    borderAccent: "border-pink-500/20",
    tagColor: "text-pink-400",
  },
  {
    id: 6,
    category: "DevOps",
    tag: "Tools",
    title: "Docker for JavaScript Developers — Start to Deploy",
    excerpt:
      "Everything you need to containerize your Node.js and Next.js apps, set up multi-stage builds, and push to production with confidence.",
    date: "Nov 18, 2024",
    readTime: "9 min read",
    author: "Roshan Kumar",
    avatar: "RK",
    gradient: "from-sky-500 to-blue-400",
    bgAccent: "bg-sky-500/10",
    borderAccent: "border-sky-500/20",
    tagColor: "text-sky-400",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Design", "Fullstack", "Tools"];

function BlogCard({ blog, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-gray-800 bg-[#0a0f1e] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-2xl cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: hovered ? "0 0 40px -10px rgba(99,102,241,0.3)" : "",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${blog.gradient}`} />

      {/* Glow blob on hover */}
      <div
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 bg-gradient-to-br ${blog.gradient} ${hovered ? "opacity-10" : "opacity-0"}`}
      />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Top row — category + read time */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${blog.bgAccent} border ${blog.borderAccent} ${blog.tagColor}`}
          >
            {blog.tag}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-400 leading-relaxed flex-1">{blog.excerpt}</p>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Footer — author + date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${blog.gradient} flex items-center justify-center text-white text-xs font-bold`}
            >
              {blog.avatar}
            </div>
            <span className="text-sm text-gray-300 font-medium">{blog.author}</span>
          </div>
          <span className="text-xs text-gray-500">{blog.date}</span>
        </div>

        {/* Read more link */}
        <div
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${blog.tagColor} opacity-0 group-hover:opacity-100 -mt-1`}
        >
          <span>Read Article</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.tag === activeCategory);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[200px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/50 text-gray-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Latest Articles
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Thoughts on JavaScript, full-stack development, and the tools I use to build things that matter.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-500/20 border-blue-500/40 text-blue-400"
                  : "bg-gray-800/40 border-gray-700/40 text-gray-400 hover:border-gray-500 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 text-blue-400 font-medium hover:from-blue-500/20 hover:to-teal-500/20 transition-all duration-300 hover:scale-105">
            View All Articles
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}