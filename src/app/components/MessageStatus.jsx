"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheck } from "react-icons/hi";

const tickAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const MessageStatus = ({ status }) => {
  return (
    <AnimatePresence mode="wait">
      {status === "sent" && (
        <motion.div
          key="sent"
          variants={tickAnimation}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <HiCheck
            size={15}
            className="text-gray-500"
          />
        </motion.div>
      )}

      {status === "delivered" && (
        <motion.div
          key="delivered"
          className="flex -space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            variants={tickAnimation}
            initial="hidden"
            animate="visible"
          >
            <HiCheck
              size={15}
              className="text-gray-500"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 8,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 250,
            }}
          >
            <HiCheck
              size={15}
              className="text-gray-500"
            />
          </motion.div>
        </motion.div>
      )}

      {status === "read" && (
        <motion.div
          key="read"
          className="flex -space-x-1"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.15, 1],
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <motion.div
            animate={{
              color: "#3B82F6",
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <HiCheck size={15} />
          </motion.div>

          <motion.div
            animate={{
              color: "#3B82F6",
            }}
            transition={{
              duration: 0.4,
              delay: 0.08,
            }}
          >
            <HiCheck size={15} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageStatus;