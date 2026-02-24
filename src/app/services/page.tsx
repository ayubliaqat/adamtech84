"use client";

import React from "react";

const servicesData = {
  consulting: {
    title: "Consulting Services",
    subtitle: "For Companies, Startups & Professionals",
    description:
      "Technology moves fast. Bad decisions are expensive. I help you design, improve, and scale your technical systems the right way.",
    who: [
      {
        role: "Small & Medium-Sized Companies",
        details:
          "Infrastructure planning, technical direction, project support, and system optimization.",
      },
      {
        role: "Startups",
        details:
          "From network setup to data strategy. Fast and practical guidance that saves time and money.",
      },
      {
        role: "Freelancers & Solopreneurs",
        details:
          "Technical mentoring, tooling advice, and support on complex client projects.",
      },
      {
        role: "Tech Professionals & Juniors",
        details:
          "Career mentoring, upskilling, code reviews, and real-world technical guidance.",
      },
    ],
    domains: [
      {
        title: "Programming & Development",
        points: [
          "Python, R, C, C++",
          "Code reviews and clean coding practices",
          "Automation and scripting",
          "System-level development support",
          "Architecture guidance for scalable systems",
        ],
      },
      {
        title: "Machine Learning & AI",
        points: [
          "Model development and evaluation",
          "ML project planning and architecture",
          "End-to-end ML pipelines",
          "Practical implementation support",
          "Tools: TensorFlow, Keras, Scikit-learn",
        ],
      },
      {
        title: "Data Science & Analytics",
        points: [
          "Data analysis and business insights",
          "Dashboard creation (Power BI, Python, R)",
          "Data visualization and reporting",
          "Turning raw data into strategic decisions",
        ],
      },
      {
        title: "Networking & Security",
        points: [
          "Network planning and optimization",
          "Architecture and protocol design",
          "Troubleshooting complex network issues",
          "Firewall configuration, VPN setup",
          "Secure communication basics",
        ],
      },
    ],
  },
  training: {
    title: "Training Programs",
    subtitle: "For Fresh Graduates & Junior Professionals",
    description:
      "Start your career with confidence. Practical, hands-on training programs designed to build real-world skills in IT, data science, and networking.",
    what: [
      {
        title: "Programming Languages",
        points: [
          "Python – fundamentals to automation and data handling",
          "R – statistical analysis and visualization",
          "C / C++ – memory management, system programming, core logic",
        ],
      },
      {
        title: "Machine Learning",
        points: [
          "Core ML concepts explained clearly",
          "Model training and evaluation",
          "Real dataset projects",
          "Practical implementation using Scikit-learn, TensorFlow, Keras",
        ],
      },
      {
        title: "Data Science",
        points: [
          "Data cleaning and wrangling",
          "Working with CSV files, databases, APIs",
          "Visualization and storytelling",
          "Reporting for business use",
        ],
      },
      {
        title: "Networking & Network Security",
        points: [
          "IP, TCP/UDP, routing, switching",
          "Network protocols and architecture",
          "Firewalls, VPNs, encryption, secure communication",
          "Practical insights from telecom infrastructure",
        ],
      },
    ],
    who: [
      "Fresh IT, Computer Science, and Engineering graduates",
      "Junior professionals who want to upskill",
      "Anyone preparing for the German tech job market",
      "Professionals transitioning into Data Science or Networking",
    ],
    why: [
      "12+ years in telecom and network architecture",
      "3+ years in Data Science and AI",
      "Real project experience with JKI and ATB",
      "MSc in Data Science, AI & Digital Business from GISMA University",
      "Based in Berlin and familiar with the German tech market",
      "Practical, project-based learning approach",
    ],
    location: [
      "Online – Zoom or Google Meet sessions. Flexible scheduling.",
      "In-Person (Berlin) – Available upon agreement.",
    ],
  },
};

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-22">
      <h1 className="text-4xl font-bold mb-6 text-center">Services</h1>
      <p className="text-center mb-12 text-lg text-gray-700">
        Build Smarter Systems. Make Better Decisions. Grow With Confidence.
      </p>

      {/* Consulting Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">{servicesData.consulting.title}</h2>
        <h3 className="text-xl font-medium mb-2">{servicesData.consulting.subtitle}</h3>
        <p className="mb-6 text-gray-700">{servicesData.consulting.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {servicesData.consulting.who.map((item, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold mb-1">{item.role}</h4>
              <p className="text-gray-600">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {servicesData.consulting.domains.map((domain, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold mb-2">{domain.title}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {domain.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Training Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">{servicesData.training.title}</h2>
        <h3 className="text-xl font-medium mb-2">{servicesData.training.subtitle}</h3>
        <p className="mb-6 text-gray-700">{servicesData.training.description}</p>

        <div className="space-y-8 mb-8">
          {servicesData.training.what.map((topic, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold mb-2">{topic.title}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {topic.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Who This Is For</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {servicesData.training.who.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Why Work With Me</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {servicesData.training.why.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Location & Format</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {servicesData.training.location.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}