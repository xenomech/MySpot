import { ArrowSVG, EyeSVG } from "data/assets";
import PageViews from "./PageViews";


export default function Card({ frontMatter, index }) {

  return (
    <div className="w-full flex justify-between my-2 p-2 font-normal items-center sm:text-xl hover:translate-x-5  rounded-md transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center">
        <p className="px-2 text-gray-600 dark:text-gray-300">{index}</p>
        <p className="px-2">{frontMatter.title}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden xl:flex">
          <PageViews slug={frontMatter.slug}>
            <EyeSVG style="h-6 w-6 mx-2 text-gray-600" />
          </PageViews>
        </div>
        <p className="px-2 hidden xl:flex text-gray-600 dark:text-gray-300">{frontMatter.readingTime.text}</p>
        <span>
          <ArrowSVG style="h-6 w-6 mx-2 text-gray-600" />
        </span>
      </div>
    </div>
  );
}
