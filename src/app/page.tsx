export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-36 text-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to AdamTech84 🚀
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          This is a Tailwind CSS test homepage built with Next.js 16 and React 19.
          Clean. Modern. Powerful.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Fast Performance ⚡</h3>
            <p className="text-gray-600">
              Built with Next.js 16 for blazing fast speed and SEO optimization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Modern Stack 💎</h3>
            <p className="text-gray-600">
              Powered by React 19 and Tailwind CSS 4 for modern UI design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Clean Design 🎨</h3>
            <p className="text-gray-600">
              Minimal layout, responsive design, and smooth hover effects.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <button className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
          Start Now
        </button>
      </section>
      <section className="bg-gradient-to-r from-[#0A2540] to-[#1F77C2] text-white py-28 px-6">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Helping Companies Grow With Strategic Consulting
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mb-8">
    We provide professional consulting solutions for companies & professionals to scale efficiently.
  </p>
  <div className="flex gap-4 justify-center">
    <button className="px-6 py-3 bg-[#1F77C2] rounded-xl font-semibold hover:bg-blue-800 transition">
      Book Consultation
    </button>
    <button className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-[#0A2540] transition">
      View Services
    </button>
  </div>
</section>

    </main>
  );
}