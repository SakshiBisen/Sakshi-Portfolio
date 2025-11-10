import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Enthusiast",
  "Debugging Expert",
  "Amplitude Explorer",
];

export const AnimatedRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Motion.span
      key={roles[index]}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      {roles[index]}
    </Motion.span>
  );
};
