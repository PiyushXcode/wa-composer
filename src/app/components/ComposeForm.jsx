"use client";

import React from "react";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const quickReplies = [
  {
    title: "Greeting",
    message: "Hello! Hope you're doing well 😊",
  },
  {
    title: "Busy",
    message: "I'm currently busy. I'll get back to you shortly.",
  },
  {
    title: "Meeting",
    message: "I'm in a meeting right now. Can I call you later?",
  },
  {
    title: "Thank You",
    message: "Thank you so much! I really appreciate your help.",
  },
  {
    title: "On My Way",
    message: "I'm on my way. I'll reach in about 10 minutes.",
  },
  {
    title: "Reached Home",
    message: "I've reached home safely.",
  },
  {
    title: "Good Morning",
    message: "Good Morning! Have a wonderful day ☀️",
  },
  {
    title: "Good Night",
    message: "Good Night! Sweet dreams 🌙",
  },
  {
    title: "Call Me",
    message: "Please give me a call whenever you're free.",
  },
  {
    title: "Congratulations",
    message: "Congratulations! Wishing you all the very best 🎉",
  },
];

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
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const handleQuickReply = (e) => {
    const selected = quickReplies.find(
      (reply) => reply.title === e.target.value
    );

    if (!selected) return;

    setFormData({
      ...formData,
      type: "Quick Reply",
      message: selected.message,
    });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
        iamge: "",
        imageUrl: "",
      });
    };

    reader.readAsDataURL(file);
  };
  const handleImageUrl = (e) => {
    setFormData({
      ...formData,
      imageUrl: e.target.value,
      image: "",
    });
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Recipient name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    if (
      formData.type === "Image" &&
      !formData.image &&
      !formData.imageUrl
    ) {
      newErrors.imageUrl =
        "Upload an image or paste an image URL.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    setPreview({
      ...formData,

      image:
        formData.image ||
        formData.imageUrl,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setStatus("sent");

    setTimeout(() => {
      setStatus("delivered");
    }, 2000);

    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        message: "",
        type: "Text",
        image: null,
        imageUrl: "",
      });

      setErrors({});
    }, 2500);
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-black"
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
          className={`w-full rounded-xl border px-4 py-3 outline-none transition ${errors.name
            ? "border-red-500"
            : "focus:border-[#25D366]"
            }`}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
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
          placeholder="9876543210"
          maxLength={10}
          inputMode="numeric"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition ${errors.phone
            ? "border-red-500"
            : "focus:border-[#25D366]"
            }`}
        />

        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
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
          className={`w-full rounded-xl border px-4 py-3 resize-none outline-none transition ${errors.message
            ? "border-red-500"
            : "focus:border-[#25D366]"
            }`}
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Type */}

      <motion.div variants={item}>
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

        {formData.type === "Quick Reply" && (
          <motion.div
            variants={item}
            className="space-y-3"
          >
            <label className="block font-medium pt-3">
              Select a Quick Reply
            </label>

            <select
              defaultValue=""
              onChange={handleQuickReply}
              className="
        w-full
        rounded-xl
        border
        px-4
        py-3
        outline-none
        focus:border-[#25D366]
      "
            >
              <option value="">
                Choose a Quick Reply...
              </option>

              {quickReplies.map((reply) => (
                <option
                  key={reply.title}
                  value={reply.title}
                >
                  {reply.title}
                </option>
              ))}
            </select>
          </motion.div>
        )}
        {formData.type === "Image" && (
          <motion.div
            variants={item}
            className="space-y-5"
          >
            <label className="font-medium block">
              Upload Image
            </label>
            {errors.image && (
              <p className="text-red-500 text-sm mt-2">
                {errors.image}
              </p>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="
        w-full
        rounded-xl
        border
        p-3
        file:bg-[#25D366]
        file:text-white
        file:border-0
        file:px-4
        file:py-2
        file:rounded-lg
        file:cursor-pointer
      "
            />

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="text-gray-500 text-sm">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <input
              type="text"
              placeholder="Paste Image URL..."
              value={formData.imageUrl}
              onChange={handleImageUrl}
              className="
        w-full
        rounded-xl
        border
        px-4
        py-3
        outline-none
        focus:border-[#25D366]
      "
            />
          </motion.div>
        )}
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