"use client";

import React from "react";
import Image from "next/image";

import Background_1 from "@/app/asserts/background-1.webp";

const chats = [
  {
    id: 1,
    sender: "other",
    message: "Hey! 👋",
    time: "10:20 AM",
  },
  {
    id: 2,
    sender: "me",
    message: "Hi Aryan! How are you?",
    time: "10:21 AM",
  },
  {
    id: 3,
    sender: "other",
    message: "I'm doing great. What about you?",
    time: "10:21 AM",
  },
  {
    id: 4,
    sender: "me",
    message: "I'm working on a WhatsApp Web clone using Next.js 😄",
    time: "10:22 AM",
  },
  {
    id: 5,
    sender: "other",
    message: "That sounds awesome! Can't wait to see it.",
    time: "10:23 AM",
  },
  {
    id: 6,
    sender: "me",
    message: "I'm almost done with the chat UI.",
    time: "10:24 AM",
  },
];

const Page = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Background */}
      <Image
        src={Background_1}
        alt="Chat Background"
        fill
        priority
        className="object-cover opacity-70 select-none"
      />

      {/* Chat Messages */}
      <div
        className="
          relative
          z-10
          h-full
          overflow-y-auto
          px-3
          sm:px-5
          md:px-8
          py-4
          pb-24
        "
      >
        <div className="flex flex-col gap-3">

          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex ${
                chat.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[90%]
                  sm:max-w-[80%]
                  md:max-w-[70%]
                  lg:max-w-[60%]
                  xl:max-w-[50%]
                  px-4
                  py-2
                  rounded-2xl
                  shadow
                  break-words
                  ${
                    chat.sender === "me"
                      ? "bg-[#DCF8C6] rounded-br-md"
                      : "bg-white rounded-bl-md"
                  }
                `}
              >
                <p className="text-sm md:text-[15px] text-gray-800 leading-relaxed">
                  {chat.message}
                </p>

                <div className="flex justify-end mt-1">
                  <span className="text-[11px] text-gray-500">
                    {chat.time}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Page;