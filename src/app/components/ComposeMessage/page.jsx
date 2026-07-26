"use client";

import React from "react";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";


const ComposeButton = () => {
  return (
    <Link href="/form">
      <button
        className="fixed bottom-20 left-70 md:bottom-8 md:right-8 lg:left-110 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center text-whitehover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200">
        <HiOutlinePencilSquare size={30} />
      </button>
    </Link>
  );
};

export default ComposeButton;