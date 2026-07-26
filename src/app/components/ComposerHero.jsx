"use client";

import { motion } from "framer-motion";
import {
  HiSparkles,
  HiCheckBadge,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";
import { HiArrowDown } from "react-icons/hi";

export default function ComposerHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-green-300/20 blur-[180px]" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 text-green-700 font-semibold shadow-md">
          <HiSparkles size={20} />
          WhatsApp UI Simulation
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="z-10 mt-10 text-center font-black leading-none text-6xl md:text-8xl xl:text-[110px]"
      >
        WhatsApp
        <br />

        <span className="text-[#25D366]">
          Message Composer
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="z-10 mt-8 max-w-3xl text-center text-lg md:text-xl leading-9 text-gray-600"
      >
        Create beautiful WhatsApp conversations with
        real-time previews, animated delivery ticks,
        read receipts and smooth Framer Motion animations.
      </motion.p>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="z-10 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        <Feature
          icon={<HiChatBubbleLeftRight />}
          title="Real-time Preview"
        />

        <Feature
          icon={<HiCheckBadge />}
          title="Delivery Status"
        />

        <Feature
          icon={<HiSparkles />}
          title="Modern UI"
        />

        <Feature
          icon={<HiSparkles />}
          title="Read Receipts"
        />
      </motion.div>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.06,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          z-10
          mt-16
          rounded-2xl
          bg-[#25D366]
          px-12
          py-5
          text-lg
          font-semibold
          text-white
          shadow-2xl
          hover:bg-[#1ebe5d]
          transition-all
        "
      >
        Start Composing →
      </motion.button>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
        }}
        className="z-10 mt-14"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
          }}
          className="
            flex
            flex-col
            items-center
            gap-3
            rounded-full
            px-8
            py-5
          "
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-gray-700">
            Scroll Down
          </span>

          <HiArrowDown
            size={34}
            className="text-[#25D366]"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 20,
      }}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        bg-white
        p-5
        shadow-lg
        hover:shadow-2xl
        cursor-pointer
        transition-all
      "
    >
      <motion.div
        whileHover={{
          rotate: [0, -10, 10, 0],
          scale: 1.15,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#25D366]
          text-white
          text-3xl
          shadow-lg
          shrink-0
        "
      >
        {icon}
      </motion.div>

      <motion.div
        whileHover={{
          x: 6,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="mt-1 text-gray-500">
          Premium WhatsApp inspired interaction with smooth animations.
        </p>
      </motion.div>
    </motion.div>
  );
}