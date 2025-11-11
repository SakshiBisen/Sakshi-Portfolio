
"use client";
import React, { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { Code, Bug, Palette } from "lucide-react";

export const AboutSection = () => {
  const imgRef = useRef(null);

  // 🔹 GSAP Floating Image Animation
  useEffect(() => {
    gsap.to(imgRef.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2.5,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 overflow-hidden relative "
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — Animated Text Section */}
        <Motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            👩‍💻 About Me
          </Motion.h2>

        <Motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  className="text-gray-600 dark:text-gray-300 leading-relaxed"
>
  I'm <span className="text-primary font-semibold">Sakshi Bisen</span>, a dedicated{" "}
  <span className="font-blod text-secondary font-blod">Frontend Developer with over{" "}
 2 years of experiencein building clean, modern web interfaces.  
  Currently sharpening my skills in{" "}
  DSA, Aptitude, and Full Stack Developmentto grow as a complete engineer.  
  I believe in continuous learning, creativity, and writing code that inspires both logic and design.</span>
</Motion.p>


          {/* CONNECT BUTTON */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            className="pt-4"
          >
            <Motion.a
              whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(139,93,246,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg 
                         hover:shadow-[0_0_25px_rgba(139,93,246,0.5)] transition-all duration-300"
            >
              ✨ Connect With Me
            </Motion.a>
          </Motion.div>

          {/* ICON GRID — Animated */}
         <Motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
  className="grid grid-cols-3 gap-4 pt-8"
>
  {[
    {
      icon: Code,
      title: "Full Stack",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Bug,
      title: "Problem Solving",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      color: "from-purple-500 to-pink-500",
    },
  ].map(({ icon, title, color }, idx) => (   
    <Motion.div
      key={idx}
      whileHover={{ scale: 1.1, rotate: 2 }}
      className={`bg-gradient-to-r ${color} text-white p-5 rounded-xl shadow-lg flex flex-col justify-center items-center transition-transform duration-500`}
    >
      {React.createElement(icon, { size: 24, className: "mb-2" })}  
      <h4 className="font-semibold text-lg">{title}</h4>
    </Motion.div>
  ))}
</Motion.div>

        </Motion.div>

        {/* RIGHT SIDE — Floating Animated Image */}
        <Motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: 100, rotateY: 45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <Motion.div
            animate={{ rotateY: [0, 10, 0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="bg-gradient-to-b mr-60 from-primary/40 to-transparent p-1 rounded-2xl shadow-[0_0_40px_rgba(139,93,246,0.3)]"
          >
           <div >
      
  <img
    src="https://img.freepik.com/premium-vector/education-concept-illustrations-set-people-vector-illustrations_497046-2608.jpg"
    alt="Sakshi Bisen"
    className="
      w-150 h-64 mr-60 
      md:w-80 md:h-80 
      lg:w-full lg:h-100
    
    "
  />
</div>

          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};
