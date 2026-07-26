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
  <div className="min-h-screen bg-[#ece5dd]">

    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-7xl">
        <ComposerHero />
      </div>
    </section>

    {/* Composer Section */}
    <section
      id="composer"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            Compose Your
            <span className="text-[#25D366]"> Message</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Fill in the details and watch the live WhatsApp preview update
            instantly.
          </p>
        </div>

        {/* Form + Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <ComposeForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            setPreview={setPreview}
            setStatus={setStatus}
          />

          {/* Right */}
          <div className="flex justify-center">
            <PhonePreview
              preview={preview}
              status={status}
              setStatus={setStatus}
            />
          </div>

        </div>

      </div>
    </section>

  </div>
);
}