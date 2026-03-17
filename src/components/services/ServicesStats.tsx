"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiUsers, FiCheckCircle, FiAward } from "react-icons/fi";

const stats = [
  { label: "Satisfied Clients", value: 30, suffix: "+", icon: <FiUsers /> },
  { label: "Successful Projects", value: 50, suffix: "+", icon: <FiCheckCircle /> },
  { label: "Digital Awards", value: 12, suffix: "", icon: <FiAward /> },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function ServicesStats() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      {/* Solid Background Image Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-border-subtle">
          
          {/* The Image - No transparency on the image itself */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/project.jfif"
              alt="Our Work"
              className="w-full h-full object-cover grayscale-[20%] brightness-90"
            />
            {/* Solid gradient to ensure text readability without making it fully transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
          </div>

          <div className="relative z-10 p-10 md:p-20">
            <div className="max-w-2xl mb-12">
              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                Proven Track Record <br /> 
                <span className="text-cyan-400">In Modern Engineering.</span>
              </h2>
            </div>

            {/* Focused Stats Grid - Less items, more impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl flex flex-col items-start shadow-xl"
                >
                  <div className="text-cyan-600 text-2xl mb-4 bg-cyan-50 p-3 rounded-2xl">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-slate-900 tabular-nums">
                    <Counter value={stat.value} />{stat.suffix}
                  </div>
                  <p className="text-slate-500 text-[12px] font-bold uppercase tracking-widest mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}