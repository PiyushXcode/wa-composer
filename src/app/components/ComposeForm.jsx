"use client";

import React from "react";
import { motion } from "framer-motion";
import ComposerHero from "./ComposerHero";
const container = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ComposeForm = ({
  formData,
  setFormData,
  errors,
  setErrors,
  setPreview,
  setStatus,
}) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Recipient name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setPreview({
      ...formData,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setStatus("sent");

    setTimeout(() => {
      setStatus("delivered");
    }, 1000);

    setTimeout(() => {
      setStatus("read");
    }, 2000);
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl p-8 space-y-6"
    >
      <motion.h2
        variants={item}
        className="text-3xl font-bold text-gray-800 mt-10"
      >
        Compose Message
      </motion.h2>
      {/* Recipient */}

      <motion.div variants={item}>
        <label className="block mb-2 font-medium">
          Recipient Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter recipient name"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#25D366] transition"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </motion.div>

      {/* Phone */}

      <motion.div variants={item}>
        <label className="block mb-2 font-medium">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#25D366] transition"
        />

        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone}
          </p>
        )}
      </motion.div>

      {/* Message */}

      <motion.div variants={item}>
        <label className="block mb-2 font-medium">
          Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="w-full rounded-xl border px-4 py-3 resize-none outline-none focus:border-[#25D366] transition"
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Type */}

      <motion.div variants={item}>
        <label className="block mb-2 font-medium">
          Message Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#25D366]"
        >
          <option>Text</option>
          <option>Image</option>
          <option>Quick Reply</option>
        </select>
      </motion.div>

      {/* Button */}

      <motion.button
        variants={item}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3 rounded-xl font-semibold shadow-lg transition"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ComposeForm;