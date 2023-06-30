import { CheckMarkSVG } from "data/assets";

/**
 *@author Gokul Suresh <gokulsmenon227@gmail.com
 *@param {Array} {data} 
 *@description Component rendering out Experience from the Data provided in constants
 *@todo : [] type def every data
 */

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
