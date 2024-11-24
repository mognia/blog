import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Kilid() {
  const tasks = [
    {
      text: "Constructed an international real estate platform supporting multi language and multi currency, causing 10% more monthly users",
      keywords: ["Constructed"],
    },
    {
      text: "Developed an Auto-Generative search filter, reducing user search requests to the server by 32%",
      keywords: ["Developed"],
    },
    {
      text: "Refactored the project and implemented a design system, leading to a more efficient development workflow",
      keywords: ["Refactored"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer <span className="text-AAsecondary">@ Kilid / Housify</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2021 - December 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
