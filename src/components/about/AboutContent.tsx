import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="space-y-20">
      {/* Intro Sub-section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-8 leading-tight">
          Delivering Excellence through <br />
          <span className="text-zinc-400">Collaboration & Innovation.</span>
        </h2>
        <div className="prose prose-zinc max-w-none text-zinc-600 text-lg leading-relaxed space-y-6">
          <p>
            I'm a Berlin-based Backend & AI Engineer known for turning complex 
            systems challenges into streamlined, production-ready solutions.
          </p>
          <p>
            My work bridges backend architecture, cloud infrastructure, and 
            applied AI—bringing clarity and reliability to high-stakes, 
            data-intensive environments.
          </p>
        </div>
      </motion.div>

      {/* We can add a WorkExperience sub-component here next */}
    </div>
  );
}