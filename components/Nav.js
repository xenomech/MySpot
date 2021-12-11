import Link from "next/link";
import { navItems } from "../data/store";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const currentRoute = useRouter();
  const currentRouteClasses =
    "pr-1 p-2 lg:p-3 mr-2 flex justify-center items-center rounded-md hover:bg-gray-200 dark:hover:bg-black transition-all ease-in-out duration-100 ";
  return (
    <div>
      <nav className="text-xl font-sans py-2 my-2 lg:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a
              className={
                currentRoute.route === "/"
                  ? currentRouteClasses +
                    "font-medium bg-neutral-100 dark:bg-black"
                  : currentRouteClasses
              }
            >
              xenomech
            </a>
          </Link>
          <div className="lg:hidden flex">
            <DarkmodeSwitcher />
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          {navItems.map((item, index) => (
            <Link href={item.url} key={index + 1}>
              <a
                className={
                  currentRoute.route === item.url
                    ? currentRouteClasses +
                      "font-medium bg-neutral-100 dark:bg-black"
                    : currentRouteClasses
                }
              >
                <span>{item.icon}</span>
                <span
                  className={
                    currentRoute.route === item.url
                      ? "mx-2 font-medium"
                      : "mx-2"
                  }
                >
                  {item.label}
                </span>
              </a>
            </Link>
          ))}
          <div className="hidden lg:flex">
            <DarkmodeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}

export const DarkmodeSwitcher = () => {
  const { theme, setTheme } = useTheme("light");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const themeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  if (!isMounted) return null;

  return (
    <button
      onClick={themeSwitch}
      className="hover:bg-gray-300 dark:hover:bg-black transition-all ease-in-out duration-100 p-2 rounded-md"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
};
