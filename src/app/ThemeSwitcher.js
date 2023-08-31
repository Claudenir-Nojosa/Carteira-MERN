"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, SetMounted] = useState();

  useEffect(() => {
    SetMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      The current theme is: {theme}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
