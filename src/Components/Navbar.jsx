import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navItem = [
    { name: "Home", href: "/" },
      { name: "About", href: "#about" },
      { name: "Journey", href: "#journey" },
      { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  // 🟢 Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        scrolling
          ? "py-3 bg-background/80 backdrop-blur-md shadow-md"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* 🔹 Logo */}
        <Motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold flex items-center cursor-pointer"
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-primary">Sakshi</span>{" "}
            <span className="text-secondary">Bisen</span>
          </span>
        </Motion.a>

        {/* 🔹 Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item, key) => (
            <Motion.a
              key={key}
              href={item.href}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hover:text-primary text-secondary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Motion.a>
          ))}
        </div>

        {/* 🔹 Mobile Menu Button */}
        <Motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="md:hidden p-2 z-50 rounded-md hover:bg-background/50 transition-colors duration-300" 
          aria-label={isOpenMenu ? "Close Menu" : "Open Menu"}
        >
          {isOpenMenu ? <X size={24} color="white" /> : <Menu color="white" size={24} />}
        </Motion.button>

        {/* 🔹 Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpenMenu && (
            <Motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col  text-white items-center justify-center text-center space-y-8 text-xl md:hidden"
              )}
            >
              {navItem.map((item, key) => (
                <Motion.a
                  key={key}
                  href={item.href}
                  onClick={() => setIsOpenMenu(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Motion.a>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.nav>
  );
};
