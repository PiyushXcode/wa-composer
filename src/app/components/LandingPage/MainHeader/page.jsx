import React from 'react'
import Image from 'next/image'
import WhatsappIcon from '@/app/asserts/whatsapp.png';
const page = () => {
  return (
    <div className='border-b border-blue-950 bg-gray-300 pt-1 pl-2'>
        <div className='inline-flex justify-center items-center gap-2'>
            <Image src={WhatsappIcon} alt="WhatsappIcon" height={30} width={30}/>
            <span className='text-md text-gray-500 font-bold'>WhatApp Composer</span>
        </div>
    </div>
  )
}

export default page