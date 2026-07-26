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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-green-300/20 blur-[180px]" />

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-medium">
          <HiSparkles />
          WhatsApp UI Simulation
        </div>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="
        text-center
        font-black
        leading-none
        text-6xl
        md:text-8xl
        xl:text-[110px]
        "
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
        transition={{ delay: .5 }}
        className="
        mt-8
        max-w-3xl
        text-center
        text-lg
        md:text-xl
        text-gray-600
        leading-9
        "
      >
        Create beautiful WhatsApp conversations with live message
        previews, delivery ticks, read receipts and premium
        animations powered by Framer Motion.
      </motion.p>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8 }}
        className="
        mt-16
        grid
        md:grid-cols-2
        gap-x-24
        gap-y-8
        "
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
      {/* Compose Button */}

      <motion.button
        whileHover={{
          scale: 1.06,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
    mt-16
    bg-[#25D366]
    text-white
    text-lg
    font-semibold
    px-10
    py-5
    rounded-2xl
    shadow-2xl
    hover:bg-[#1ebe5d]
    transition-all
    duration-300
  "
      >
        Start Composing →
      </motion.button>

      {/* Scroll Down */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: {
            delay: 1.2,
            duration: 0.6,
          },
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
        className="mt-14 flex flex-col items-center"
      >

        <div
          className="
      flex
      flex-col
      items-center
      gap-3

      px-8
      py-5

      rounded-full
      backdrop-blur-xl
    "
        >
          <span
            className="
        text-base
        font-semibold
        tracking-wide
        uppercase
        text-gray-700
      "
          >
            Scroll Down
          </span>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
            }}
          >
            <HiArrowDown
              size={34}
              className="text-[#25D366]"
            />
          </motion.div>
        </div>

      </motion.div>



    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className="
      flex
      items-center
      gap-4
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-[#25D366]
        text-white
        flex
        items-center
        justify-center
        text-2xl
        shadow-lg
        "
      >
        {icon}
      </div>

      <span className="text-xl font-semibold text-gray-800">
        {title}
      </span>
    </motion.div>
  );
}