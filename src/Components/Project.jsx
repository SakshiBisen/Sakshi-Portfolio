"use client";
import { motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Chatbot (Full Stack)",
    description:
      "An AI-powered chatbot like Gemini, built with backend integration for real-time responses and smooth conversation flow.",
    image: "public/projects/project01.png",
    url: "https://ai-chatbot-theta-sable.vercel.app/",
    tags: ["React", "Node.js", "Tailwind", "OpenAI API"],
  },
  {
    id: 2,
    title: "Productivity Dashboard",
    description:
      "An advanced productivity dashboard to manage daily tasks, performance tracking, and progress insights — fully responsive UI.",
    image: "public/projects/project02.png",
    url: "https://productivity-dashboard-liart.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "E-Commerce Interface",
    description:
      "A dynamic shopping experience with animations, product filters, wishlist, and responsive design — inspired by modern UI trends.",
    image: "public/projects/project03.png",
    url: "https://hackathon-project-one-two.vercel.app/",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 4,
    title: "Animated Quiz App",
    description:
      "An interactive React-based quiz app with score tracking, animations, and modern UI transitions.",
    image: "public/projects/project04.png",
    url: "https://quiz-question-by-react.vercel.app/",
    tags: ["React", "JavaScript", "Animation"],
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Animated heading */}
        <Motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-secondary"
        >
          💡 Featured <span className="text-primary">Projects</span>
        </Motion.h2>

        {/* Subtitle */}
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center text-secondary mb-12 max-w-2xl mx-auto text-lg"
        >
          A showcase of my top projects — combining creativity, functionality,
          and clean design.
        </Motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, key) => (
            <Motion.div
              key={key}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: key * 0.2 }}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Motion.img
                  whileHover={{ scale: 1.1 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    target="_blank"
                    href={project.url}
                    className="text-primary flex items-center gap-2 font-medium hover:underline"
                  >
                    Visit <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
