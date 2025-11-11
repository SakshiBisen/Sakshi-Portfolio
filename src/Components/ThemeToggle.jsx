import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed top-3 right-4 sm:top-6 sm:right-6  lg:top-0 lg:-right-0 lg:p-3 z-50 p-3 sm:p-4 rounded-full transition-all duration-300",
        "hover:scale-110 hover:bg-primary/10 focus:outline-none shadow-md dark:shadow-lg"
      )}
    >
      {isDarkMode ? (
        <Sun
          className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-300 hover:rotate-90"
          style={{
            filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 6px orange)",
          }}
        />
      ) : (
        <Moon
          className="h-6 w-6 sm:h-7 sm:w-7 text-black transition-transform duration-300 hover:rotate-90"
          style={{
            filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.4))",
          }}
        />
      )}
    </button>
  );
};
