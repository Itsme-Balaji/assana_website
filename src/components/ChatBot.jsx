import React, { useState } from 'react'
import bot from '../assets/images/chatBot.webp'

const ChatBot = ({chatBot, setChatBot}) => {
  return (
   <div className=''> 
        <div onClick={()=>setChatBot((prev)=>!prev)} className='fixed z-50   flex justify-center items-center h-20 w-20 border-2 border-[#ec7979] bottom-10 right-10 rounded-full overflow-hidden'>
            <img src={bot} className='h-full w-full rounded-full object-contain' alt='bot' />, 
        </div>

         {chatBot &&<div className='fixed bg-[white] chatBotShadow h-120 w-75 sm:w-80 bottom-35 right-3 sm:right-10 rounded-xl z-50'>

        </div>}
    </div>   
  )
}

export default ChatBot