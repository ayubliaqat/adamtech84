"use client";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiBarChart2,
  FiArrowUpRight,
} from "react-icons/fi";

export default function ServiceConsultancy() {
  const domains = [
    {
      title: "Systems Engineering",
      icon: <FiCpu />,
      skills:
        "Python, R, C/C++, Automation pipelines, and architectural code reviews.",
    },
    {
      title: "Applied AI & Data",
      icon: <FiBarChart2 />,
      skills:
        "End-to-end ML pipelines, TensorFlow, Keras, and predictive data strategy.",
    },
    {
      title: "Network Infrastructure",
      icon: <FiGlobe />,
      skills:
        "Enterprise architecture, protocol optimization, and high-stakes security.",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24"
      aria-labelledby="consultancy-heading"
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        {/* 1. Left Side: The "Consultant" Anchor */}
        <div className="lg:w-1/3 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32"
          >
            {/* Vertical Accent Line */}
            <div className="absolute -left-6 top-0 w-[2px] h-20 bg-accent opacity-50 hidden lg:block" />

            <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase block mb-6">
              // Pillar 01
            </span>

            <h2
              id="consultancy-heading"
              className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-[0.9]"
            >
              Strategic <br />
              <span className="text-accent italic font-medium">Consulting</span>
            </h2>

            <p className="mt-8 text-muted text-[17px] leading-relaxed font-light max-w-sm">
              Providing high-level technical advisory. I bridge the gap between
              <span className="text-foreground font-medium">
                {" "}
                complex infrastructure
              </span>{" "}
              and
              <span className="text-foreground font-medium">
                {" "}
                intelligent automation
              </span>
              .
            </p>

            {/* Target Audience List */}
            <div className="mt-12 space-y-8">
              {[
                { label: "SMEs", detail: "Infrastructure & Project Support" },
                { label: "Startups", detail: "Data Strategy & AI Roadmap" },
                { label: "Freelancers", detail: "Technical Mentorship" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="group flex items-start gap-5"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <FiCheckCircle className="text-[12px]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground tracking-tight">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-muted uppercase tracking-widest font-bold mt-0.5 opacity-60">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. Right Side: Technical Grid */}
        <div className="lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="glass group p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center text-2xl mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl shadow-black/10">
                    {domain.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 tracking-tight text-foreground">
                    {domain.title}
                  </h4>
                  <p className="text-[15px] text-muted leading-relaxed font-light">
                    {domain.skills}
                  </p>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Specialized "Audit" CTA Card */}
            <motion.a
              href="/book"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }} // Subtle lift on hover
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              /* COLOR AUDIT: Using a consistent dark/light logic that pops */
              className="bg-zinc-900 dark:bg-zinc-100 p-10 rounded-[2.5rem] flex flex-col justify-between items-start group cursor-pointer border border-transparent hover:border-accent transition-all duration-500 shadow-2xl min-h-[320px]"
            >
              <div>
                <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                  Immediate Value
                </p>
                <h4 className="text-white dark:text-zinc-900 text-3xl font-bold tracking-tighter leading-[0.9]">
                  Request a <br /> Technical Audit
                </h4>
                <p className="mt-4 text-white/60 dark:text-zinc-600 text-sm font-light">
                  Identifying bottlenecks in your stack to prepare for AI
                  integration.
                </p>
              </div>

              <div className="mt-10 w-full flex justify-between items-center group-hover:translate-x-1 transition-transform">
                <span className="text-accent text-[11px] font-bold uppercase tracking-widest">
                  Book Discovery
                </span>
                {/* Arrow Container */}
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-45">
                  <FiArrowUpRight size={24} />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
