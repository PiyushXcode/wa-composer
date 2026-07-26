"use client";

import React from "react";
import Image from "next/image";

import newMessage from "@/app/asserts/newmessage.png";
import Dot from "@/app/asserts/dots.png";

const TopIcons = [
  {
    name: "New Message",
    icon: newMessage,
  },
  {
    name: "More Options",
    icon: Dot,
  },
];

const Page = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-5 md:px-6 lg:px-7 py-4">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Messages
        </h1>

        {/* Right Icons */}
        <div className="flex items-center gap-2">

          {TopIcons.map((item) => (
            <button
              key={item.name}
              aria-label={item.name}
              className="
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                transition-all
                duration-200
                hover:bg-gray-100
                active:scale-95
              "
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={22}
                height={22}
                className="object-contain"
              />
            </button>
          ))}

        </div>
      </div>
    </header>
  );
};

export default Page;