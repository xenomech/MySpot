import Link from "next/link";
import { footerItems } from "../data/store";

export default function Footer() {
  return (
    <div className="pb-24">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-5" />
      <div className="xl:flex-row flex-col flex justify-between items-start text-gray-800 dark:text-gray-200 ">
        <div className="text-gray-600 dark:text-zinc-300  grid grid-cols-3 gap-x-5">
          {footerItems.map((items, index) => {
            return (
              <FooterLinks
                href={items.href}
                label={items.label}
                key={index + 1}
              />
            );
          })}
        </div>
        <div className="text-gray-600 dark:text-gray-500">
          <p className="m-2  font-mono tracking-tighter">
            Built with 💓 using
            <a href="https://nextjs.org/" className="text-blue-500 mx-2">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const FooterLinks = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="col-span-1 p-2 hover:text-gray-400 text-gray-500 transition-all duration-100 ease-in-out">
        {label}
      </a>
    </Link>
  );
};
