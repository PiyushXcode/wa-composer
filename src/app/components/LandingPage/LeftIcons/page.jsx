"use client";

import React from "react";
import Image from "next/image";

import callIcon from "@/app/asserts/call.png";
import messageIcon from "@/app/asserts/message.png";
import statusIcon from "@/app/asserts/status.png";
import channelIcon from "@/app/asserts/channel.png";
import groupIcon from "@/app/asserts/group.png";

const leftIcon = [
  {
    name: "Messages",
    image: messageIcon,
  },
  {
    name: "Calls",
    image: callIcon,
  },
  {
    name: "Status",
    image: statusIcon,
  },
  {
    name: "Channels",
    image: channelIcon,
  },
  {
    name: "Groups",
    image: groupIcon,
  },
];

const Page = () => {
  return (
    <>
      <aside className="hidden md:flex h-full w-15.1 shrink-0 flex-col items-center justify-between border-r bg-[#f0f2f5] py-6">

        <div className="flex flex-col items-center gap-6">
          {leftIcon.map((item) => (
            <button
              key={item.name}
              className="rounded-xl p-2 hover:bg-gray-200 transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={32}
                height={32}
              />
            </button>
          ))}
        </div>
        <div className="mb-3">
          <div className="h-11 w-11 rounded-full bg-gray-500"></div>
        </div>
      </aside>
      <nav
        className="
          fixed
          bottom-0
          left-0
          right-0
          md:hidden
          z-50
          border-t
          border-gray-200
          bg-white/70
          backdrop-blur-xl
          supports-[backdrop-filter]:bg-white/50
        "
      >
        <div className="flex justify-around items-center py-3">

          {leftIcon.map((item) => (
            <button
              key={item.name}
              className="flex flex-col items-center gap-1 text-xs"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={24}
                height={24}
              />

              <span className="text-[11px] text-gray-700">
                {item.name}
              </span>
            </button>
          ))}

        </div>
      </nav>
    </>
  );
};

export default Page;