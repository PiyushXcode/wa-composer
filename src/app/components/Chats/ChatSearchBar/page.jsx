"use client";

import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="w-full bg-white px-3 md:px-4 py-2">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="relative w-full">
          {/* Search Icon */}
          <HiOutlineMagnifyingGlass
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />

          {/* Input */}
          <input
            type="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search or start a new chat"
            className="w-full h-11 rounded-lg bg-[#f0f2f5] pl-11 pr-4 text-sm md:text-base text-gray-800 placeholder:text-gray-500 outline-none border border-transparent
              focus:border-[#25D366] focus:bg-white transition-all duration-200"/>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;