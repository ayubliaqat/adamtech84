// app/services/page.tsx or pages/services.tsx
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-500" />,
      title: "Web Development",
      description: "Build responsive and modern websites tailored to your needs.",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-green-500" />,
      title: "UI/UX Design",
      description: "Design intuitive interfaces and engaging user experiences.",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-purple-500" />,
      title: "Mobile Apps",
      description: "Create mobile applications for Android and iOS platforms.",
    },
  ];

  return (
    <main className="min-h-screen pt-18 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}