'use client'
import Image from 'next/image'

const Hero = () => {
  const jumpTo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, section: string) => {
    e.preventDefault()
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="min-h-[90vh] w-full px-6 pt-16 pb-12 relative overflow-hidden bg-backg" id='home'>
      

      <div className='absolute inset-0 opacity-20 pointer-events-none'>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg, 
              var(--accent-color) 0, 
              var(--accent-color) 1px, 
              transparent 1px, 
              transparent 15px
            )`,
          }}
        />
      </div>

      <div className="flex flex-col xl:flex-row gap-12 w-full max-w-5xl mx-auto items-center relative z-10">
        
        <div className="flex-1 space-y-6 text-center xl:text-left order-last xl:order-first">

          <p className="text-sm sm:text-xl font-medium tracking-widest uppercase mb-2 text-accent">
             AI/ML & Full-Stack Engineer
          </p>
          

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight font-serif text-primary-text">
            Building <span>Intelligent</span> Systems
          </h1>
          
          <h2 className="text-2xl font-normal text-primary-text opacity-60">
            Building end-to-end systems that bridge intelligence and interaction
          </h2>
          
          <p className="text-lg text-primary-text opacity-80 max-w-xl mx-auto xl:mx-0">
             As an engineer fluent across the data and application stack, I leverage <span className='font-extrabold'>Data Science</span> for 
             actionable insights, design and deploy scalable <span className='font-extrabold'>ML/AI models</span>, and integrate them seamlessly
             using <span className='font-extrabold'>Full-Stack Web Development</span> to create high-performance, intelligent products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-6">
            <button 
              className="px-8 py-3 rounded-md font-bold transition-all duration-300 cursor-pointer z-2 bg-accent text-backg hover:opacity-90"
              onClick={(e)=>jumpTo(e, 'project')}>
              View Case Studies
            </button>
            
            <button 
              className="px-8 py-3 rounded-md transition-all duration-300 cursor-pointer z-2 border border-accent text-accent hover:bg-accent/5"
              onClick={(e)=>jumpTo(e, 'contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className='shrink-0 w-[250px] h-[350px] md:w-[350px] md:h-[450px] relative 
        group overflow-hidden border-2 rounded-lg shadow-xl border-accent'
        >
          <Image src='/i.jpg' alt='image of me' 
          sizes="(max-width: 768px) 300px, 450px"
          fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

      </div>
    </section>
  );
};

export default Hero;