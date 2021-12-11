export default function ExperienceCard({ data }) {
  return (
    <div className="flex justify-start items-center w-full p-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mx-3 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <div className="">
        <a className="break-words text-xl">{data.role}</a>
        <br />
        <a className="break-words font-medium text-gray-400">{data.company}</a>
        {" • "}
        <a className="break-words font-medium text-gray-400">{data.timeLine}</a>
      </div>
    </div>
  );
}
