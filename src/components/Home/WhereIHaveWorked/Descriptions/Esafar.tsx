import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Esafar() {
  const tasks = [
    {
      text: "Redesigned the entire web application, implementing a new design and structure along with a new codebase.",
      keywords: ["Redesigned"],
    },
    {
      text: "Developed a B2B panel specifically designed for selling flights and hotels to other agencies.\n",
      keywords: ["B2B panel"],
    },
    {
      text: "Ensured the maintenance and upkeep of a CRM panel dedicated to the call center department",
      keywords: ["CRM panel"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer <span className="text-AAsecondary">@ Esafar</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug 2019 - Sep 2020</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
