import { CheckMarkSVG } from "../data/assets";
export default function Experience({ data }) {
  return (
    <div className="flex justify-start items-center w-full p-5">
      <CheckMarkSVG style="mx-3 h-6 w-6" />
      <div className="">
        <a className="break-words text-xl">{data.role}</a>
        <br />
        <div className="text-gray-400">
          <a className="break-words font-medium">{data.company}</a>
          {" • "}
          <a className="break-words font-medium">{data.timeLine}</a>
        </div>
      </div>
    </div>
  );
}
