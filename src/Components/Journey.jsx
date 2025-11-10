
"use client";

import { motion as Motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const Journey = () => {
  const timeline = [
    {
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      title: "Completed 12th (Science Stream)",
      place: "High School, India",
      duration: "2021",
      description:
        "Passed with 80% marks — built a strong foundation in mathematics and logical reasoning.",
    },
    {
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      title: "B.Tech (AIML)",
      place: "TIT College, India",
      duration: "2021 - 2022",
      description:
        "Started B.Tech in Artificial Intelligence & Machine Learning, explored coding and data structures before shifting academic focus.",
    },
    {
      icon: <Briefcase className="text-primary h-6 w-6" />,
      title: "Frontend Developer",
      place: "NEXG Pvt. Ltd.",
      duration: "Jan 2023 - Jan 2025",
      description:
        "Worked as a Frontend Developer building responsive web applications with React, Next.js, Tailwind CSS, and JavaScript.",
    },
    {
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      title: "B.Sc (Mathematics)",
      place: "University of Science, India",
      duration: "2023 - 2027",
      description:
        "Pursuing Bachelor of Science in Mathematics to deepen problem-solving, logical thinking, and analytical skills.",
    },
    {
      icon: <Award className="text-primary h-6 w-6" />,
      title: "Full Stack Development Training",
      place: "Sheryians Coding School",
      duration: "Jan 2025 - Oct 2025",
      description:
        "Completed professional training in Full Stack Development, DSA, Aptitude & Reasoning, and DevOps (CI/CD, Docker, Kubernetes).",
    },
  ];

  return (
    <section
      id="journey"
      className="py-24 px-6 relative overflow-hidden "
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white text-center"
        >
          🚀 My <span className="text-primary">Journey</span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-slate-300 mb-16 max-w-2xl mx-auto"
        >
          A timeline of my education, work experience, and professional growth ✨
        </Motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/40 h-full"></div>

          <div className="space-y-16 relative">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Connector Dot */}
                  <div
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-primary w-5 h-5 rounded-full border-4 border-gray-900 shadow-lg`}
                  ></div>

                  {/* Content Box */}
                  <div
                    className={`md:w-5/12 p-6 rounded-2xl backdrop-blur-md bg-slate-800/40 shadow-lg hover:shadow-[0_0_25px_rgba(139,93,246,0.5)] transition-all duration-500 ${
                      isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 border border-primary/40">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 font-medium mb-1">
                      {item.place}
                    </p>
                    <p className="text-sm text-secondary mb-2">{item.duration}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
