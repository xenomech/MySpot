import Link from "next/link";
import { navItems } from "../data/store";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunSVG, MoonSVG } from "../data/assets";

export default function Navbar() {
  const currentRouteClasses =
    "p-3 mr-2 flex justify-center items-center rounded-md hover:bg-gray-200 dark:hover:bg-black transition-all ease-in-out duration-100 ";
  return (
    <div>
      <nav className="text-xl font-sans py-2 my-2 xl:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a
              className={currentRouteClasses}
            >
              xenomech
            </a>
          </Link>
          <div className="xl:hidden flex">
            <DarkmodeSwitcher />
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          {navItems.map((item, index) => (
            <Link href={item.url} key={index + 1}>
              <a
                className={currentRouteClasses}
              >
                <span className="md:mx-1">{item.icon}</span>
                <span
                  className={"ml-1"}
                >
                  {item.label}
                </span>
              </a>
            </Link>
          ))}
          <div className="hidden xl:flex">
            <DarkmodeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}

export const DarkmodeSwitcher = () => {
  const { resolvedTheme, theme, setTheme } = useTheme("light");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themeSwitch = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={themeSwitch}
      className="hover:bg-gray-300 dark:hover:bg-black transition-all ease-in-out duration-100 p-2 rounded-md"
    >
      {
        theme === "light" ? <SunSVG style="h-6 w-6" /> : <MoonSVG style="h-6 w-6" />
      }
    </button>
  );
};
