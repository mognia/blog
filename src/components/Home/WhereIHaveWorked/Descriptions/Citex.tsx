import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Citex() {
  const tasks = [
    {
      text: "Designed, developed, and deployed a crypto currency investment panel with multi-layer access, enabling secure management of transactions.",
      keywords: ["crypto currency"],
    },
    {
      text: "Integrated the web application with the MetaMask wallet, utilizing its APIs to enable seamless connection and interaction with the blockchain.",
      keywords: ["blockchain",'MetaMask'],
    },
    {
      text: "Implemented various functionalities, such as wallet integration, transaction tracking, and portfolio management, to provide a comprehensive investment experience for users.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Engineer <span className="text-AAsecondary">@ Citex</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2018 - May 2019</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
