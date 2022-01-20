import { ArrowSVG } from "../data/assets";

export default function BlogCard({ frontMatter, index }) {
  return (
    <div className="w-full flex justify-between my-2 p-2 font-normal items-center sm:text-xl hover:translate-x-5  rounded-md transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center">
        <p className="px-2 text-gray-600 dark:text-gray-300">{index}</p>
        <p className="px-2">{frontMatter.title}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="px-2 hidden xl:flex">{frontMatter.readingTime.text}</p>
        <span>
          <ArrowSVG style="h-6 w-6 mx-2 text-gray-600" />
        </span>
      </div>
    </div>
  );
}
