"use client";

import React from "react";
import {
    HiOutlineFaceSmile,
    HiOutlinePaperClip,
    HiOutlineCamera,
    HiPaperAirplane,
} from "react-icons/hi2";

const MessageBar = () => {
    return (
        <div
            className="absolute bottom-11 left-0 right-0 z-20 bg-white/20 backdrop-blur-md border-t
        border-white/20 px-3 sm:px-4 md:px-5 py-3 ">
            <div className="flex items-center gap-2 sm:gap-3">
                <button
                    className="flex items-center justify-center  w-10  h-10  sm:w-11  sm:h-11  rounded-full hover:bg-white/20 transition">
                    <HiOutlineFaceSmile className="text-white" size={24} />
                </button>

                <button
                    className=" flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full hover:bg-white/20 transition">
                    <HiOutlinePaperClip className="text-white" size={22} />
                </button>
                <div className="flex-1"> <input type="text" placeholder="Type a message" className=" w-full h-11 sm:h-12 rounded-full bg-white px-5 text-sm sm:text-base outline-none border border-transparent placeholder:text-gray-500 focus:border-[#25D366]transition-all" /></div>
                <button className="hiddensm:flexitems-centerjustify-centerw-11h-11rounded-full hover:bg-white/20 transition"> <HiOutlineCamera className="text-white" size={22} />
                </button>


                <button className=" flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-whitehover:bg-[#008069] active:scale-95 transition-all"><HiPaperAirplane size={20} className="-rotate-45" />
                </button>
            </div>
        </div>
    );
};

export default MessageBar;