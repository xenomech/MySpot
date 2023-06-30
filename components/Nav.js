import Link from "next/link";
import { navItems } from "data/assets";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunSVG, MoonSVG } from "data/assets";
import Image from "next/image";

export default function Navbar() {
  return (
    <div id="top">
      <nav className="font-poppins py-2 my-2 xl:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="p-2 flex justify-center items-center rounded-full border-[1px] b hover:border-blue-600 hover:bg-gray-200 dark:hover:bg-black transition-all ease-in-out duration-100 ">
              <Image
                src="/static/favicon/favicon-32x32.png"
                width="24"
                height="24"
              />
            </div>
          </Link>
          <div className="xl:hidden flex">
            <DarkmodeSwitcher />
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          {navItems.map((item, index) => (
            <Link href={item.url} key={index + 1}>
              <div className="flex items-center justify-between">
                <p className="px-3 py-2 mx-1 rounded-md transition-all ease-in-out duration-100 ">
                  <span className="">{item.label}</span>
                </p>
                <p>/</p>
              </div>
            </Link>
          ))}
          <div className="hidden xl:flex ml-1">
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
      className="transition-all ease-in-out duration-100 p-2 rounded-md"
    >
      {theme === "light" ? (
        <SunSVG style="h-6 w-6" />
      ) : (
        <MoonSVG style="h-6 w-6" />
      )}
    </button>
  );
};
