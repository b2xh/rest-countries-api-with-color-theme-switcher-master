"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaRegMoon } from "react-icons/fa";

export function HeaderComponent() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="select-none">
      <div className="w-full flex flex-row justify-between py-7 shadow md:px-16 px-3 dark:bg-darkBlue">
        <Link href={"/"} className="md:text-2xl text-base font-bold">
          Where in the world
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="md:text-base text-xs font-bold flex flex-row space-x-2 items-center"
        >
          {theme === "light" ?  <FaRegMoon /> : <FaMoon />} <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}
