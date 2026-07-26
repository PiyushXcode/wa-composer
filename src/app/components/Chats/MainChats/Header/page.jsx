"use client";

import React from "react";
import Image from "next/image";

import Avatar_1 from "@/app/asserts/avatar_1.png";
import Dot from "@/app/asserts/dots.png";
import Call from "@/app/asserts/call.png";
import Videocall from "@/app/asserts/videocall.png";

const Users = [
  {
    name: "Aryan",
    profile: Avatar_1,
    status: "Online",
  },
];

const Icons = [
  {
    name: "Video Call",
    icon: Videocall,
  },
  {
    name: "Call",
    icon: Call,
  },
  {
    name: "More",
    icon: Dot,
  },
];

const Page = () => {
  return (
    <header className="w-full border-b border-gray-300 bg-[#f0f2f5]">
      {Users.map((user) => (
        <div
          key={user.name}
          className="
            flex
            items-center
            justify-between
            w-full
            h-16
            sm:h-[68px]
            px-3
            sm:px-5
            lg:px-6
          "
        >
          {/* Left Side */}
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src={user.profile}
              alt={user.name}
              width={48}
              height={48}
              className="
                rounded-full
                w-10
                h-10
                sm:w-12
                sm:h-12
                object-cover
              "
            />

            <div className="min-w-0">
              <h2 className="font-semibold text-base sm:text-lg truncate">
                {user.name}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 truncate">
                {user.status}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-1 sm:gap-2">
            {Icons.map((icon) => (
              <button
                key={icon.name}
                aria-label={icon.name}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  hover:bg-gray-200
                  active:scale-95
                  transition
                "
              >
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  width={22}
                  height={22}
                  className="
                    w-5
                    h-5
                    sm:w-6
                    sm:h-6
                  "
                />
              </button>
            ))}
          </div>
        </div>
      ))}
    </header>
  );
};

export default Page;