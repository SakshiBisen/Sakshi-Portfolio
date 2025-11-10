import { motion as Motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaSass, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, } from "react-icons/si";


export const Skills = () => {
    const skills = [
    { name: "HTML5", icon: <FaReact color="#E34F26" size={50} /> },
        { name: "CSS3", icon: <FaCss3Alt color="#264DE4" size={50} /> },
          { name: "JavaScript", icon: <FaReact color="#F7DF1E" size={50} /> },
        { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
        { name: "TypeScript", icon: <FaReact color="#3178C6" size={50} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={50} /> },
    { name: "Express.js", icon: <SiExpress color="#F5F5F5" size={50} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={50} /> },
    { name: "Sass", icon: <FaSass color="#CC6699" size={50} /> },
    { name: "GitHub", icon: <FaGithub color="#ffffff" size={50} /> },
    { name: "Databases", icon: <FaDatabase color="#f29111" size={50} /> },

  ];

  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary"
        >
           🛠️ My <span className="text-primary">Skills</span>
        </Motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="relative w-32 h-32 rounded-xl border-2 flex flex-col items-center justify-center
                         bg-transparent transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,93,246,0.6)]"
              style={{
                borderColor: "#8B5DF6",
              }}
            >
              <div className="mb-2">{skill.icon}</div>
              <div className="text-sm font-semibold text-secondary uppercase tracking-wide">
                {skill.name}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
