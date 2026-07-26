"use client";

import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const ComposeButton = () => {
  return (
    <Link href="/form">
      <button
        className="fixed bottom-30 right-5  z-10  md:left-90  md:bottom-20  lg:left-110  lg:bottom-20  w-15 h-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-300">
        <HiOutlinePencilSquare size={30} />
      </button>
    </Link>
  );
};

export default ComposeButton;