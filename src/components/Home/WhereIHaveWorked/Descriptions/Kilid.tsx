import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Kilid() {
  const tasks = [
    {
      text: "worked as Senior Angular Developer .",
      keywords: ["Angular"],
    },
    {
      text: "Contributed to the refactoring and restructuring of an old codebase as a Senior Frontend Developer, while collaborating on the development of an international real estate platform.",
      keywords: ["international"],
    },
    {
      text: "Played a key role as a Senior Frontend Developer in the development and optimization of an real estate platform, involving codebase refactoring, feature implementation, and adherence to industry standards.",
      keywords: ["Senior Frontend Developer"],
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
          <span className="font-mono text-xs text-gray-500">Jun 2021 - Dec 2022</span>
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
