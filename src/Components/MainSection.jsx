import { motion as Motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ShinyText from "./ShinyText";
import { AnimatedRoles } from "./AnimatedRoles";

export const MainSection = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* ============ Animated Container ============ */}
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container max-w-4xl mx-auto text-center space-y-8"
      >
        {/* ============ Centered Animated Image ============ */}
      <div
      className="relative flex justify-center items-center mx-auto
        w-75 h-75
        sm:w-50 sm:h-50
        md:w-70 md:h-70
        lg:w-70 lg:h-70
        xl:w-45 xl:h-45
        2xl:w-50 2xl:h-50 mt-15"
          
    >
      {/* Profile Image */}
      <img
        src="/profile.png"
        alt="Profile"
        className="
          w-full h-full
          rounded-full
          object-cover
          border-4 border-primary/50
          shadow-lg
          z-10
        "
      />

      {/* Rotating Dashed Circle */}
      <Motion.div
        className="
          absolute inset-0
          rounded-full
          border-2 border-dashed
          border-black dark:border-white
          z-0
        "
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
    </div>

        {/* ============ Animated Text ============ */}
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mt-6"
        >
          <span className="text-secondary">Hi, I'm </span>
          <ShinyText text="Sakshi Bisen" speed={5} className="text-primary" />
        </Motion.h1>

        {/* ============ Sub Text ============ */}
       <Motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
>
  I'm{" "}
  <span className="text-primary font-semibold">
    <AnimatedRoles />
  </span>{" "}
  who loves crafting modern, user-friendly, and visually appealing web experiences.
</Motion.div>
 

        {/* ============ Buttons ============ */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
           href="/Sakshi-BisenCv.pdf"
            className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            Show CV
          </Motion.a>

          <Motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/Sakshi-BisenCv.pdf"
            download
            className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
          >
            Download CV
          </Motion.a>
        </Motion.div>
      </Motion.div>
    </section>
  );
};
