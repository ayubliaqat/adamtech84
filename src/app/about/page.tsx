export default function AboutPage() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          👨‍💻 About Me
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#50c7c7] mb-8">
          Hi, I'm Rasheed 👋
        </h2>

        {/* Main Content */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12 text-left text-gray-700 leading-relaxed space-y-6">
          
          <p>
            I’m a Technical Lead and Consultant with over <strong>12 years of experience</strong> 
            in the telecommunications industry and nearly <strong>3 years in Data Science and AI</strong>.
          </p>

          <p>
            I hold an MSc in <strong>Data Science, AI & Digital Business</strong> from 
            GISMA University and a BSc in Electrical and Electronics Engineering.
          </p>

          <p>
            I’m passionate about helping others grow. Whether that means supporting a company 
            with complex infrastructure, mentoring a junior developer, or helping a freelancer 
            scale their technical skills.
          </p>

          <p>
            I believe in keeping things practical, human, and focused on real-world impact.
            If you're looking for someone who truly listens, explains clearly, and delivers with care,
            let's connect.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#50c7c7] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Let’s Connect
          </a>
        </div>

      </div>
    </section>
  );
}