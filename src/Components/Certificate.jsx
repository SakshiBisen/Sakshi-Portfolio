import React from "react";
import { motion as Motion } from "framer-motion";

export default function CertificateSection() {
  const certificates = [
    {
      title: "Full Stack Web Development Course",
      issuer: "Sheriyash Coding class ",
      date: "Issued Oct 2025",
      image: "/coursecertificate.png",
    },
    
    {
      title: "AI Prompt Engineering & Generation",
      issuer: "Outskill",
      date: "Issued nov 2024",
      image: "/ailearning.png",
      },
    {
      title: "Hackathon Participation ",
      issuer: "Hackathon 2025",
      date: "Issued aug 2025",
      image: "/hackthoncertificate.png",
    },
  ];

  return (
    <section className="min-h-screen text-white py-16 px-6">
      {/* Heading */}
      <Motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center text-secondary dark:text-white"
      >
        🎓 My <span className="text-primary">Certificates</span>
      </Motion.h2>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, i) => (
          <Motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/30 transition-all"
          >
            {/* Image Section */}
            <Motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-60 object-cover transition-transform duration-700 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Text Section */}
            <Motion.div
              className="p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
            </Motion.div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
