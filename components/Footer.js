import Link from "next/link";
import { footerItems } from "../data/store";

export default function Footer() {
  return (
    <div className="sm:text-lg">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-5" />
      <div className="xl:flex-row flex-col flex justify-between items-start text-gray-800 dark:text-gray-200 ">
        <div className="text-gray-600 dark:text-zinc-300  grid grid-cols-3 gap-x-5 px-2">
          {footerItems.map((items, index) => {
            return (
              <Link href={items.href} key={index + 1}>
                <a className="col-span-1 p-2 hover:text-blue-600 transition-all duration-100 ease-in-out">
                  {items.label}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="text-gray-600 dark:text-gray-500">
          <p className="p-1 m-3 font-mono tracking-tighter">
            Build with Next.js 12
          </p>
        </div>
      </div>
    </div>
  );
}
