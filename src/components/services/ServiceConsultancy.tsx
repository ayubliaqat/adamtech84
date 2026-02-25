"use client";
import { motion } from "framer-motion";
import { FiCheckCircle, FiCpu, FiGlobe, FiBarChart2, FiArrowUpRight } from "react-icons/fi";

export default function ServiceConsultancy() {
  const domains = [
    { 
      title: "Systems Engineering", 
      icon: <FiCpu />, 
      skills: "Python, R, C/C++, Automation pipelines, and architectural code reviews." 
    },
    { 
      title: "Applied AI & Data", 
      icon: <FiBarChart2 />, 
      skills: "End-to-end ML pipelines, TensorFlow, Keras, and predictive data strategy." 
    },
    { 
      title: "Network Infrastructure", 
      icon: <FiGlobe />, 
      skills: "Enterprise architecture, protocol optimization, and high-stakes security." 
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6" aria-labelledby="consultancy-heading">
      {/* Container with top border that respects the max-width alignment */}
      <div className="py-6 md:py-12 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* 1. Left Side: Positioning */}
          <div className="lg:w-1/3 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] text-[10px] uppercase">
                Pillar 01
              </span>
              <h2 id="consultancy-heading" className="text-3xl md:text-4xl font-bold mt-4 tracking-tight text-foreground">
                Strategic <br className="hidden lg:block" /> Consulting
              </h2>
              
              <p className="mt-6 text-muted text-[16px] leading-relaxed font-light">
                Providing high-level technical advisory for companies and startups. 
                I bridge the gap between complex infrastructure and intelligent automation.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  { label: "SMEs", detail: "Infrastructure & Project Support" },
                  { label: "Startups", detail: "Data Strategy & AI Roadmap" },
                  { label: "Freelancers", detail: "Technical Mentorship" }
                ].map((item) => (
                  <div key={item.label} className="group flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <FiCheckCircle className="text-cyan-500 transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground leading-none mb-1.5">{item.label}</p>
                      <p className="text-xs text-muted font-medium">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 2. Right Side: Service Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {domains.map((domain, i) => (
                <motion.div 
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass group p-8 rounded-[2rem] hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-border-subtle flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-8 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                      {domain.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 tracking-tight text-foreground">{domain.title}</h4>
                    <p className="text-sm text-muted leading-relaxed font-light">
                      {domain.skills}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                     <FiArrowUpRight className="text-muted group-hover:text-cyan-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                  </div>
                </motion.div>
              ))}
              
              {/* Specialized "Audit" CTA Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-zinc-900 dark:bg-zinc-100 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center group cursor-pointer border border-transparent hover:border-cyan-500 transition-all duration-500 shadow-xl shadow-black/5"
              >
                 <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-widest mb-4">Immediate Value</p>
                 <h4 className="text-white dark:text-zinc-900 text-xl font-bold leading-tight">Request a <br /> Technical Audit</h4>
                 <p className="mt-3 text-zinc-400 dark:text-zinc-500 text-xs px-4">Let&apos;s identify the bottlenecks in your stack.</p>
                 <div className="mt-6 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                   <FiArrowUpRight size={20} />
                 </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}