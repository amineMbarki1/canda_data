"use client";

import { useRef, useState } from "react";

export default function Tabs({
  onChange,
}: {
  onChange?: (activeTab: string) => void;
}) {
  const parent = useRef<HTMLDivElement>(null);
  const children = useRef<HTMLButtonElement[]>([]);

  const [activeTab, setActiveTab] = useState<
    "lastNames" | "firstNames" | "emails"
  >("lastNames");

  const [position, setPosition] = useState({
    width: 96,
    left: 0,
  });

  return (
    <div ref={parent} className="flex relative border w-fit rounded-md">
      <span
        style={{ width: +position.width || 0, left: position.left }}
        className={` rounded-md h-8 bg-[#6c7ae0] absolute z-10 w-[${
          position.width || 0
        }px] left-[${position.left || 0}] top-0 transition-all`}
      ></span>

      <button
        onClick={() => {
          setActiveTab("lastNames");
          onChange && onChange("lastNames");
          setPosition({ width: children.current?.[0].offsetWidth, left: 0 });
        }}
        ref={(ref) => {
          children.current.push(ref!);
        }}
        className={`rounded-md px-3 h-8 duration-200 ${
          activeTab === "lastNames"
            ? "text-white"
            : "hover:bg-gray-100 hover:text-black text-gray-700"
        }   font-bold text-sm relative z-20`}
      >
        Last Names
      </button>
      <button
        onClick={() => {
          setActiveTab("firstNames");
          onChange && onChange("firstNames");
          const parentX = parent.current?.getBoundingClientRect().x!;
          const childX =
            parentX - children.current[1].getBoundingClientRect().x;

          setPosition({
            width: children.current[1].offsetWidth,
            left: -childX,
          });
        }}
        ref={(ref) => {
          children.current?.push(ref!);
        }}
        className={`rounded-md px-3 h-8 duration-200 ${
          activeTab === "firstNames"
            ? "text-white"
            : "hover:bg-gray-100 hover:text-black text-gray-700"
        }   font-bold text-sm relative z-20`}
      >
        First Names
      </button>
      <button
        onClick={() => {
          setActiveTab("emails");
          onChange && onChange("emails");
          const parentX = parent.current?.getBoundingClientRect().x!;
          const childX =
            parentX - children.current[2].getBoundingClientRect().x;

          setPosition({
            width: children.current[2].offsetWidth,
            left: -childX,
          });
        }}
        ref={(ref) => {
          children.current?.push(ref!);
        }}
        className={`rounded-md px-3 h-8 duration-200 ${
          activeTab === "emails"
            ? "text-white"
            : "hover:bg-gray-100 hover:text-black text-gray-700"
        } font-bold text-sm relative z-20`}
      >
        Email addresses
      </button>
    </div>
  );
}
