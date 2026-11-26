import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import AdSenseBanner from "@/components/ads/AdSenseBanner";
import EzoicPlaceholder from "@/components/ads/EzoicPlaceholder";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Viral Marketing Solution",
    };
  }

  return {
    title: `${post.title} | Viral Marketing Solution`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Article JSON-LD Schema for E-E-A-T and Google Rich Results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-11-01T08:00:00+05:00",
    dateModified: "2026-11-12T12:00:00+05:00",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: "Viral Marketing Solution",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Viral Marketing Solution",
      logo: {
        "@type": "ImageObject",
        url: "https://theviralmarketing.pk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://theviralmarketing.pk/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight size={12} />
        <Link href="/blog" className="hover:text-white transition-colors">
          Insights
        </Link>
        <ChevronRight size={12} />
        <span className="text-[#39D7FF] truncate max-w-[280px] sm:max-w-none">{post.title}</span>
      </nav>

      {/* Category & Read Time Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF]">
          {post.category}
        </span>
        <span className="text-xs text-white/50 flex items-center gap-1">
          <Clock size={13} /> {post.readTime}
        </span>
        <span className="text-xs text-white/50 flex items-center gap-1">
          <Calendar size={13} /> {post.date}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-[1.05]">
        {post.title}
      </h1>

      {/* Excerpt / Subheading */}
      <p className="text-base sm:text-xl text-white/75 leading-relaxed font-sans mb-8">
        {post.excerpt}
      </p>

      {/* Author Bar */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-bg-secondary/40 backdrop-blur-sm mb-10">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#39D7FF] shrink-0">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">{post.author.name}</p>
            <p className="text-xs text-[#39D7FF] font-medium">{post.author.role}</p>
          </div>
        </div>

        <Link
          href="/about"
          className="text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-white underline underline-offset-4 hidden sm:block"
        >
          View Team Credentials &rarr;
        </Link>
      </div>

      {/* Key Takeaways Callout Box */}
      <div className="p-6 rounded-2xl border border-accent-cyan-dim/40 bg-gradient-to-br from-bg-secondary/80 to-bg-primary/90 backdrop-blur-md mb-12 shadow-glow/10">
        <div className="flex items-center gap-2 text-[#39D7FF] font-display font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
          <Sparkles size={16} /> Key Strategic Takeaways
        </div>
        <ul className="space-y-3">
          {post.keyTakeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 leading-relaxed">
              <CheckCircle2 size={16} className="text-[#39D7FF] shrink-0 mt-0.5" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Responsive Ad Container (Natural In-Content Placement) */}
      <AdSenseBanner slot="1234567890" format="auto" />

      {/* Article Body Content */}
      <article className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
        {post.content
          .trim()
          .split("\n\n")
          .map((block, idx) => {
            const trimmed = block.trim();

            // Render Headings
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight pt-8 pb-2 border-b border-white/10"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="font-display text-lg sm:text-xl font-bold uppercase text-[#39D7FF] tracking-wide pt-4"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Render Blockquote
            if (trimmed.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="p-4 my-4 border-l-4 border-[#39D7FF] bg-bg-secondary/40 rounded-r-xl italic text-white/90"
                >
                  {trimmed.replace(/> /g, "")}
                </blockquote>
              );
            }

            // Render Markdown Table
            if (trimmed.includes("|") && trimmed.includes("\n|")) {
              const rows = trimmed.split("\n").filter((r) => !r.includes("---"));
              return (
                <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <tbody>
                      {rows.map((row, rIdx) => {
                        const cols = row
                          .split("|")
                          .map((c) => c.trim())
                          .filter((c) => c.length > 0);
                        const isHeader = rIdx === 0;
                        return (
                          <tr
                            key={rIdx}
                            className={isHeader ? "bg-bg-secondary text-[#39D7FF] font-bold" : "border-t border-white/5"}
                          >
                            {cols.map((col, cIdx) => (
                              <td key={cIdx} className="p-3">
                                {col}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }

            // Render Code or Formulas
            if (trimmed.startsWith("```")) {
              const cleaned = trimmed.replace(/```[a-z]*\n?/g, "");
              return (
                <pre
                  key={idx}
                  className="p-4 my-4 rounded-xl bg-black/60 border border-accent-cyan-dim/30 text-xs sm:text-sm text-[#39D7FF] overflow-x-auto font-mono"
                >
                  <code>{cleaned}</code>
                </pre>
              );
            }

            // Render Unordered Lists
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n- ").map((i) => i.replace(/^- /, ""));
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 text-white/75">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              );
            }

            // Render Ordered Lists
            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split(/\n\d+\.\s/).map((i) => i.replace(/^\d+\.\s/, ""));
              return (
                <ol key={idx} className="list-decimal pl-6 space-y-2 text-white/75">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ol>
              );
            }

            // Default Paragraph
            return (
              <p key={idx} className="leading-relaxed">
                {trimmed}
              </p>
            );
          })}
      </article>

      {/* Secondary Bottom Ad Container */}
      <AdSenseBanner slot="9876543210" format="horizontal" />

      {/* Author Bio Box */}
      <div className="p-6 sm:p-8 my-12 rounded-2xl border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-md flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#39D7FF] shrink-0 shadow-[0_0_20px_rgba(57,215,255,0.25)]">
          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
        </div>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <h3 className="font-display text-lg font-bold uppercase text-white">{post.author.name}</h3>
            <span className="text-xs text-[#39D7FF] font-semibold">{post.author.role}</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{post.author.bio}</p>
          <p className="text-xs text-white/40 pt-2 border-t border-white/5">
            Based at Viral Marketing Solution HQ &bull; Badar Commercial Phase 5, DHA, Karachi, PK
          </p>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-12 border-t border-accent-cyan-dim/20">
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-6">
            Recommended Follow-Up Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group p-5 rounded-xl border border-accent-cyan-dim/20 bg-bg-secondary/40 hover:border-[#39D7FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#39D7FF] tracking-wider block mb-2">
                    {rel.category} &bull; {rel.readTime}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#39D7FF] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-4 text-xs font-bold text-[#39D7FF] flex items-center gap-1">
                  Read Guide &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Ezoic Ad Placement */}
      <EzoicPlaceholder id={102} />

      {/* Back to Blog Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-cyan-dim/30 bg-bg-secondary/50 text-[#39D7FF] text-xs font-bold uppercase tracking-widest hover:bg-[#39D7FF] hover:text-bg-primary transition-all duration-300"
        >
          <ArrowLeft size={14} /> Back to All Insights
        </Link>
      </div>
    </div>
  );
}
