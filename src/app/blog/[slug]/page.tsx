import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ReadingProgress } from "@/components/ReadingProgress";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <h1>Blog post not found.</h1>
      </div>
    );
  }

  // Parse HTML to inject IDs and extract headings for the TOC
  const contentWithIds = blog.content.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (match, level, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  const headings = [...contentWithIds.matchAll(/<h([23]) id="([^"]+)">([^<]+)<\/h\1>/g)].map(
    (match) => ({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3],
    })
  );

  // Get two other blogs for "Read Next"
  const relatedBlogs = blogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#F48B47] selection:text-white">
      <ReadingProgress />
      <Navbar />

      <article className="pt-40 pb-24">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col lg:flex-row gap-16 relative">
          
          <div className="flex-1 max-w-[800px]">
            <Link href="/blog" className="text-[#F48B47] text-sm mb-12 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Engineering Blog
            </Link>

            <ScrollReveal>
              <header className="mb-16 border-b border-[#1c1c1c] pb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F48B47]">
                    {blog.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#333]" />
                  <span className="text-[12px] text-[#71717a]">
                    {blog.readTime}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#333]" />
                  <span className="text-[12px] text-[#71717a]">
                    {blog.date}
                  </span>
                </div>
                
                {blog.coverImage && (
                  <div className="w-full mb-12 overflow-hidden rounded-xl border border-[#1c1c1c] shadow-2xl relative">
                    <img 
                      src={blog.coverImage} 
                      alt={blog.title}
                      className="w-full h-auto max-h-[450px] object-cover hover:scale-105 transition-transform duration-[3s] ease-out"
                    />
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                  {blog.title}
                </h1>
                
                <p className="text-xl text-[#71717a] leading-relaxed font-light mb-8">
                  {blog.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#1c1c1c]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[#F48B47] font-bold text-lg border border-[#333]">
                      ZG
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Zohaib Global Engineering</div>
                      <div className="text-xs text-[#71717a]">Lead Infrastructure Team</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#71717a] uppercase tracking-wider font-semibold mr-2">Share Article</span>
                    <button className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#71717a] hover:text-[#F48B47] hover:border-[#F48B47] transition-all bg-[#0a0a0a]">
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center text-[#71717a] hover:text-[#F48B47] hover:border-[#F48B47] transition-all bg-[#0a0a0a]">
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </button>
                  </div>
                </div>
              </header>

              <div 
                className="
                  [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-white [&_h2]:mt-20 [&_h2]:mb-8 [&_h2]:scroll-mt-32
                  [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-16 [&_h3]:mb-6 [&_h3]:text-[#F48B47] [&_h3]:scroll-mt-32
                  [&_p]:text-[17px] [&_p]:md:text-[19px] [&_p]:text-[#d1d1d6] [&_p]:leading-[1.9] [&_p]:mb-8 [&_p]:font-light
                  [&_strong]:text-white [&_strong]:font-semibold
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:text-[#d1d1d6] [&_ul]:space-y-4
                  [&_li]:text-[17px] [&_li]:md:text-[19px] [&_li]:leading-[1.9] [&_li]:font-light
                  [&_em]:italic [&_em]:text-[#a1a1aa]
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[#F48B47] [&_blockquote]:bg-[#140b05]/50 [&_blockquote]:p-6 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:my-12 [&_blockquote]:text-white [&_blockquote]:text-xl [&_blockquote]:md:text-2xl [&_blockquote]:leading-relaxed
                  [&_hr]:border-[#1c1c1c] [&_hr]:my-20
                  [&_pre]:bg-[#0d0d0d] [&_pre]:border [&_pre]:border-[#1c1c1c] [&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:my-12 [&_pre]:transition-colors [&_pre]:duration-300 hover:[&_pre]:border-[#F48B47]/50 [&_pre]:shadow-2xl
                  [&_code]:font-mono [&_code]:text-[14px] [&_code]:text-[#F48B47] [&_code]:bg-[#1c1c1c] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
                  [&_pre_code]:text-[#a1a1aa] [&_pre_code]:bg-transparent [&_pre_code]:p-0
                  
                  /* Interactive Visuals */
                  [&_.article-inline-image]:w-full [&_.article-inline-image]:rounded-xl [&_.article-inline-image]:my-12 [&_.article-inline-image]:border [&_.article-inline-image]:border-[#1c1c1c] [&_.article-inline-image]:shadow-2xl [&_.article-inline-image]:transition-transform [&_.article-inline-image]:duration-700 hover:[&_.article-inline-image]:scale-[1.02]
                  
                  /* Pro Tip Box */
                  [&_.pro-tip-box]:bg-[#140b05] [&_.pro-tip-box]:border [&_.pro-tip-box]:border-[#F48B47]/30 [&_.pro-tip-box]:p-6 [&_.pro-tip-box]:md:p-8 [&_.pro-tip-box]:rounded-xl [&_.pro-tip-box]:my-12 [&_.pro-tip-box]:shadow-[0_0_30px_rgba(244,139,71,0.05)]
                  [&_.pro-tip-header]:flex [&_.pro-tip-header]:items-center [&_.pro-tip-header]:gap-3 [&_.pro-tip-header]:text-[#F48B47] [&_.pro-tip-header]:font-bold [&_.pro-tip-header]:mb-4 [&_.pro-tip-header]:text-lg
                  [&_.pro-tip-box_p]:mb-0 [&_.pro-tip-box_p]:text-[17px] [&_.pro-tip-box_p]:text-white [&_.pro-tip-box_p]:leading-relaxed
                "
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* Tags Section */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-16 pt-8 border-t border-[#1c1c1c]">
                  <h4 className="text-sm uppercase tracking-widest text-[#71717a] font-semibold mb-6">Topics Covered</h4>
                  <div className="flex flex-wrap gap-3">
                    {blog.tags.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 bg-[#1c1c1c] text-[#d1d1d6] text-xs font-semibold rounded-full border border-[#333] hover:border-[#F48B47] hover:text-[#F48B47] cursor-pointer transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Inline Call to Action */}
              {blog.cta && (
                <div className="mt-20 p-8 md:p-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#333] rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F48B47]/10 blur-[100px] rounded-full pointer-events-none" />
                  <h3 className="text-2xl font-bold text-white mb-4">{blog.cta.title}</h3>
                  <p className="text-[#a1a1aa] mb-8 max-w-lg leading-relaxed">
                    {blog.cta.description}
                  </p>
                  <Link href={blog.cta.buttonLink} className="inline-flex items-center justify-center px-6 py-3 bg-[#F48B47] text-white font-semibold rounded-lg hover:bg-[#e07a3e] transition-colors">
                    {blog.cta.buttonText}
                  </Link>
                </div>
              )}

            </ScrollReveal>
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block w-[300px] flex-shrink-0">
            <div className="sticky top-32">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#71717a] mb-6">Table of Contents</h4>
              <nav className="flex flex-col gap-3">
                {headings.map((heading, i) => (
                  <Link 
                    key={i} 
                    href={`#${heading.id}`}
                    className={`text-sm leading-snug transition-colors hover:text-[#F48B47] ${
                      heading.level === 2 ? 'text-[#d1d1d6] font-medium mt-2' : 'text-[#71717a] ml-4'
                    }`}
                  >
                    {heading.text}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

        </div>

        {/* Read Next / Related Articles Section */}
        <div className="max-w-[1200px] mx-auto px-8 mt-32 border-t border-[#1c1c1c] pt-24">
          <h2 className="text-3xl font-bold mb-12 text-white">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group block h-full">
                <div className="bg-[#121212] border border-[#1c1c1c] p-8 rounded-2xl h-full flex flex-col hover:border-[#F48B47]/50 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F48B47]/5 blur-[50px] group-hover:bg-[#F48B47]/10 transition-colors duration-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#F48B47] mb-4">
                    {related.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F48B47] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-[#a1a1aa] leading-relaxed mb-8 flex-grow">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center text-[#F48B47] font-semibold text-sm">
                    Read Masterclass 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
