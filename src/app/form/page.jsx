"use client";

import { useState } from "react";
import ComposeForm from "@/app/components/ComposeForm";
import PhonePreview from "@/app/components/PhonePreview";
import ComposerHero from "../components/ComposerHero";
export default function FormPage() {
  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    type: "Text",
  });

  // Validation Errors
  const [errors, setErrors] = useState({});

  // Live Preview
  const [preview, setPreview] = useState(null);

  // Tick Status
  const [status, setStatus] = useState("none");
  console.log("Preview State:", preview);

  return (
    <div className="min-h-screen bg-[#ece5dd] text-black px-5 py-8">

      <div className="max-w-7xl mx-auto">
        <ComposerHero />
        {/* Heading */}

        <h1 className="text-4xl font-bold mb-8 mt-8">
          Compose Message
        </h1>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <ComposeForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            setPreview={setPreview}
            setStatus={setStatus}
          />

          {/* Right Side */}

          <PhonePreview
            preview={preview}
            status={status}
            setStatus={setStatus}
          />

        </div>

      </div>

    </div>
  );
}