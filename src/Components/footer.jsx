import { motion as Motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border py-10 px-6 overflow-hidden mt-20">
      {/* Animated Background Glow */}
      <Motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-3xl"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        {/* Text */}
        <Motion.p
          className="text-sm text-muted-foreground text-secondary "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Developed with{" "}
          <Heart className="inline h-4 w-4 text-pink-500 animate-pulse" /> by{" "}
          <span className="font-semibold text-primary">Sakshi Bisen</span>.  
          All rights reserved.
        </Motion.p>

        {/* Animated Line */}
        <Motion.div
          className="w-32 h-[2px] bg-gradient-to-r from-primary via-pink-500 to-secondary rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
};
