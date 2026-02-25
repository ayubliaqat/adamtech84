"use client";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiTarget, FiTrendingUp, FiCheck } from "react-icons/fi";

export default function ServiceTraining() {
  const programs = [
    {
      category: "Programming",
      icon: <FiCode />,
      topics: ["Python (Automation)", "R (Statistics)", "C/C++ (Systems)"]
    },
    {
      category: "AI & Data",
      icon: <FiZap />,
      topics: ["ML Pipelines", "Scikit-learn / TensorFlow", "Data Storytelling"]
    },
    {
      category: "Networking",
      icon: <FiTarget />,
      topics: ["TCP/IP Fundamentals", "Network Security", "VPN & Encryption"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24" aria-labelledby="training-heading">
      {/* Nested Background Container to maintain perfect horizontal alignment */}
      <div className="bg-zinc-50 dark:bg-white/5 rounded-[2.5rem] md:rounded-[4rem] px-8 py-16 md:p-20 overflow-hidden">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4"
          >
            Pillar 02
          </motion.span>
          <h2 id="training-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Training Programs
          </h2>
          <p className="text-muted max-w-2xl text-[16px] md:text-lg font-light leading-relaxed">
            Bridge the gap between academic theory and industry reality. Launch your career in the 
            German tech market with project-based learning.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((prog, i) => (
            <motion.div 
              key={prog.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background p-8 lg:p-10 rounded-[2rem] border border-zinc-200/50 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-8 text-2xl">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{prog.category}</h3>
              <ul className="space-y-4">
                {prog.topics.map(topic => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-muted leading-tight">
                    <FiCheck className="text-cyan-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* "Why Train With Me" Grid */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold italic text-foreground leading-tight">
              &quot;Practical, project-based approach — tailored for the German job market.&quot;
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { label: "Experience", value: "12+ Years Industry" },
                { label: "Education", value: "MSc Data Science" },
                { label: "Location", value: "Online / Berlin" },
                { label: "Focus", value: "Job-Ready Skills" }
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-cyan-500 pl-4">
                  <p className="text-[10px] font-bold uppercase text-muted tracking-widest mb-1">{stat.label}</p>
                  <p className="text-sm font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 text-white p-10 md:p-14 rounded-[3rem] relative overflow-hidden group shadow-2xl"
          >
            <FiTrendingUp className="absolute -right-12 -bottom-12 text-[15rem] opacity-5 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
            
            <h4 className="text-2xl font-bold mb-6 relative z-10 text-white">Who is this for?</h4>
            <ul className="space-y-5 relative z-10 mb-10 text-zinc-400">
              {["Fresh graduates in CS/Engineering", "Juniors looking to upskill", "Newcomers to German Tech"].map(item => (
                <li key={item} className="flex items-center gap-3 text-[15px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="relative z-10 w-full sm:w-auto bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.15em] hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg">
              Check Availability
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}