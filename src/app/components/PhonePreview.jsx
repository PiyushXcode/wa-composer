"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import MessageBubble from "./MessageBubble";

import Background from "@/app/asserts/background-1.webp";

const PhonePreview = ({ preview, status }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 80,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
      }}
      className="flex justify-center items-center"
    >
      {/* Phone */}


      <div
        className="
          w-[340px]
          h-[680px]
          rounded-[45px]
          bg-black
          p-3
          shadow-2xl
        "
      >
        {/* Screen */}

        <div className="relative w-full h-full rounded-[35px] overflow-hidden">

          {/* Wallpaper */}

          <Image
            src={Background}
            alt="Wallpaper"
            fill
            className="object-cover"
          />
          {/* Dynamic Island */}

          <motion.div
            initial={{
              y: -20,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              width: 170,
              borderRadius: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-32 h-9 bg-black rounded-full flex items-center justify-center shadow-lg">
          </motion.div>
          {/* Header */}

          <div
            className=" relative z-20  h-25 bg-[#0FAF8E] flex items-end justify-center px-6 pb-6 ">
            {/* Avatar */}

            <div
              className="absolute top-10 left-6 bottom-5 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-700 font-medium"       >
              {preview?.name?.charAt(0).toUpperCase() || "A"}
            </div>

            {/* Name */}

            <div className="relative top-3 text-center ">
              <h2 className="text-white text-md font-bold">
                {preview?.name || "Aryan"}
              </h2>

              <p className="text-green-100 text-sm">
                online
              </p>
            </div>
          </div>

          {/* Chat Area */}

          <div className="relative z-10 h-[calc(100%-96px)] flex flex-col justify-center items-center p-6">

            {!preview ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="text-center"
              >
                <div
                  className="
                    mx-auto
                    w-16
                    h-16
                    rounded-2xl
                    border-2
                    border-[#25D366]
                    flex
                    items-center
                    justify-center
                    text-[#25D366]
                  "
                >
                  <HiOutlineChatBubbleOvalLeftEllipsis size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-200">
                  No messages yet
                </h3>

                <p className="mt-3 text-gray-200 text-lg leading-8 max-w-xs">
                  Fill out the form and hit send to see a live preview here.
                </p>
              </motion.div>
            ) : (
              <div className="w-full flex justify-end items-end h-full">
                <MessageBubble
                  preview={preview}
                  status={status}
                />
              </div>
            )}

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default PhonePreview;