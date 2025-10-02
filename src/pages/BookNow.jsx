import React, { useState } from 'react'
import Header from '../components/Header'
import TryDemo from '../components/TryDemo'
import Footer from '../components/Footer'
import PlevicBooking from '../components/PlevicBooking'
import ChatBot from '../components/ChatBot'

const BookNow = () => {
          const [chatBot, setChatBot] = useState(false);
  
  return (
    <>
     <Header />
     <PlevicBooking />
     <Footer />
     <ChatBot chatBot={chatBot} setChatBot={setChatBot}/>
    </>
  )
}

export default BookNow