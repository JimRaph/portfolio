import Image from 'next/image';
import { FaExternalLinkAlt, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { fetchArticles } from '@/app/utils/fetchArticles';

export default async function LatestPosts() {
  const articles = await fetchArticles();

  if (!articles || articles.length === 0) {
    return null;
  }

  const latestArticles = articles.slice(0, 6);

  return (
    <section className="py-24 px-6 bg-backg" id='articles'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-primary-text font-serif">
               Latest Articles & Insights
            </h2>
            <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
            <p className="text-center text-primary-text opacity-70 max-w-2xl mx-auto">
              Exploring the frontiers of AI, Software Engineering, and Foundation Models. 
              Freshly pulled from my blog.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {latestArticles.map((article, idx) => (
            <div 
              key={idx} 
              className="flex flex-col rounded-xl overflow-hidden border border-border-subtle transition-all duration-500 group bg-backg hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(255,195,0,0.05)] hover:-translate-y-2"
            >
              
              <div className="w-full h-52 relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <Image 
                  src={article.thumbnailUrl} 
                  alt={article.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-sm font-semibold flex items-center gap-2">
                    Read Full Story <FaExternalLinkAlt size={12} />
                  </span>
                </div>
                
                <div className="absolute top-4 left-4 bg-backg/90 backdrop-blur-sm border border-border-subtle px-3 py-1 rounded-full shadow-lg">
                    <span className="text-[10px] font-bold text-primary-text flex items-center gap-1">
                        <FaCalendarAlt size={8} className="text-accent" />
                        {new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(article.categories.slice(0, 2)).map((cat, i) => (
                    <span key={i} className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                      <FaTag size={8} /> {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary-text group-hover:text-accent transition-colors duration-300 line-clamp-2 font-serif leading-tight">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                
                <p className="text-sm text-primary-text opacity-70 mb-8 line-clamp-3 leading-relaxed">
                  {article.description}
                </p>

                <div className="mt-auto border-t border-border-subtle pt-6">
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-accent transition-all duration-300"
                    >
                      CONTINUE READING 
                      <FaExternalLinkAlt 
                        size={12} 
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                      />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
            <a 
              href="https://jimmywritessometimes.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-accent transition-all duration-300 border-2 border-accent rounded-full group hover:text-backg"
            >
                <span className="absolute inset-0 w-0 h-full transition-all duration-300 ease-out bg-accent group-hover:w-full"></span>
                <span className="relative flex items-center gap-2">
                    Explore My Writing <FaExternalLinkAlt size={14} />
                </span>
            </a>
        </div>
      </div>
    </section>
  );
}
