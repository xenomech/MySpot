export default function Card({ frontMatter, index }) {
  return (
    <div className="w-full flex justify-between my-2 p-2 items-center lg:text-xl hover:translate-x-5  rounded-md transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center">
        <p className="px-2 text-gray-600">{index}</p>
        <p className="px-2">{frontMatter.title}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="px-2 hidden lg:flex">{frontMatter.readingTime.text}</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
