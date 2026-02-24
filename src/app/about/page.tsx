"use client";
import { JSX, useState } from "react";

export default function AboutPage() {
  // Define the section names as a type
  type Section =
    | "Introduction"
    | "Work Experience"
    | "Studies"
    | "Technical skills";

  const [activeSection, setActiveSection] = useState<Section>("Introduction");

  const sections: Record<Section, JSX.Element> = {
    Introduction: (
      <p>
        Mowaffak is a Berlin-based Backend & AI Engineer known for turning
        complex systems into production-ready solutions.
      </p>
    ),
    "Work Experience": (
      <p>Worked at XYZ, ABC, and DEF as a Backend Engineer.</p>
    ),
    Studies: <p>B.Sc. in Computer Science, University of Berlin.</p>,
    "Technical skills": (
      <p>Python, Node.js, AI/ML, Cloud, Docker, Kubernetes</p>
    ),
  };

  return (
    <main className="min-h-screen flex bg-gray-50 pt-22">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 sticky top-0 h-screen flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <div className="text-sm text-gray-600 mb-4">Europe/Berlin</div>
        <div className="flex gap-2 mb-6">
          <button className="px-2 py-1 border rounded">English</button>
          <button className="px-2 py-1 border rounded">Arabic</button>
        </div>
        <nav className="flex flex-col gap-3">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as Section)}
              className={`text-left ${
                activeSection === section
                  ? "font-bold text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-5xl font-bold">Hi, I'm Rasheed</h1>
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            Schedule a call
          </button>
        </div>

        <h2 className="text-xl text-gray-500 mb-4">Business Consultant</h2>

        <div className="flex gap-4 mb-6">
          <button className="px-3 py-1 border rounded">GitHub</button>
          <button className="px-3 py-1 border rounded">LinkedIn</button>
          <button className="px-3 py-1 border rounded">Email</button>
        </div>

        <p className="text-gray-700 mb-6">
          I'm a Technical Lead and Consultant with over 12 years of experience
          in the telecommunications industry and nearly 3 years in data science
          and AI. I hold an MSc in Data Science, AI & Digital Business from
          GISMA University and a BSc in Electrical and Electronics Engineering.
          I’m passionate about helping others grow, whether that means
          supporting a company with complex infrastructure, mentoring a junior
          developer, or helping a freelancer scale their technical skills. I
          believe in keeping things practical, human, and focused on real-world
          impact. If you're looking for someone who truly listens, explains
          clearly, and delivers with care — let's connect.
        </p>

        {/* Active Section Content */}
        <div className="text-gray-800">{sections[activeSection]}</div>
      </section>
    </main>
  );
}
