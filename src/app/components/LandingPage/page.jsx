import React from "react";
import MainHeader from "@/app/components/LandingPage/MainHeader/page";
import LeftIcon from "@/app/components/LandingPage/LeftIcons/page";
import Chat from "@/app/components/Chats/page";
import MainChats from "@/app/components/Chats/MainChats/page";

const Page = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col overflow-hidden">

      {/* Header */}
      <header className="shrink-0 border-b">
        <MainHeader />
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">

        {/* Left Navigation */}
        <aside className="md:w-16 shrink-0 border-r bg-white">
          <LeftIcon />
        </aside>

        {/* Chat List */}
        <section className="w-full md:w-[360px] lg:w-[420px] xl:w-[460px] border-r border-gray-300 bg-white overflow-y-auto shrink-0">
          <Chat />
        </section>

        {/* Chat Window */}
        <section className="flex-1 overflow-hidden">
          <MainChats />
        </section>

      </main>

    </div>
  );
};

export default Page;