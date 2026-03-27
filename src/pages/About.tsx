import { Monitor, Film, TrendingUp, Layers, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const competencies = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Ecosystem & Web Strategy",
      description: "Led comprehensive Website Life-cycle Management, including full-scale UI/UX redesigns, structural audits, and SEO-driven content refreshes to enhance user journey and conversion."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Multi-Channel Content Operations",
      description: "Orchestrated End-to-End Multimedia Programming, managing the production and launch of high-engagement video series, podcasts, and webinars to drive brand authority."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lifecycle & Growth Marketing",
      description: "Developed and executed Performance Marketing Funnels and automated email lifecycle sequences to maximize lead acquisition and seasonal revenue growth."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Enablement & Internal Ops",
      description: "Standardized Cross-Functional Brand Assets, developing institutional templates (SOWs, Pitch Decks, Reports) and high-conversion case studies to streamline sales and internal workflows."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Experiential & Event Marketing",
      description: "Directed Event Operations and Logistics for large-scale industry conferences and trade shows, overseeing vendor management and on-site brand activation."
    }
  ];

  return (
    <main className="pt-24 md:pt-32 pb-20 max-w-5xl mx-auto px-6 md:px-8">
      {/* Hero Section */}
      <section className="mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <p className="font-headline text-on-surface font-bold text-lg md:text-xl">Katie Vu</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Marketing Program Manager</p>
            </div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-white shadow-md shrink-0 lg:hidden">
              <img 
                alt="Katie Vu" 
                className="w-full h-full object-cover object-center" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiscfxzlRqD-0fFruFAzaPuvNw5IbNSL9pswBNqwCLGidIfnEWfO0-uJXpaFrXll_D1C_GRqjaAlhyHh_WxqTHvqVld_1r553RNWmR-Q43dJCSHn_A-BpJZiMdCGgoNFbFh9nZxe8iguz3Fnpiu9EbQ8_euJaDbKZTfOMTV0DHC4w4UqKt1eQ_18jOqJ-zgutU7k-DlsVwtfBVztsFeIUs8Z2uo-uCUuD4jDRSNewr8r_t8P3NvHy3T7U5KzF0UwF32XcehOJsP9w"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
            Bridging the gap between <span className="text-primary italic">Market Strategy</span> and <span className="text-primary italic">Operational Rigor</span>.
          </h1>
          <p className="font-body text-lg md:text-2xl leading-relaxed text-on-surface-variant">
            I am Katie Vu, a Marketing Program Manager dedicated to architectural precision in GTM execution. I treat every campaign as a structural document—designed for performance, built for scale, and optimized through data.
          </p>
        </motion.div>
      </section>

      {/* Bio & Image Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 md:mb-40">
        <div className="lg:col-span-5 relative group hidden lg:block">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
            <img 
              alt="Katie Vu professional portrait" 
              className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:grayscale-0 object-center" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uiscfxzlRqD-0fFruFAzaPuvNw5IbNSL9pswBNqwCLGidIfnEWfO0-uJXpaFrXll_D1C_GRqjaAlhyHh_WxqTHvqVld_1r553RNWmR-Q43dJCSHn_A-BpJZiMdCGgoNFbFh9nZxe8iguz3Fnpiu9EbQ8_euJaDbKZTfOMTV0DHC4w4UqKt1eQ_18jOqJ-zgutU7k-DlsVwtfBVztsFeIUs8Z2uo-uCUuD4jDRSNewr8r_t8P3NvHy3T7U5KzF0UwF32XcehOJsP9w"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-surface-container-lowest p-8 rounded-lg shadow-sm max-w-[240px]">
            <span className="font-headline text-primary text-4xl font-bold block mb-1">05+</span>
            <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">Years of Strategic Execution</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full font-label text-xs md:text-sm font-bold uppercase tracking-widest">The Approach</div>
            <h2 className="font-headline text-xl md:text-3xl font-bold text-on-surface tracking-tight">An Analytical and Thoughtful Lens</h2>
            <div className="font-body text-base md:text-lg leading-relaxed text-on-surface-variant space-y-6">
              <p>
                My professional journey is defined by a commitment to clarity. In an industry often clouded by vanity metrics, I focus on the structural integrity of marketing operations. 
              </p>
              <p>
                At <span className="text-on-surface font-semibold">Truvantis</span>, I've honed the ability to translate complex business objectives into actionable program roadmaps. I believe that a successful Go-To-Market strategy isn't just about the launch; it's about the systems that sustain it.
              </p>
              <p>
                I approach MarTech not as a collection of tools, but as an ecosystem. My goal is to eliminate friction between content creation and market delivery, ensuring every piece of collateral serves a measurable purpose in the customer journey.
              </p>
            </div>
          </div>
          
          {/* Mobile Experience Card */}
          <div className="mt-12 lg:hidden bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
            <span className="font-headline text-primary text-5xl font-bold block mb-2">05+</span>
            <span className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">Years of Strategic Execution</span>
          </div>
        </div>
      </section>

      {/* Core Competencies Carousel */}
      <section className="mb-40">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Core Competencies</h3>
            <div className="h-0.5 w-12 bg-primary/20"></div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {competencies.map((comp, idx) => (
              <div key={idx} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <CompetencyCard 
                  icon={comp.icon}
                  title={comp.title}
                  description={comp.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-primary w-6' : 'bg-outline-variant/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl">
        <div className="mb-16">
          <h3 className="font-headline text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Selected Experience</h3>
          <div className="h-0.5 w-12 bg-primary/20"></div>
        </div>
        <div className="space-y-16">
          <ExperienceItem 
            period="MAR 2020 — JUL 2025"
            title="Marketing Program Manager"
            company="Truvantis, Inc | San Jose, CA"
            points={[
              "Planned and executed multi-channel target audience campaigns across email, webinars, landing pages, and owned digital channels, engagement, and retention, resulting in a 14% YoY increase in qualified inbound leads and $1.2M+ influenced pipeline",
              "Built, maintained, and optimized 20+ automated workflows in HubSpot using behavioral triggers and segmentation to nurture prospects and guide customers through the journey",
              "Executed 200+ email campaigns and 20+ automated marketing funnels in HubSpot, improving open and conversion rates through A/B testing, experimentation, and continuous optimization",
              "Partnered cross-functionally with the ProServ team, Sales, and Customer Success to ensure target audience campaigns aligned with GTM strategy and regional priorities",
              "Collaborated with external and freelance content writers and design teams to edit, refine, and manage campaign assets including email sequences, landing pages, webinars, and other marketing materials for both technical and business audiences",
              "Owned campaign measurement and reporting using HubSpot Analytics and Google Analytics, turning performance data into actionable insights to optimize engagement, conversion, and campaign ROI",
              "Maintained SEO performance and website operations using SEMrush, resolving technical SEO issues and collaborating with developers to sustain site health and visibility"
            ]}
            tags={["HubSpot Expert", "GTM Strategy", "Analytics & ROI"]}
          />
        </div>
      </section>

      {/* Technical Proficiency */}
      <section className="mt-24 pt-20 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Technical Proficiency</h3>
            <p className="font-body text-sm text-on-surface-variant">The tools that enable the architectural ledger.</p>
          </div>
          <div className="flex flex-wrap gap-3 max-w-xl">
            {["HubSpot CRM", "Asana", "Google Analytics 4", "Semrush", "Figma (Design Ops)"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-label text-xs font-semibold">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CompetencyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl transition-all duration-300 hover:bg-surface-dim/20 h-full flex flex-col">
      <div className="text-primary mb-6">{icon}</div>
      <h4 className="font-headline text-lg font-bold text-on-surface mb-4">{title}</h4>
      <p className="font-body text-sm leading-relaxed text-on-surface-variant flex-grow">
        {description}
      </p>
    </div>
  );
}

function ExperienceItem({ period, title, company, description, secondaryDescription, tags, points }: { period: string, title: string, company: string, description?: string, secondaryDescription?: string, tags?: string[], points?: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
      <div className="font-label text-xs uppercase tracking-widest text-outline">{period}</div>
      <div className="md:col-span-3">
        <h4 className="font-headline text-lg md:text-2xl font-bold text-on-surface tracking-tight">{title}</h4>
        <div className="font-body text-sm text-primary font-medium mb-4">{company}</div>
        {description && (
          <p className="font-body text-on-surface-variant leading-relaxed mb-4">
            {description}
          </p>
        )}
        {points && (
          <ul className="space-y-3 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                <span className="text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        )}
        {secondaryDescription && (
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            {secondaryDescription}
          </p>
        )}
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded font-label text-[10px] font-semibold uppercase tracking-tighter">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
