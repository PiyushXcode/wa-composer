import React from 'react'
import Header from "@/app/components/Chats/MainChats/Header/page.jsx";
import ChatSection from "@/app/components/Chats/MainChats/ChatSection/page.jsx";
import MessageBar from "@/app/components/Chats/MainChats/MessageBar/page.jsx";
const page = () => {
  return (
    <div className='relative h-screen flex flex-col'>
        <Header/>
        <ChatSection/>
        <MessageBar/>
    </div>
  )
}

export default page