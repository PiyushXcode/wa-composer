"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";

import Background from "@/app/asserts/background-1.webp";

const PhonePreview = ({ preview, status }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
        y: 80,
        rotateX: 30,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex justify-center items-center perspective-[1200px]"
    >
      {/* Phone Body */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          w-[340px]
          h-[680px]
          bg-black
          rounded-[45px]
          shadow-2xl
          p-3
          relative
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
            priority
          />

          {/* Notch */}

          <div
            className="
              absolute
              top-3
              left-1/2
              -translate-x-1/2
              w-28
              h-8
              rounded-full
              bg-black
              z-20
            "
          />

          {/* Header */}

          <div
            className="
              relative
              z-10
              h-16
              bg-[#075E54]
              flex
              items-center
              px-4
              text-white
              font-semibold
            "
          >
            Aryan
          </div>

          {/* Chat Area */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              justify-end
              h-[calc(100%-64px)]
              p-4
            "
          >
            {preview && (
              <MessageBubble
                preview={preview}
                status={status}
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhonePreview;