"use client";

import React from "react";
import { motion } from "framer-motion";
import MessageStatus from "./MessageStatus";

const MessageBubble = ({ preview, status }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
        x: 120,
        y: 60,
        rotate: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 14,
        mass: 0.7,
      }}
      className="flex justify-end"
    >
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          bg-[#DCF8C6]
          rounded-2xl
          rounded-br-md
          px-4
          py-3
          shadow-lg
          max-w-[220px]
          break-words
        "
      >
        {/* Message */}

        <p className="text-gray-800 text-sm leading-6">
          {preview.message}
        </p>

        {/* Time + Tick */}

        <div className="flex justify-end items-center gap-1 mt-2">
          <span className="text-[11px] text-gray-500">
            {preview.time}
          </span>

          <MessageStatus status={status} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MessageBubble;