import { Link } from "react-router-dom";
import { TrendingUp, Wallet, Layers, Check, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

export default function Home() {
  const scrollToStrategy = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('strategic-execution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 hero-gradient opacity-40"></div>
        <div className="max-w-5xl mx-auto px-6 md:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
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
                    src="./headshot.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <h1 className="font-headline text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-on-surface font-extrabold tracking-tighter mb-8 md:mb-10">
                Driving <span className="text-primary italic">Measurable</span> Growth Through Strategic Program Management.
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 md:mb-12">
                5+ years of architecting scalable campaign frameworks that turn complex data into high-impact brand growth. Specializing in the end-to-end management of digital ecosystems, from technical SEO to multimedia content operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToStrategy}
                  className="bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary-dim transition-all shadow-md flex items-center gap-2 group cursor-pointer"
                >
                  Explore the Strategy
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 lg:col-span-5 relative hidden lg:block"
            >
              <div className="max-w-[360px] ml-auto relative">
                <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border-8 border-surface-container-lowest shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    alt="Katie Vu" 
                    className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700 object-center" 
                    src="./headshot.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative architectural elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl -z-0"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-1 h-24 bg-primary/30 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <MetricCard 
              icon={<TrendingUp className="text-primary w-10 h-10" />}
              label="Growth Performance"
              value="14%"
              description="YoY increase in qualified inbound leads through optimized multi-channel target audience campaigns."
            />
            <MetricCard 
              icon={<Wallet className="text-primary w-10 h-10" />}
              label="Influenced Pipeline"
              value="$1.2M+"
              description="Directly influenced revenue pipeline through strategic campaign execution and lead nurturing."
            />
            <MetricCard 
              icon={<Layers className="text-primary w-10 h-10" />}
              label="Scale Capability"
              value="200+"
              description="Email campaigns and automated marketing funnels executed and optimized within HubSpot."
            />
          </div>
        </div>
      </section>

      {/* Strategic Execution */}
      <section id="strategic-execution" className="py-32 bg-surface scroll-mt-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
              <h2 className="font-headline text-xl md:text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Strategic Execution.</h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
                A versatile execution strategy designed to navigate complex digital ecosystems, seamlessly pivoting between technical operations, creative production, and strategic growth initiatives.
              </p>
              <ul className="space-y-6">
                <ExecutionItem 
                  title="Digital Ecosystem & Web Strategy"
                  description="Led comprehensive Website Life-cycle Management, including full-scale UI/UX redesigns, structural audits, and SEO-driven content refreshes."
                />
                <ExecutionItem 
                  title="Multi-Channel Content Operations"
                  description="Orchestrated End-to-End Multimedia Programming, managing the production and launch of high-engagement video series, podcasts, and webinars."
                />
                <ExecutionItem 
                  title="Lifecycle & Growth Marketing"
                  description="Developed and executed Performance Marketing Funnels and automated email lifecycle sequences to maximize lead acquisition."
                />
                <ExecutionItem 
                  title="Brand Enablement & Internal Ops"
                  description="Standardized Cross-Functional Brand Assets, developing institutional templates (SOWs, Pitch Decks, Reports) and high-conversion case studies to streamline sales and internal workflows."
                />
                <ExecutionItem 
                  title="Experiential & Event Marketing"
                  description="Directed Event Operations and Logistics for large-scale industry conferences and trade shows, overseeing vendor management and on-site brand activation."
                />
              </ul>
            </div>
            <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6">
              <div className="col-span-2 bg-surface-container-low h-[400px] rounded-xl overflow-hidden group relative">
                <img 
                  alt="Data Analytics Dashboard" 
                  className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:grayscale group-hover:scale-105 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz3lU5xP5hnJlvLT6pUX0lowEYOzxe3Z5f_jEsedx1_gsOwbHvNJoVlgpUq_GwGqPRcor3aMwZoONn65mbk4qKhTeglEG78yOC8wZzTMfDVE1kVC2hryDTLxgfUkIXqw__neVzNafWlL0aJCXn-jm8pbXuwSNlcRFPWDtpYtIy5b6ghXr-FmK1hr3Zvpqny_u16bjQL3BdWH2POcSBKIPXOTNKQiDSakx-VONAp6ZZzRvC9RWd39xS1Bvjkblv1XwOniZjdRzoHa4"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-surface to-transparent">
                  <h3 className="text-2xl font-bold">Global GTM Campaign Execution</h3>
                  <p className="text-on-surface-variant">Multi-channel campaign management resulting in $1.2M+ influenced pipeline.</p>
                </div>
              </div>
              <div className="bg-surface-container-low h-[300px] rounded-xl overflow-hidden group">
                <img 
                  alt="Campaign Strategy" 
                  className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:grayscale group-hover:scale-105 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHWtq15dOP9hYAuTLW5FFUdrm-pl2BHBDSt896VQBIvsfv3U6ZNwKEU_LiHOv7avIa3Ccdi1pH8aTFi4U7ew3nTmdVrCOAEMXV7GM2awjfUuMclXGCUhWXL1CNVUyMRp13dtVFjYzqn3z4xbpgomwLESIoK0v3SPBXrRPB8CPKjb7cf8MThcdLw4hdZrkKc12MLEyUe2XzoqlmpmBiwLQWkJkWvPc21UBWthP0ejhYzGFN61tZA8DiLtEhz0NWmRRWT8mf0HNhas"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-surface-container-low h-[300px] rounded-xl overflow-hidden group">
                <img 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover grayscale-0 opacity-80 group-hover:grayscale group-hover:scale-105 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsByt-IgelGq4SeMgE9w0LP7MyqEHbgiHHzgFlAOO9174QjyBjfNTso9oM8AWP7g5HwUXdPrq2XHI-B2Yk4ANKDqA3H6cUGX17fq4k9V6sKnInggS4PrcggQPVWKJWbKkQjYMCLX0n6vH0pZAmTFEQmXSNmfiLX2NCtLI-pGSXwjmJK6hQavsv4U7gGTlEhv_bizoXI-SQzTqUeaTvRmvNs0e8XlJAIGX9Nl7ts5-9KyoVbJFMNOw40Bn-FMAwmvn-2SB7ZWlGTiI"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-lg md:text-2xl font-extrabold text-on-surface mb-4 tracking-tight">The Stack & Expertise</h2>
            <p className="text-on-surface-variant">A technical approach to marketing operations.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Jira", "Github", "Google AI Studio", "HubSpot CRM", "Marketing Automation", "Budget Optimization", "Risk Mitigation", "Stakeholder Mgmt"].map((skill) => (
              <span key={skill} className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-8 text-center bg-surface-container-low py-20 rounded-2xl">
          <h2 className="font-headline text-xl md:text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Ready to Scale?</h2>
          <p className="font-body text-on-surface-variant text-lg mb-10 max-w-xl mx-auto">
            Currently accepting inquiries for senior marketing program management roles and high-impact strategic consulting.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:katielvu@gmail.com"
              className="bg-primary text-on-primary px-12 py-4 rounded-lg font-bold hover:bg-primary-dim transition-colors inline-block"
            >
              Connect
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetricCard({ icon, label, value, description }: { icon: React.ReactNode, label: string, value: string, description: string }) {
  return (
    <div className="bg-surface-container-lowest p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="mb-6">{icon}</div>
        <h3 className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-bold">{label}</h3>
      </div>
      <div>
        <div className="text-6xl font-headline font-extrabold text-on-surface mb-2">{value}</div>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ExecutionItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="bg-primary-container text-on-primary-container w-8 h-8 rounded-full flex items-center justify-center shrink-0">
        <Check className="w-4 h-4" />
      </span>
      <div>
        <h4 className="font-bold text-on-surface">{title}</h4>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </li>
  );
}
