import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Esafar() {
  const tasks = [
    {
      text: "Collaborated to build a B2B panel to sell flight tickets at a reduced price, which caused sales to increase by 14%",
      keywords: ["Collaborated"],
    },
    {
      text: "Contributed to Transforming from AngularJS to the latest Angular version at the time.",
      keywords: ["Contributed"],
    },
    {
      text: "Created a customer support panel, enabling a 30% rise in sales and improved customer satisfaction overall.",
      keywords: ["Created"],
    },
    {
      text: "Redesigned the entire web application including code refactor, leading to 25% drop in bounce rate..",
      keywords: ["Redesigned"],
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
          <span className="font-mono text-xs text-gray-500">August 2019 - September 2020</span>
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
