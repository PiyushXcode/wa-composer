import React, { Fragment } from "react";
import Image from "next/image";

import Avatar_1 from "@/app/asserts/avatar_1.png";
import Avatar_2 from "@/app/asserts/avatar_2.png";
import Avatar_3 from "@/app/asserts/avatar_3.png";

const Profile = [
  {
    name: "Aryan",
    profile: Avatar_1,
    message: "Hey, I am Aryan",
    time: "10:25 PM",
    unread: 3,
    pinned: true,
    muted: false,
  },
  {
    name: "Raj",
    profile: Avatar_2,
    message: "Typing...",
    time: "Yesterday",
    unread: 0,
    pinned: false,
    muted: true,
  },
  {
    name: "Ayush",
    profile: Avatar_3,
    message: "see Your Tomrrow",
    time: "Yesterday",
    unread: 0,
    pinned: false,
    muted: true,
  },
];

const Page = () => {
    return (
        <div>
            <div className="px-2">
                {[...new Array(3)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        <div>
                            {Profile.map((item) => (
                                <div key={`${idx}-${item.name}`}
                                    className="flex items-center justify-between my-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            className="bg-gray-800 rounded-full"
                                            src={item.profile}
                                            alt={item.name}
                                            width={45}
                                            height={45}
                                        />

                                        <div className="flex flex-col">
                                            <span className={`font-medium ${item.unread > 0 ?"text-black" : "text-gray-500"}`}>
                                                {item.name}
                                            </span>

                                            <span
                                                className={`text-sm ${item.unread > 0
                                                        ? "text-black font-semibold"
                                                        : "text-gray-500"
                                                    }`}
                                            >
                                                {item.message}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-xs text-gray-400">10:25 PM</span>

                                        {item.unread > 0 && (
                                            <div
                                                className=" min-w-5 h-5 px-1 rounded-full bg-green-500  text-white text-xs flex items-center  justify-center font-semibold" >
                                                {item.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Page;