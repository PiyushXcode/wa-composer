"use client";

import React from "react";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";


const ComposeButton = () => {
  return (
    <Link href="/form">
      <button
  className="
    fixed
    bottom-28
    right-5
    md:hidden

    w-14
    h-14

    rounded-full
    bg-[#25D366]

    flex
    items-center
    justify-center

    shadow-xl
    hover:scale-105
    active:scale-95
    transition
  "
>
  ✏️
</button>
    </Link>
  );
};

export default ComposeButton;