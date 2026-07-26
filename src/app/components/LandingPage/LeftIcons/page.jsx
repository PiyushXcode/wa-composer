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
    z-50

    md:hidden

    border-t border-white/20
    bg-white/70
    backdrop-blur-2xl
    supports-[backdrop-filter]:bg-white/50

    shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
  "
>
  <div className="flex items-center justify-around h-20 px-4">

    {leftIcon.map((item) => (
      <button
        key={item.name}
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-1
          text-gray-600
          active:scale-90
          transition
        "
      >
        <Image
          src={item.image}
          alt={item.name}
          width={26}
          height={26}
        />

        <span className="text-[11px] font-medium">
          {item.name}
        </span>
      </button>
    ))}

  </div>

  {/* iPhone Home Indicator */}
  <div className="flex justify-center pb-2">
    <div className="w-32 h-1.5 rounded-full bg-gray-400/70"></div>
  </div>
</nav>
    </>
  );
};

export default Page;