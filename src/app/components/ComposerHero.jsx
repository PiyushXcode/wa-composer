"use client";

import { motion } from "framer-motion";
import {
  HiSparkles,
  HiCheckBadge,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

export default function ComposerHero() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col justify-center"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: .2 }}
        className="
          inline-flex
          items-center
          gap-2
          bg-green-100
          text-green-700
          px-5
          py-2
          rounded-full
          w-fit
          font-medium
          shadow-sm
        "
      >
        <HiSparkles className="text-lg" />
        WhatsApp UI Simulation
      </motion.div>

      {/* Hero Content */}

      <div className="mt-10 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT */}

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
            className="
              text-5xl
              xl:text-6xl
              font-black
              leading-tight
              text-gray-900
            "
          >
            WhatsApp

            <br />

            <span className="text-[#25D366]">
              Message Composer
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="
              mt-8
              text-lg
              leading-8
              text-gray-600
              max-w-xl
            "
          >
            Create realistic WhatsApp conversations with
            live previews, animated delivery ticks,
            read receipts and beautiful message
            simulations.

            <br />
            <br />
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: .96,
            }}
            className="
              mt-10
              bg-[#25D366]
              text-white
              px-8
              py-4
              rounded-xl
              shadow-xl
              font-semibold
            "
          >
            Start Composing →
          </motion.button>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .7 }}
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-gray-100
            p-8
          "
        >

          <h3 className="text-2xl font-bold mb-8">
            Features
          </h3>

          <div className="space-y-6">

            <Feature
              icon={<HiChatBubbleLeftRight />}
              title="Real-time Preview"
              desc="Watch messages appear instantly on the phone."
            />

            <Feature
              icon={<HiCheckBadge />}
              title="Delivery Status"
              desc="Animated Sent, Delivered and Read ticks."
            />

            <Feature
              icon={<HiSparkles />}
              title="Modern UI"
              desc="Pixel-perfect WhatsApp inspired interface."
            />

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        flex
        items-start
        gap-4
        p-4
        rounded-2xl
        hover:bg-green-50
        transition
        cursor-pointer
      "
    >

      <div
        className="
          w-14
          h-14
          rounded-2xl
          bg-[#25D366]
          flex
          items-center
          justify-center
          text-white
          text-2xl
          shadow-lg
          shrink-0
        "
      >
        {icon}
      </div>

      <div>

        <h4 className="font-semibold text-lg text-gray-800">
          {title}
        </h4>

        <p className="text-gray-500 mt-1 leading-6">
          {desc}
        </p>

      </div>

    </motion.div>
  );
}