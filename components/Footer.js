import Link from "next/link";

export default function Footer() {
  const footerItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "GitHub",
      href: "https://github.com/xenomech",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Linkedin",
      href: "https://github.com/xenomech",
    },
    {
      label: "Snippets",
      href: "/snippets",
    },
  ];
  return (
    <div>
      <div className="md:w-6/12 text-gray-600 dark:text-zinc-300 md:text-xl grid grid-cols-2 gap-0 p-2">
        {footerItems.map((items) => {
          return (
            <Link href={items.href}>
              <a className="col-span-1 p-2">{items.label}</a>
            </Link>
          );
        })}
      </div>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="flex-col flex md:flex-row justify-center items-center md:justify-between text-gray-800 dark:text-gray-200 ">
        <p className="p-1 md:p-0">© copyright 2021</p>
        <p className="p-1 md:p-0">Build with Next.js</p>
      </div>
    </div>
  );
}
