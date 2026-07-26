import React from 'react'
import ChatHeading from "@/app/components/Chats/ChatHeading/page.jsx";
import ChatSearchBar from "@/app/components/Chats/ChatSearchBar/page.jsx"
import ChatMenu from "@/app/components/Chats/ChatMenu/page.jsx"
const page = () => {
  return (
    <div>
        <ChatHeading/>
        <ChatSearchBar/>
        <ChatMenu/>
    </div>
  )
}

export default page